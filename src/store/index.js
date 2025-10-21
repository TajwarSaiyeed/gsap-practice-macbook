import { create } from "zustand";

export const DEFAULT_COLOR = "#2e2c2e";
export const DEFAULT_SCALE = 0.08;
export const DEFAULT_TEXTURE = "/videos/feature-1.mp4";

const useMacbookStore = create((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color) => set({ color }),

  scale: DEFAULT_SCALE,
  setScale: (scale) => set({ scale }),

  texture: DEFAULT_TEXTURE,
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: DEFAULT_COLOR,
      scale: DEFAULT_SCALE,
      texture: DEFAULT_TEXTURE,
    }),
}));

export default useMacbookStore;
