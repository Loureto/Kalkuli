"use client";

import { clientComponent } from "@/components";

const ChatbotPage = clientComponent(
  import("@/modules").then((mod) => mod.ChatbotPage)
);

export default ChatbotPage;
