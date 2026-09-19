import type { Metadata } from "next";
import { IvoryHome } from "@/components/home/IvoryHome";
import { JsonLd } from "@/components/JsonLd";
import { homeFaqJsonLd, pageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqJsonLd()} />
      <IvoryHome />
    </>
  );
}
