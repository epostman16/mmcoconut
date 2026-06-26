"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I am interested in your coconut products. Please share more details."
  );

  return (
    <motion.a
      href={`https://wa.me/${companyInfo.phoneRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
}
