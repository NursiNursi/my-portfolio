export type ImageSize =
  | "square_hd"
  | "square"
  | "portrait_4_3"
  | "portrait_16_9"
  | "landscape_4_3"
  | "landscape_16_9";

export function makeAiImageUrl(prompt: string, imageSize: ImageSize) {
  const encSize = encodeURIComponent(imageSize);
  const label = prompt.trim().replace(/\s+/g, " ").slice(0, 80);
  const encLabel = encodeURIComponent(label.length > 0 ? label : "Preview");
  return `/api/image/${encSize}/${encLabel}`;
}
