import {
  pricesDataByCurrency,
  type PriceCurrency,
} from "@/constants/pricesData";
import { Prices } from "@/features/Prices/Prices";
import { HeroPosterPreload } from "@/seo/HeroPosterPreload";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const baseUrl = "https://lazarevwedding.com";
const currencyConfig: Record<
  PriceCurrency,
  {
    titleCurrency: string;
    keywordsCurrency: string;
    slug: string;
  }
> = {
  pln: {
    titleCurrency: "PLN",
    keywordsCurrency: "PLN, Poland wedding video",
    slug: "k7m2v9q4",
  },
  eur: {
    titleCurrency: "EUR",
    keywordsCurrency: "EUR, destination wedding video",
    slug: "t3p8x6n1",
  },
};

export function generateStaticParams() {
  return Object.values(currencyConfig).map((item) => ({ currency: item.slug }));
}

const getCurrencyBySlug = (slug: string): PriceCurrency | null => {
  const matchedEntry = (Object.entries(currencyConfig) as [PriceCurrency, (typeof currencyConfig)[PriceCurrency]][])
    .find(([, config]) => config.slug === slug);

  return matchedEntry ? matchedEntry[0] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ currency: string }>;
}): Promise<Metadata> {
  const { currency } = await params;
  const currentCurrency = getCurrencyBySlug(currency);
  if (!currentCurrency) {
    return {};
  }

  const currentConfig = currencyConfig[currentCurrency];
  const pageUrl = `${baseUrl}/prices/${currentConfig.slug}`;
  const pricesPageTitle = `Prices (${currentConfig.titleCurrency}) | Nikolay Lazarev`;
  const pricesPageDescription =
    "Wedding videography packages by Nikolay Lazarev — Moment Forever, A Story For Two, and Movie About US. Cinematic films, highlights, drone, speeches; pricing and optional add-ons.";

  return {
    title: pricesPageTitle,
    description: pricesPageDescription,
    keywords: `Nikolay Lazarev, wedding videography prices, wedding film packages, wedding cinematography cost, ${currentConfig.keywordsCurrency}, wedding videographer packages, cinematic wedding film`,
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

export default async function PricesByCurrencyPage({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;
  const currentCurrency = getCurrencyBySlug(currency);
  if (!currentCurrency) {
    notFound();
  }

  const currentPricesData = pricesDataByCurrency[currentCurrency];

  return (
    <>
      <HeroPosterPreload href="/images/pricesWelcome.jpg" />
      <OrganizationStructuredData />
      <Prices pricesData={currentPricesData} />
    </>
  );
}
