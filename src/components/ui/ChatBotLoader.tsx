"use client";

import dynamic from "next/dynamic";

const ChatBot = dynamic(
  () => import("@/components/ui/ChatBot").then((mod) => mod.ChatBot),
  {
    ssr: false,
    loading: () => null,
  },
);

export function ChatBotLoader() {
  return <ChatBot />;
}
