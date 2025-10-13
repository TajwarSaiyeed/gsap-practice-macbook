import { create } from "zustand";

export const DEFAULT_COLOR = "#2e2c2e";
export const DEFAULT_SCALE = 0.08;

const useMacbookStore = create((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color) => set({ color }),
  scale: DEFAULT_SCALE,
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: DEFAULT_COLOR, scale: DEFAULT_SCALE }),
}));

export default useMacbookStore;
