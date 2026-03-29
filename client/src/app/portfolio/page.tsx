import { Portfolio } from "@/features/Portfolio/Portfolio";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import type { Metadata } from "next";

const portfolioPageTitle = "Portfolio | Nikolay Lazarev";
const portfolioPageDescription =
  "Selected wedding films by Nikolay Lazarev — destination and European celebrations in Bordeaux, Marbella, Warsaw, Paris, and beyond. Cinematic storytelling, refined visuals, emotional highlights.";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://dev-nikolay-lazarev-wedding.vercel.app";
  const pageUrl = `${baseUrl}/portfolio`;

  return {
    title: portfolioPageTitle,
    description: portfolioPageDescription,
    keywords:
      "Nikolay Lazarev, wedding film portfolio, wedding videography showreel, destination wedding video, cinematic wedding films, Europe wedding cinematographer, Bordeaux, Marbella, Warsaw, Paris",
    openGraph: {
      title: portfolioPageTitle,
      description: portfolioPageDescription,
      type: "website",
      url: pageUrl,
      siteName: "Nikolay Lazarev",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Nikolay Lazarev — wedding film portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: portfolioPageTitle,
      description: portfolioPageDescription,
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

export default function PortfolioFeature() {
  return (
    <>
      <OrganizationStructuredData />
      <Portfolio />
    </>
  );
}
