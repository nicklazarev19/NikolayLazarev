import {
  fetchVimeoThumbnailByVideoUrl,
  getVimeoThumbnailByVideoUrl,
} from "@/lib/vimeoThumbnails";

export const PORTFOLIO_DESCRIPTION_BREAK = "[[break]]" as const;

export interface PortfolioData {
  id: number;
  place: string;
  couple: string;
  description: string;
  thumbnail?: string;
  highlights?: string[];
  films?: string[];
}

export type PortfolioVideoSource = { label: string; src: string };

export function portfolioItemToVideoSources(
  item: PortfolioData,
): PortfolioVideoSource[] {
  const out: PortfolioVideoSource[] = [];

  const highlights = (item.highlights ?? []).map((raw) => raw?.trim()).filter(Boolean) as string[];
  const films = (item.films ?? []).map((raw) => raw?.trim()).filter(Boolean) as string[];

  highlights.forEach((src, i) => {
    const label = highlights.length === 1 ? "Highlight" : `Highlight ${i + 1}`;
    out.push({ label, src });
  });

  films.forEach((src, i) => {
    const label = films.length === 1 ? "Film" : `Film ${i + 1}`;
    out.push({ label, src });
  });

  return out;
}

export function portfolioItemHasVideo(item: PortfolioData): boolean {
  return portfolioItemToVideoSources(item).length > 0;
}

function portfolioItemPrimaryVideoUrl(item: PortfolioData): string | null {
  return portfolioItemToVideoSources(item)[0]?.src ?? null;
}

export function portfolioItemThumbnail(item: PortfolioData): string {
  const manualThumbnail = item.thumbnail?.trim();
  if (manualThumbnail) return manualThumbnail;

  const firstVideoUrl = portfolioItemPrimaryVideoUrl(item);
  const autoThumbnail = firstVideoUrl
    ? getVimeoThumbnailByVideoUrl(firstVideoUrl)
    : null;

  return autoThumbnail ?? "/images/portfolioImagePreview1.jpg";
}

export async function resolvePortfolioItemThumbnail(
  item: PortfolioData,
): Promise<string> {
  const firstVideoUrl = portfolioItemPrimaryVideoUrl(item);
  if (!firstVideoUrl) return portfolioItemThumbnail(item);

  const resolved = await fetchVimeoThumbnailByVideoUrl(firstVideoUrl);
  return resolved ?? portfolioItemThumbnail(item);
}

export const portfolioData: PortfolioData[] = [
  {
    id: 1,
    place: "France, Bordeaux",
    couple: "Ross & Vanessa",
    description:
      "Ross and Vanessa celebrated their wedding in the Bordeaux region of France, hosting their day at a beautiful château surrounded by vineyards and the quiet charm of the French countryside. With the bride coming from France and the groom bringing his English and Scottish heritage, the celebration naturally blended two cultures into one elegant and personal story.[[break]]Ross wore traditional Scottish attire, including a classic kilt that honored his roots, adding a distinctive character to the day. Set against the refined architecture of the château and the softness of the surrounding landscape, this cultural contrast gave the celebration a unique atmosphere — timeless, expressive, and deeply meaningful.[[break]]The wedding unfolded with ease, moving from intimate moments shared with family to a lively evening celebration filled with warmth and connection. The setting, traditions, and natural rhythm of the day came together effortlessly, creating a wedding that felt both sophisticated and authentic, shaped by heritage, place, and genuine emotion.",
    thumbnail:
      "https://i.vimeocdn.com/video/2137828740-0e61944668217fcd7bd028b830d4ae5104729b4aa25dec5b2b223eb1dc939155-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1176687780"],
    films: ["https://player.vimeo.com/video/1181751544"],
  },
  {
    id: 2,
    place: "Spain, Marbella",
    couple: "Hugo & Anastasia",
    description:
      "Anastasia and Hugo traveled from Canada to Marbella to celebrate their wedding surrounded by sun, sea air, and the relaxed elegance of the Spanish coast. Both professional ballroom dancers, they brought a natural sense of movement, grace, and connection into every moment of the day, which gave the celebration a distinctive rhythm and energy. Set at a private villa overlooking the Mediterranean, the wedding combined refined details with the effortless atmosphere of a destination gathering.[[break]]The day unfolded under clear skies with an outdoor ceremony filled with light and emotion, followed by an evening shaped by warm sunset tones and a lively celebration beneath the open sky. Their background in dance was felt not only on the dance floor, but in the way they moved together throughout the day — confident, elegant, and completely present with one another.[[break]]Filming the wedding meant capturing this balance between sophistication and spontaneity. Marbella’s soft coastal light and relaxed surroundings became an essential part of the story, creating a film that reflects a celebration both stylish and deeply personal.",
    thumbnail:
      "https://i.vimeocdn.com/video/2138275803-fd0ad8a361fe9d3e234f5520fec13cb20a6b62b840c6c93145d28248f2a48997-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1177045678"],
  },
  {
    id: 3,
    place: "Poland, Warsaw",
    couple: "Mykhailo & Anastasiia",
    description:
      "Mykhailo and Anastasiia celebrated their wedding at Raffles Europejski Warsaw, one of the city’s most iconic and elegant hotels. Located in the heart of Warsaw, the venue combines historic heritage with contemporary luxury, creating a sophisticated atmosphere perfectly suited for a refined city celebration.[[break]]The day was filled with elegance and quiet emotion, where modern style met timeless interiors and carefully curated details. From intimate moments shared in the hotel’s classic spaces to the evening celebration surrounded by family and friends, every part of the wedding felt polished yet deeply personal.[[break]]Filming the day meant capturing the rhythm of a modern urban wedding shaped by architecture, light, and genuine connection — a celebration defined by sophistication, atmosphere, and the unique character of Warsaw itself.",
    thumbnail:
      "https://i.vimeocdn.com/video/2138305316-d71e20e66fb55baa76878c798dc43c68e56f03699f8a15acddd1d06926a78f94-d_960?region=us",
    films: ["https://player.vimeo.com/video/1177068728"],
  },
  {
    id: 4,
    place: "France, Paris",
    couple: "Ruslan & Nastia",
    description:
      "Ruslan and Anastasia celebrated their wedding in Paris in May, beginning the day at the iconic Ritz Paris, where timeless elegance and classic French luxury set the tone for the celebration. Surrounded by refined interiors and the unmistakable atmosphere of the city, the morning felt calm and romantic, allowing the couple to fully enjoy each moment together before the festivities began.[[break]]The second part of the wedding unfolded on a boat cruising along the Seine, offering a completely different perspective of Paris. As the city passed by — historic bridges, golden evening light, and famous landmarks — the celebration became lively and intimate at the same time. The movement of the river and the changing scenery created a unique rhythm, turning the wedding into an experience rather than a single location.[[break]]Filming the day meant capturing both sides of Paris — its quiet sophistication and its vibrant energy — creating a story shaped by atmosphere, movement, and the unmistakable romance of the city.",
    thumbnail:
      "https://i.vimeocdn.com/video/2137826074-20568f97991f48c3f94f43d067712cd4accb962b5d71c5c634d33f6972b03650-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1176683950"],
  },
  {
    id: 5,
    place: "Italy, Toscana",
    couple: "Stefano & Sofi",
    description:
      "Stefano and Sophie celebrated their wedding in Tuscany, choosing an intimate and secluded setting surrounded by rolling hills, warm light, and the quiet beauty of the Italian countryside. Shared only with their closest family and friends, the day felt calm, personal, and deeply connected to its surroundings.[[break]]Sophie, a professional model, brought a natural elegance and effortless presence to the celebration, perfectly complementing the timeless atmosphere of the region. The wedding balanced refinement with simplicity, allowing genuine moments and emotions to take center stage.[[break]]The celebration unfolded at an unhurried pace, shaped by scenic landscapes, meaningful conversations, and the relaxed rhythm of a destination gathering. Filming the day meant preserving this sense of intimacy and authenticity — a wedding defined by subtle beauty, style, and a feeling of being fully present in each moment.",
    thumbnail:
      "https://i.vimeocdn.com/video/2139544836-2bce3e654fa6f13069866b6fb3805ea3a0e0847c039738dfddb4bd70662e74ca-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1177051536"],
  },
  {
    id: 6,
    place: "Poland, Lodz",
    couple: "Anastasia & Bohdan",
    description:
      "Anastasia and Bohdan celebrated their wedding at a countryside estate near Łódź, Poland, choosing a setting that reflected their creative spirit and desire to do things differently. Surrounded by nature and open space, the venue became a canvas for a celebration that felt artistic, personal, and far from traditional expectations.[[break]]Every part of the day carried a unique character — from carefully chosen details to spontaneous moments that gave the wedding its distinctive energy. The atmosphere felt relaxed and expressive, shaped by individuality and a strong sense of connection between the couple and their guests.[[break]]Filming the celebration meant embracing this unconventional rhythm, focusing on mood, movement, and the small moments that made the day feel authentic. The result was a wedding that stood out not through grandeur, but through creativity and personality — a celebration defined by originality and genuine emotion.",
    thumbnail:
      "https://i.vimeocdn.com/video/2138278383-899ca67c054885d19616369f9b15feaa3e49c5e8422887cc6673cdb8b58b86ee-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1177047627"],
  },
  {
    id: 7,
    place: "Poland, Warsaw",
    couple: "Ivan & Yana",
    description:
      "Ivan and Yana celebrated their wedding at Belvedere in Warsaw, nestled within the historic gardens of Łazienki Królewskie. Surrounded by classical architecture, peaceful alleys, and lush greenery, the location offered a rare combination of elegance and tranquility in the heart of the city. The atmosphere felt refined yet relaxed, allowing the day to unfold naturally among close family and friends.[[break]]From the quiet moments before the ceremony to the lively evening reception, the celebration carried a sense of warmth and authenticity. Natural light flowing through the historic interiors and the timeless character of the surroundings created a beautiful backdrop for a wedding that felt both intimate and sophisticated.[[break]]Filming the day meant focusing on genuine interactions and the subtle details that defined their celebration. The harmony between the historic setting and the couple’s modern energy made the wedding feel effortlessly stylish — a timeless Warsaw celebration shaped by emotion, atmosphere, and place.",
    thumbnail:
      "https://i.vimeocdn.com/video/2137821738-6d487b4e00f7d148e3d7815b62ae332d0d3cbe10e9a144eaeaf52fb63446f12e-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1176682098"],
  },
  {
    id: 8,
    place: "Poland, Warsaw",
    couple: "Max & Ruslana",
    description:
      "Max and Ruslana celebrated their wedding at Pałac Czosnowskich, a historic estate surrounded by greenery and classic Polish architecture. The venue’s elegant character and peaceful atmosphere created a refined setting where the celebration felt both timeless and relaxed.[[break]]The day unfolded naturally, filled with warm moments shared among family and friends, balancing sophistication with genuine emotion. Historic interiors and soft natural light added depth and texture to the atmosphere, allowing each part of the celebration to feel effortless and sincere.[[break]]Filming the wedding meant focusing on the connection between the couple and the mood of the place itself — capturing a story shaped by elegance, intimacy, and the quiet charm of a classic palace wedding in Poland.",
    thumbnail:
      "https://i.vimeocdn.com/video/2138281159-9a721ec4e35276ce99c2b21d14fbec19362081ee26b2fd63414c89ba1ce3c199-d_960?region=us",
    highlights: ["https://player.vimeo.com/video/1177049812"],
  },
  {
    id: 9,
    place: "Poland, Warsaw",
    couple: "Liza & Vlad",
    description:
      "Liza and Vlad chose Pałac Mała Wieś near Warsaw for its timeless architecture and peaceful garden surroundings. Their wedding day felt light, elegant, and effortless — filled with genuine emotions, warm conversations, and moments shared closely with family and friends. The atmosphere unfolded naturally, allowing every part of the celebration to feel sincere and unforced.[[break]]I filmed the day independently, focusing on capturing the atmosphere, subtle details, and honest moments that defined their celebration. The historic interiors, soft natural light, and calm character of the estate created a beautiful setting for a wedding that felt intimate, stylish, and truly personal.",
    thumbnail:
      "https://i.vimeocdn.com/video/2139546304-660f37512c7e0088d6f0c4477b308731b0f8a1e9900784bda5f208f1a53a4b49-d_960?region=us",
    highlights: [
      "https://player.vimeo.com/video/1177057399",
      "https://player.vimeo.com/video/1177055432",
    ],
  },
];
