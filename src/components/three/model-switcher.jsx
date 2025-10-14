import React from "react";
import { useRef } from "react";
import { DEFAULT_SCALE } from "../../store";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook16";
import MacbookModel14 from "../models/Macbook14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      if (child.material.transparent !== true) {
        child.material.transparent = true;
        gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
      }
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook = scale === DEFAULT_SCALE || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : DEFAULT_SCALE} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
