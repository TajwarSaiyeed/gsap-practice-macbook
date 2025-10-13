import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Stylized Macbook Pro title graphic" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        title="Macbook Pro promotional video"
        aria-label="Macbook Pro promotional video"
      />
      <button
        type="button"
        aria-label="Buy Macbook Pro"
        onClick={() => alert("Redirecting to purchase page...")}
      >
        Buy
      </button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
