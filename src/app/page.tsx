import type { Metadata } from "next";
import { IvoryHome } from "@/components/home/IvoryHome";
import { JsonLd } from "@/components/JsonLd";
import { getGoogleReviews } from "@/lib/reviews.server";
import { homeFaqJsonLd, pageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
};

export default async function Home() {
  const googleReviews = await getGoogleReviews(8);

  return (
    <>
      <JsonLd data={homeFaqJsonLd()} />
      <IvoryHome googleReviews={googleReviews} />
    </>
  );
}
