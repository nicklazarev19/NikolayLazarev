import { About } from "@/features/About/About";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

const aboutPageTitle = "About | Nikolay Lazarev";
const aboutPageDescription =
  "Wedding cinematographer Nikolay Lazarev — refined visual style, artistic storytelling, and an emotional approach to capturing your day. Based in Europe, available for destination weddings worldwide.";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://nikolay-lazarev.vercel.app";
  const pageUrl = `${baseUrl}/about`;

  return {
    title: aboutPageTitle,
    description: aboutPageDescription,
    keywords:
      "Nikolay Lazarev, wedding cinematographer about, wedding videographer Europe, artistic wedding films, cinematic storytelling, destination wedding videographer",
    openGraph: {
      title: aboutPageTitle,
      description: aboutPageDescription,
      type: "website",
      url: pageUrl,
      siteName: "Nikolay Lazarev",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Nikolay Lazarev — wedding cinematographer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: aboutPageTitle,
      description: aboutPageDescription,
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

export default function AboutFeature() {
  return (
    <>
      <OrganizationStructuredData />
      <About />
    </>
  );
}
