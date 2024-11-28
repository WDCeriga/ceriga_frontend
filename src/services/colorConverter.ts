import { IRgba } from "../interfaces/Rgba.interface";

const rgbaToHex = (color: IRgba): string => {
  let { r, g, b } = color;
  const { a } = color;
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  const hexR = Math.round(r).toString(16).padStart(2, "0");
  const hexG = Math.round(g).toString(16).padStart(2, "0");
  const hexB = Math.round(b).toString(16).padStart(2, "0");

  const hexAlpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${hexR}${hexG}${hexB}${hexAlpha}`;
};

export { rgbaToHex };
