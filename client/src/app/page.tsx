import { Home } from "@/features/Home/Home";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://nikolay-lazarev.vercel.app";

  return {
    title: "Nikolay Lazarev | Wedding Cinematographer",
    description:
      "Nikolay Lazarev | a wedding cinematographer known for his refined visual style and artistic approach to storytelling.",
    keywords:
      "Nikolay Lazarev, Wedding Cinematographer, Wedding Videographer, Wedding Cinematography, Wedding Video, Wedding Film",
    openGraph: {
      title: "Nikolay Lazarev | Wedding Cinematographer",
      description:
        "Nikolay Lazarev | a wedding cinematographer known for his refined visual style and artistic approach to storytelling.",
      type: "website",
      siteName: "Nikolay Lazarev",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Nikolay Lazarev | Wedding Cinematographer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nikolay Lazarev | Wedding Cinematographer",
      description:
        "Nikolay Lazarev | a wedding cinematographer known for his refined visual style and artistic approach to storytelling.",
      images: [`${baseUrl}/preview.png`],
    },
    alternates: {
      canonical: baseUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomeFeature() {
  return (
    <>
      <OrganizationStructuredData />
      <Home />
    </>
  );
}
