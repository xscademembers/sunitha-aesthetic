import type { Metadata } from "next";
import { EditorialHome } from "@/components/home/EditorialHome";

export const metadata: Metadata = {
  title: "Home 2 | Dr Sunita Aesthetics",
  description:
    "Editorial homepage for Dr. Sunita Ghanta — plastic, cosmetic and reconstructive surgery in Visakhapatnam.",
};

export default function HomeTwoPage() {
  return <EditorialHome />;
}
