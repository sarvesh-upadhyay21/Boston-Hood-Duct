"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Trash2,
  MessageSquare,
  Mail,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { BrandText } from "@/components/ui/BrandText";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
}

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["service", "services", "offer", "what do you do", "hood", "duct", "clean"],
    answer:
      "We specialize in:\n• Commercial Kitchen Hood & Exhaust Cleaning (Type I hoods, plenums, vertical/horizontal ducts)\n• Rooftop Exhaust Fan Degreasing & Hinge Kit Installations\n• HVAC Air Duct Cleaning & Sanitization (Commercial & Residential)\n• Commercial Dryer Vent Cleaning & Lint Remediation\n• NFPA 96 Fire Inspection Compliance & Official Stickers",
    quickReplies: ["Get a Quote", "Emergency Dispatch", "Service Areas"],
  },
  {
    keywords: ["cost", "price", "pricing", "rate", "quote", "how much", "estimate"],
    answer:
      "Pricing depends on hood size, duct length, grease accumulation, and roof fan accessibility. We provide fast, itemized, free quotes! Call our dispatch directly at +1 (857) 800-0890 or submit our online quote form.",
    quickReplies: ["Get a Quote", "Call Dispatch", "Our Services"],
  },
  {
    keywords: ["emergency", "urgent", "bfd", "isd", "inspection", "failed", "violation", "fine", "fire department"],
    answer:
      "🚨 Urgent Inspection Notice? We offer 24/7 emergency dispatch for restaurants facing sudden Boston Fire Department (BFD) or ISD inspection deadlines. Call +1 (857) 800-0890 immediately for same-day/next-day priority remediation.",
    quickReplies: ["Call Dispatch", "Email Support", "NFPA 96 Compliance"],
  },
  {
    keywords: ["nfpa", "nfpa 96", "compliance", "certificate", "certification", "sticker", "code", "527 cmr"],
    answer:
      "Yes! All our commercial hood cleanings strictly adhere to NFPA 96 standards and Massachusetts 527 CMR 1.00. Upon job completion, we apply an official compliance inspection sticker and provide before/after photo documentation for your fire marshal.",
    quickReplies: ["Our Services", "Get a Quote", "Contact Team"],
  },
  {
    keywords: ["area", "location", "boston", "where", "cambridge", "somerville", "quincy", "service area"],
    answer:
      "We serve the entire Greater Boston Metro area, including Boston, Cambridge, Somerville, Brookline, Newton, Quincy, Wellesley, Waltham, Framingham, Lynn, Malden, and surrounding Massachusetts communities.",
    quickReplies: ["Emergency Dispatch", "Our Services", "Get a Quote"],
  },
  {
    keywords: ["hour", "hours", "overnight", "schedule", "timing", "open", "weekend"],
    answer:
      "Our cleaning crews operate 24 Hours / 7 Days / 365 Days a year, including late-night and overnight shifts after your kitchen closes. Office dispatch is open Mon–Fri, 7:00 AM – 7:00 PM EST.",
    quickReplies: ["Call Dispatch", "Get a Quote", "Our Services"],
  },
  {
    keywords: ["phone", "call", "contact", "number", "email", "address", "reach"],
    answer:
      "You can reach Boston Hood & Duct directly:\n📞 Phone: +1 (857) 800-0890\n✉️ Email: service@bostonhoodandduct.com\n📍 Office: Wellesley, MA 02482\nOur dispatch responds within 15–30 minutes!",
    quickReplies: ["Call Dispatch", "Email Support", "Get a Quote"],
  },
  {
    keywords: ["frequency", "how often", "table 11.4", "interval", "requirement"],
    answer:
      "Under NFPA 96 Table 11.4:\n• Monthly: Solid fuel cooking (wood/charcoal)\n• Quarterly: High-volume cooking (24-hour diners, charbroiling, fast food)\n• Semi-Annually: Moderate volume (sit-down restaurants)\n• Annually: Low-volume (seasonal, churches, day camps)",
    quickReplies: ["Our Services", "Get a Quote", "Contact Team"],
  },
];

function findBotAnswer(userInput: string): { answer: string; quickReplies?: string[] } {
  const query = userInput.toLowerCase();

  for (const item of FAQ_KNOWLEDGE_BASE) {
    if (item.keywords.some((k) => query.includes(k))) {
      return { answer: item.answer, quickReplies: item.quickReplies };
    }
  }

  return {
    answer:
      "Thank you for reaching out! To give you the most accurate assistance regarding your kitchen or duct system, please call our Boston dispatch office directly at +1 (857) 800-0890, or email service@bostonhoodandduct.com.",
    quickReplies: ["Our Services", "Get a Quote", "Call Dispatch"],
  };
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      sender: "bot",
      text: "👋 Welcome to Boston Hood & Duct!\n\nYou're connecting with our Massachusetts commercial kitchen safety & dispatch team. Ask us anything about hood cleaning, NFPA 96 compliance, BFD inspection remediation, or pricing!",
      timestamp: "Just now",
      quickReplies: ["Our Services", "Why Choose Us?", "Emergency Dispatch", "Get a Quote"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = findBotAnswer(query);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies: response.quickReplies,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "cleared-msg",
        sender: "bot",
        text: "Chat cleared. How can our Boston kitchen safety team help you today?",
        timestamp: "Just now",
        quickReplies: ["Our Services", "Emergency Dispatch", "Get a Quote"],
      },
    ]);
  };

  const handleQuickAction = (action: string) => {
    if (action === "Get a Quote") {
      window.location.href = "/contact#contact-form";
    } else if (action === "Call Dispatch") {
      window.location.href = "tel:+18578000890";
    } else if (action === "Email Support") {
      window.location.href = "mailto:service@bostonhoodandduct.com";
    } else {
      handleSend(action);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[110]">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle assistant chat"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#E11D2E] text-white flex items-center justify-center shadow-2xl relative cursor-pointer focus:outline-none"
        style={{
          boxShadow: "0 8px 30px rgba(225, 29, 46, 0.45)",
        }}
      >
        {/* Soft Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#E11D2E] opacity-40 animate-ping pointer-events-none" />

        <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/60 flex items-center justify-center bg-white/10">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-[4.75rem] sm:inset-auto sm:bottom-20 sm:right-0 sm:left-auto w-auto sm:w-[380px] max-w-[400px] h-[520px] max-h-[calc(100dvh-5.5rem)] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden z-[120]"
          >
            {/* Header: Deep Navy */}
            <div className="bg-[#0B1F3A] text-white p-3 sm:p-3.5 px-3.5 sm:px-4 flex items-center justify-between rounded-t-3xl shadow-md flex-shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/15 flex items-center justify-center text-white border border-white/20 shadow-inner">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm tracking-tight text-white leading-tight">
                    <BrandText>Boston Hood &amp; Duct Assistant</BrandText>
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] text-emerald-300 font-semibold">Online</span>
                  </div>
                </div>
              </div>

              {/* Action icons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gradient-to-b from-slate-50/50 to-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                      msg.sender === "user"
                        ? "bg-[#0B1F3A] text-white rounded-br-xs"
                        : "bg-white text-slate-700 border border-slate-200/90 rounded-bl-xs"
                    }`}
                  >
                    <div className="whitespace-pre-line"><BrandText>{msg.text}</BrandText></div>

                    {/* Welcome bullet features */}
                    {msg.id === "welcome-msg" && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-[#E11D2E] flex-shrink-0" />
                        <span>Real Experts • NFPA 96 Aligned • 24/7 Support</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-600 mt-1 px-1">{msg.timestamp}</span>

                  {/* Contextual Quick Replies */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickAction(reply)}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-red-50 text-[#E11D2E] border border-red-100 hover:bg-red-100 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-200/90 text-slate-400 w-16 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2E] animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E11D2E] animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E11D2E] animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="p-2 sm:p-2.5 px-2.5 sm:px-3 bg-white border-t border-slate-100 grid grid-cols-3 gap-1.5 sm:gap-2 flex-shrink-0">
              <a
                href="sms:+18578000890"
                className="py-1.5 sm:py-2 px-1 sm:px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs transition-colors"
              >
                <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span>Text</span>
              </a>

              <a
                href="mailto:service@bostonhoodandduct.com"
                className="py-1.5 sm:py-2 px-1 sm:px-2 rounded-xl bg-[#E11D2E] hover:bg-[#B91C2B] text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs transition-colors"
              >
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span>Email</span>
              </a>

              <a
                href="tel:+18578000890"
                className="py-1.5 sm:py-2 px-1 sm:px-2 rounded-xl bg-[#0B1F3A] hover:bg-[#122E54] text-white font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs transition-colors"
              >
                <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span>Call</span>
              </a>
            </div>

            {/* Chat Input Field */}
            <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200/70 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-1.5 sm:gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-slate-200 bg-slate-50 text-xs sm:text-sm text-[#0B1F3A] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E11D2E]/20 focus:border-[#E11D2E] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E11D2E] hover:bg-[#B91C2B] disabled:opacity-40 text-white flex items-center justify-center shadow-sm transition-colors flex-shrink-0 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                </button>
              </form>
              <p className="text-center text-[10px] sm:text-[11px] text-slate-600 mt-1.5">
                Chat automatically clears after 30 minutes of inactivity
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
