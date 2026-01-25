"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface TextParallaxSectionProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
  className?: string;
}

const IMG_PADDING = 12;

export default function TextParallaxSection({
  imgUrl,
  subheading,
  heading,
  children,
  className = "",
}: TextParallaxSectionProps) {
  return (
    <div className={`${className}`} style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-zinc-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }: { subheading: string; heading: string }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-10"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
}

// Example Content Component
export function ParallaxContent({ title, description, ctaText = "Learn more" }: { 
  title: string; 
  description: string; 
  ctaText?: string;
}) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-zinc-400 md:text-2xl">{description}</p>
        <button className="w-full rounded-full bg-white px-9 py-4 text-xl text-zinc-900 transition-colors hover:bg-zinc-200 md:w-fit">
          {ctaText} <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
}
