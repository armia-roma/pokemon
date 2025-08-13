"use client";
import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider"

export default function ChakraProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}