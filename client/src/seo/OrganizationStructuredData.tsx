import { getCSPNonce } from "@/hooks/useCSPNonce";
import Script from "next/script";

export async function OrganizationStructuredData() {
  const nonce = await getCSPNonce();

  const baseUrl = "https://lazarevwedding.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Wedding Cinematography",
    name: "Nikolay Lazarev",
    description:
      "Nikolay Lazarev — a wedding cinematographer known for his refined visual style and artistic approach to storytelling.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/icons/logo.png`,
      width: 120,
      height: 117,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "nikolay.lazarev@gmail.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      //links
      "https://www.instagram.com/nikolaylazarevv",
    ],
    foundingDate: "2025",
    numberOfEmployees: "1-25",
    industry: "Wedding Cinematography",
    serviceArea: {
      "@type": "Place",
      name: "Poland",
    },
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      nonce={nonce}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
