"use client";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function Provider({ children }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </ThemeProvider>
  );
}
