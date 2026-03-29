import { Prices } from "@/features/Prices/Prices";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

const pricesPageTitle = "Prices | Nikolay Lazarev";
const pricesPageDescription =
  "Wedding videography packages by Nikolay Lazarev — Moment Forever, A Story For Two, and Movie About US. Cinematic films, highlights, drone, speeches; pricing in PLN plus optional add-ons.";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://nikolay-lazarev.vercel.app";
  const pageUrl = `${baseUrl}/prices`;

  return {
    title: pricesPageTitle,
    description: pricesPageDescription,
    keywords:
      "Nikolay Lazarev, wedding videography prices, wedding film packages, wedding cinematography cost, Poland wedding video, PLN, wedding videographer packages, cinematic wedding film",
    openGraph: {
      title: pricesPageTitle,
      description: pricesPageDescription,
      type: "website",
      url: pageUrl,
      siteName: "Nikolay Lazarev",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Nikolay Lazarev — wedding film packages and prices",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pricesPageTitle,
      description: pricesPageDescription,
      images: [`${baseUrl}/preview.png`],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PricesFeature() {
  return (
    <>
      <OrganizationStructuredData />
      <Prices />
    </>
  );
}
