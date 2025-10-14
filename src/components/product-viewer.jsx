import clsx from "clsx";
import useMacbookStore, { DEFAULT_COLOR, DEFAULT_SCALE } from "../store";
import { Canvas } from "@react-three/fiber";
import MacbookModel14 from "./models/Macbook14";
import StudioLights from "./three/studio-lights";
import ModelSwitcher from "./three/model-switcher";
import { useMediaQuery } from "react-responsive";

const COLOR_SILVER = "#adb5bd";
const COLOR_SPACE_GRAY = DEFAULT_COLOR;

const SCALE_14 = 0.06;
const SCALE_16 = DEFAULT_SCALE;

const getSizeLabel = (scale) => {
  if (scale === SCALE_14) return '14"';
  if (scale === SCALE_16) return '16"';
  return scale;
};

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">
          MacBook Pro {getSizeLabel(scale)} in {color}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === COLOR_SILVER && "active"
              )}
              onClick={() => setColor(COLOR_SILVER)}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === COLOR_SPACE_GRAY && "active"
              )}
              onClick={() => setColor(COLOR_SPACE_GRAY)}
            />
          </div>
          <div className="size-control">
            <div
              className={clsx(
                scale === SCALE_14
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(SCALE_14)}
            >
              <p>14"</p>
            </div>
            <div
              className={clsx(
                scale === SCALE_16
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(SCALE_16)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-4xl">Render Canvas</p>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
