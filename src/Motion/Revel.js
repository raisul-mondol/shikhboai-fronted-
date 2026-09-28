export const Container = {
  hidden: {
    y: 100,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      mass: 0.8,
      bounce:8,

      
      staggerChildren:0.6,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      mass: 0.8,
    },
  },
};


export const Normalreveal={
    
    hidden:{y:-100,opacity:0},
    show:{
        y:0,opacity:1,
        transition:
        {
            duration:1,
            ease:"linear",
            delay:3,

        }
    }


};



export const PopParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const PopChild = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};