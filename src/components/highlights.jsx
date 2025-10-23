import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const sectionRef = useRef();
  useGSAP(
    () => {
      gsap.to([".left-column", ".right-column"], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "bottom bottom" : "top top",
        },
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: "power1.out",
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="highlights" ref={sectionRef}>
      <h2>There&apos;s never been a time to upgrade.</h2>
      <h3>Upgrade to the latest version for the best experience.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through your tasks with ease.</p>
          </div>

          <div>
            <img src="/sun.png" alt="Icon illustrating a bright display" />
            <p>
              A stunning <br /> Liquid Retina <br /> display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="Apple Intelligence logo" />
            <p>
              Built for <span>Apple Intelligence</span>
            </p>
          </div>

          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to <span className="green-gradient"> 14 hours more</span>{" "}
              battery life.{" "}
              <span className="text-dark-100"> (Up to 24 hours more) </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
