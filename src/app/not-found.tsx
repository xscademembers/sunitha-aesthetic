import type { Metadata } from "next";
import { IvoryNotFound } from "@/components/home/IvoryNotFound";

export const metadata: Metadata = {
  title: "Page Not Found | Dr Sunita Aesthetics",
  description: "This page is no longer available. Return to Dr Sunita Aesthetics in Visakhapatnam.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <IvoryNotFound />;
}
