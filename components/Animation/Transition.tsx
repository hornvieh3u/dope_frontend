"use client";

import { motion } from "framer-motion";

export const ANIMATIONS = {
  T2B: "top_to_bottom",
  B2T: "bottom_to_top",
  L2R: "left_to_right",
  R2L: "right_to_left",
  FADEIN: "fade_in",
  PLUS: "plus",
  ROLL_IN_LEFT: "roll_in_left",
  ROLL_IN_RIGHT: "roll_in_right"
}

const variants = {
  [ANIMATIONS.T2B]: {
    hide: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
  [ANIMATIONS.B2T]: {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
  [ANIMATIONS.L2R]: {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        type: "tween"
      },
    },
  },
  [ANIMATIONS.R2L]: {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        type: "tween"
      },
    },
  },
  [ANIMATIONS.FADEIN]: {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "easeIn"
      },
    },
  },
  [ANIMATIONS.PLUS]: {
    hide: {
      opacity: 0,
      scale: 1.1
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "easeIn"
      },
    },
  },
  [ANIMATIONS.ROLL_IN_LEFT]: {
    hide: {
      opacity: 0,
      rotateZ: 15,
      x: 200
    },
    show: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      x: 0,
      transition: {
        duration: 1,
        type: "easeInOut"
      },
    },
  },
  [ANIMATIONS.ROLL_IN_RIGHT]: {
    hide: {
      opacity: 0,
      rotateZ: -15,
      x: -200
    },
    show: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      x: 0,
      transition: {
        duration: 1,
        type: "easeInOut"
      },
    },
  }
};

export default function Transition({
  children,
  animation
}: {
  children: React.ReactNode;
  animation: string
}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={variants[animation]}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
