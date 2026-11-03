<?php
header('Content-Type: application/json; charset=utf-8');

function quote_response($statusCode, $payload) {
    http_response_code($statusCode);
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    quote_response(405, [
        'success' => false,
        'message' => 'This endpoint accepts only POST requests.',
    ]);
}

function normalize_array($value) {
    if (!is_array($value)) {
        return array_values(array_filter(array_map('trim', preg_split('/[;,]/', (string) $value ?? ''))));
    }

    return array_values(array_filter(array_map('trim', $value)));
}

function sanitize_text($value) {
    return trim((string) ($value ?? ''));
}

$fullName = sanitize_text($_POST['fullName'] ?? '');
$email = sanitize_text($_POST['email'] ?? '');
$phone = sanitize_text($_POST['phone'] ?? '');
$streetAddress = sanitize_text($_POST['streetAddress'] ?? '');
$city = sanitize_text($_POST['city'] ?? '');
$state = sanitize_text($_POST['state'] ?? '');
$zipCode = sanitize_text($_POST['zipCode'] ?? '');
$propertyType = sanitize_text($_POST['propertyType'] ?? '');
$businessName = sanitize_text($_POST['businessName'] ?? '');
$businessHours = sanitize_text($_POST['businessHours'] ?? '');
$contactMethod = sanitize_text($_POST['contactMethod'] ?? '');
$preferredSchedule = sanitize_text($_POST['preferredSchedule'] ?? '');
$preferredDate = sanitize_text($_POST['preferredDate'] ?? '');
$preferredHours = sanitize_text($_POST['preferredHours'] ?? '');
$reasonForService = sanitize_text($_POST['reasonForService'] ?? '');
$additionalMessage = sanitize_text($_POST['additionalMessage'] ?? '');
$consent = sanitize_text($_POST['consent'] ?? '');
$serviceRequired = normalize_array($_POST['serviceRequired'] ?? []);

if ($fullName === '' || $email === '' || $phone === '' || $streetAddress === '' || $city === '' || $state === '' || $zipCode === '') {
    quote_response(400, [
        'success' => false,
        'message' => 'Please complete the required business and contact details before submitting.',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    quote_response(400, [
        'success' => false,
        'message' => 'Please provide a valid email address.',
    ]);
}

if (preg_replace('/\D/', '', $phone) === '' || strlen(preg_replace('/\D/', '', $phone)) < 10) {
    quote_response(400, [
        'success' => false,
        'message' => 'Please enter a valid phone number.',
    ]);
}

if ($state !== 'MA') {
    quote_response(400, [
        'success' => false,
        'message' => 'This service request is currently available for Massachusetts properties only.',
    ]);
}

if (!preg_match('/^\d{5}(?:-\d{4})?$/', $zipCode)) {
    quote_response(400, [
        'success' => false,
        'message' => 'Please enter a valid Massachusetts ZIP code.',
    ]);
}

if (empty($serviceRequired)) {
    quote_response(400, [
        'success' => false,
        'message' => 'Please select at least one service.',
    ]);
}

if ($consent !== 'true') {
    quote_response(400, [
        'success' => false,
        'message' => 'Please agree to be contacted about this quote request.',
    ]);
}

foreach ($serviceRequired as $choice) {
    if (!in_array($choice, [
        'Hood & Exhaust Cleaning',
        'NFPA 96 Inspection',
        'HVAC Air Duct Cleaning',
        'Dryer Vent Cleaning',
    ], true)) {
        quote_response(400, [
            'success' => false,
            'message' => 'One or more selected services are not valid.',
        ]);
    }
}

if (strlen($additionalMessage) < 10) {
    quote_response(400, [
        'success' => false,
        'message' => 'Please provide a little more detail about the service required.',
    ]);
}

$referenceId = 'BHD-' . strtoupper(substr(md5(uniqid((string) time(), true)), 0, 10));
$subject = 'Quote request ' . $referenceId . ': ' . implode(', ', $serviceRequired);

$bodyLines = [
    'Quote request ' . $referenceId,
    '',
    'Name: ' . $fullName,
    'Business / Property: ' . ($businessName !== '' ? $businessName : 'Not provided'),
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Preferred contact method: ' . ($contactMethod !== '' ? $contactMethod : 'Not provided'),
    '',
    'Service address: ' . $streetAddress . ', ' . $city . ', ' . $state . ' ' . $zipCode,
    'Property type: ' . ($propertyType !== '' ? $propertyType : 'Not provided'),
    'Operating hours: ' . ($businessHours !== '' ? $businessHours : 'Not provided'),
    '',
    'Requested services: ' . implode(', ', $serviceRequired),
    'Preferred schedule: ' . ($preferredSchedule !== '' ? $preferredSchedule : 'Not provided'),
    'Preferred date: ' . ($preferredDate !== '' ? $preferredDate : 'Not provided'),
    'Preferred cleaning hours: ' . ($preferredHours !== '' ? $preferredHours : 'Not provided'),
    'Reason for service: ' . ($reasonForService !== '' ? $reasonForService : 'Not provided'),
    '',
    'Additional message:',
    $additionalMessage,
    '',
    'Consent to contact: Yes',
];
$messageBody = implode("\r\n", $bodyLines);

$to = 'service@bostonhoodandduct.com';
$replyTo = $email;
$from = 'Boston Hood & Duct <no-reply@bostonhoodandduct.com>';
$headers = [
    'From: ' . $from,
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
];

$attachments = [];
if (isset($_FILES['files']) && is_array($_FILES['files']['name'])) {
    $fileNames = $_FILES['files']['name'];
    $tmpNames = $_FILES['files']['tmp_name'];
    $sizes = $_FILES['files']['size'];
    $errors = $_FILES['files']['error'];

    for ($i = 0; $i < count($fileNames); $i++) {
        if (!isset($fileNames[$i]) || $fileNames[$i] === '') {
            continue;
        }

        if ($errors[$i] !== UPLOAD_ERR_OK) {
            quote_response(400, [
                'success' => false,
                'message' => 'One uploaded file could not be processed. Please try again.',
            ]);
        }

        if ($sizes[$i] > 10 * 1024 * 1024) {
            quote_response(400, [
                'success' => false,
                'message' => 'Each attachment must be 10 MB or smaller.',
            ]);
        }

        $ext = strtolower(pathinfo($fileNames[$i], PATHINFO_EXTENSION));
        if (!in_array($ext, ['jpg', 'jpeg', 'png', 'pdf'], true)) {
            quote_response(400, [
                'success' => false,
                'message' => 'Only JPG, PNG, and PDF attachments are accepted.',
            ]);
        }

        $attachments[] = [
            'name' => preg_replace('/[^A-Za-z0-9_.-]/', '_', basename($fileNames[$i])),
            'tmp_name' => $tmpNames[$i],
        ];
    }
}

if (!empty($attachments)) {
    $boundary = 'PHPQuoteBoundary_' . md5((string) time());
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

    $mailBody = "--{$boundary}\r\n";
    $mailBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mailBody .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $mailBody .= $messageBody . "\r\n";

    foreach ($attachments as $attachment) {
        $fileData = file_get_contents($attachment['tmp_name']);
        if ($fileData === false) {
            quote_response(500, [
                'success' => false,
                'message' => 'One uploaded file could not be read. Please try again.',
            ]);
        }

        $contentType = mime_content_type($attachment['tmp_name']) ?: 'application/octet-stream';
        $mailBody .= "--{$boundary}\r\n";
        $mailBody .= 'Content-Type: ' . $contentType . '; name="' . $attachment['name'] . '"' . "\r\n";
        $mailBody .= 'Content-Disposition: attachment; filename="' . $attachment['name'] . '"' . "\r\n";
        $mailBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $mailBody .= chunk_split(base64_encode($fileData)) . "\r\n";
    }

    $mailBody .= "--{$boundary}--";
    $mailOk = mail($to, $subject, $mailBody, implode("\r\n", $headers));
} else {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $mailOk = mail($to, $subject, $messageBody, implode("\r\n", $headers));
}

if (!$mailOk) {
    quote_response(500, [
        'success' => false,
        'message' => 'We could not deliver your quote request right now. Please call +1 (857) 800-0890.',
    ]);
}

quote_response(200, [
    'success' => true,
    'referenceId' => $referenceId,
    'message' => 'Your quote request was sent to our team.',
]);
