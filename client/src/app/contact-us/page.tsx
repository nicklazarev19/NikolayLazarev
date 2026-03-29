import { ContactUs } from "@/features/ContactUs/ContactUs";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import type { Metadata } from "next";

const contactPageTitle = "Contact | Nikolay Lazarev";
const contactPageDescription =
  "Get in touch with Nikolay Lazarev for your wedding cinematography. Share your wedding plans, date, venue, and vision — available for destination weddings across Europe and beyond.";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://nikolay-lazarev.vercel.app";
  const pageUrl = `${baseUrl}/contact-us`;

  return {
    title: contactPageTitle,
    description: contactPageDescription,
    keywords:
      "Nikolay Lazarev, contact wedding videographer, book wedding cinematographer, wedding film inquiry, destination wedding video, Europe wedding cinematography",
    openGraph: {
      title: contactPageTitle,
      description: contactPageDescription,
      type: "website",
      url: pageUrl,
      siteName: "Nikolay Lazarev",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Nikolay Lazarev — contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: contactPageTitle,
      description: contactPageDescription,
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

export default function ContactUsFeature() {
  return (
    <>
      <OrganizationStructuredData />
      <ContactUs />
    </>
  );
}
