const vimeoThumbnailCache = new Map<string, string>();
const vimeoThumbnailInFlight = new Map<string, Promise<string | null>>();

export function parseVimeoVideoId(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const playerMatch = trimmed.match(/player\.vimeo\.com\/video\/(\d+)/);
  if (playerMatch?.[1]) return playerMatch[1];

  const directMatch = trimmed.match(/vimeo\.com\/(\d+)/);
  if (directMatch?.[1]) return directMatch[1];

  return null;
}

export function getVimeoThumbnailByVideoUrl(url: string): string | null {
  const videoId = parseVimeoVideoId(url);
  if (!videoId) return null;
  return `https://vumbnail.com/${videoId}.jpg`;
}

export async function fetchVimeoThumbnailByVideoUrl(
  videoUrl: string,
): Promise<string | null> {
  const videoId = parseVimeoVideoId(videoUrl);
  if (!videoId) return null;

  const cached = vimeoThumbnailCache.get(videoId);
  if (cached) return cached;

  const inFlight = vimeoThumbnailInFlight.get(videoId);
  if (inFlight) return inFlight;

  const oEmbedUrl =
    `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${videoId}`)}` +
    "&width=1920&height=1080";

  const req = fetch(oEmbedUrl)
    .then(async (res) => {
      if (!res.ok) return null;
      const data = (await res.json()) as { thumbnail_url?: string };
      const thumbnail = data.thumbnail_url?.trim() || null;
      if (thumbnail) vimeoThumbnailCache.set(videoId, thumbnail);
      return thumbnail;
    })
    .catch(() => null)
    .finally(() => {
      vimeoThumbnailInFlight.delete(videoId);
    });

  vimeoThumbnailInFlight.set(videoId, req);
  return req;
}
