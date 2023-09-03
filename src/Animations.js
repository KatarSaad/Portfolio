import { delay, motion, useAnimation,AnimatePresence } from 'framer-motion';
import React,{ useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components"

export const SlideInLeft = ({ children }) => {
  
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: -100, opacity: 0 });
        }
    }, [controls, inView]);

    return <motion.div ref={ref} animate={controls} initial={{ x: -100, opacity: 0 } }  >{children}</motion.div>;
}
export const SlideInLeftDelay = ({ children, delayIncrement = 0.2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
          controls.start({ x: 0, opacity: 1, transition: { delay: delayIncrement } });
      } else {
          controls.start({ x: -100, opacity: 0 });
      }
  }, [controls, inView, delayIncrement]);

  return (
      <motion.div ref={ref} animate={controls} initial={{ x: -100, opacity: 0 }}>
          {children}
      </motion.div>
  );
}
const Cover1 = styled(motion.div)`
  background-color: #00DFA2;  // Just a random color for demonstration. Change as needed.
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const SlideCoverRight = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
          controls.start({ scaleX: 0, originX: 'left', transition: { duration: 1 } });  // Slide and shrink from left to right
      } else {
          controls.start({ scaleX: 1, originX: 'left', transition: { duration: 1 } });  // Slide back when out of view
      }
  }, [controls, inView]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} ref={ref}>
      <AnimatePresence>
        {inView && (
          <Cover
            initial={{ scaleX: 1, originX: 'left' }}
            animate={controls}
            exit={{ scaleX: 1, originX: 'right', transition: { duration: 3 } }}  // Slower slide to right on exit
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

export const SlideCover = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ scaleX: 0, originX: 'right',transition: { duration: 3 }  });  // Slide and shrink from right to left
        } else {
            controls.start({ scaleX: 1, originX: 'right',transition: { duration: 3 }  });  // Slide back when out of view
        }
    }, [controls, inView]);

    return (
      <div style={{ position: 'relative', overflow: 'hidden' }} ref={ref}>
        <AnimatePresence>
          {inView && (
            <Cover1
              initial={{ scaleX: 1, originX: 'right' }}
              animate={controls}
              exit={{ scaleX: 1, originX: 'left', transition: { duration: 3000 } }}  // Slower slide to left on exit
            />
          )}
        </AnimatePresence>
        {children}
      </div>
    );
}
export const FadeCover = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
          controls.start({ opacity: 0,transition: { duration: 1.5 } });  // Fade out when in view
      } else {
          controls.start({ opacity: 1,transition: { duration: 1 } });  // Fade in when out of view
      }
  }, [controls, inView]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} ref={ref}>
      <AnimatePresence>
        {inView && (
          <Cover2
            initial={{ opacity: 1 }}
            animate={controls}
            exit={{ opacity: 1, transition: { duration: 1 } }}  // Fade in slowly on exit
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

// ... same imports as above ...

export const SlideInRight = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: 100, opacity: 0 });
        }
    }, [controls, inView]);

    return <motion.div ref={ref} animate={controls} initial={{ x: 100, opacity: 0 }}>{children}</motion.div>;
}

// ... same imports as above ...

export const TextFadeIn = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, inView]);

    return <motion.p ref={ref} animate={controls} initial={{ opacity: 0 }}>{children}</motion.p>;
}


// ... same imports as above ...

export const Icon = ({ children, delay }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, transition: { delay } });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, inView]);

    return <motion.div ref={ref} animate={controls} initial={{ opacity: 0 }}>{children}</motion.div>;
}


// ... same imports as above ...

export const DivAppear = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 });
        } else {
            controls.start({ opacity: 0, scale: 0.9 });
        }
    }, [controls, inView]);

    return <motion.div ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.9 }}>{children}</motion.div>;
}


// 1. Pulse Animation
export const Pulse = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ scale: 0.9 }} animate={{ scale: inView ? 1.1 : 0.9 }} exit={{ scale: 0.9 }} transition={{ repeat: Infinity, duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

// 2. Spin Animation
export const Spin = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ rotate: 0 }} animate={{ rotate: inView ? 360 : 0 }} exit={{ rotate: 0 }} transition={{ duration: 2 }}>
      {children}
    </motion.div>
  );
};

// 3. Bounce Animation
export const Bounce = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ y: -10 }} animate={{ y: inView ? 10 : -10 }} exit={{ y: -10 }} transition={{ repeat: Infinity, duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

// 4. Flip Animation
export const Flip = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ rotateY: 0 }} animate={{ rotateY: inView ? 180 : 0 }} exit={{ rotateY: 0 }} transition={{ duration: 1.5 }}>
      {children}
    </motion.div>
  );
};

// 5. Shake Animation
export const Shake = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ x: -5 }} animate={{ x: inView ? 5 : -5 }} exit={{ x: -5 }} transition={{ repeat: Infinity, duration: 0.1 }}>
      {children}
    </motion.div>
  );
};

// 6. Zoom In-Out Animation
export const ZoomInOut = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ scale: 1 }} animate={{ scale: inView ? 1.3 : 1 }} exit={{ scale: 1 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

// 7. Squeeze Animation
export const Squeeze = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ scaleX: 1, scaleY: 1 }} animate={{ scaleX: inView ? 0.8 : 1, scaleY: inView ? 1.2 : 1 }} exit={{ scaleX: 1, scaleY: 1 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};
const Text = styled(motion.div)`
  font-size: 24px;
  position: relative;
  z-index: 9;
`;

const Cover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
 
   height: 70%;
  width: 80%;
  background-color: #00DFA2;
  transform-origin: left;
  z-index: 0;
`;
const Cover2 = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00DFA2;
  transform-origin: left;
  z-index: -1;
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const AnimatedText = () => {
    const [ref, inView] = useInView({
      threshold: 0.1,  // at least 10% of the element is visible
    });
  
    const textVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          delay: 0.5,  // after the cover slides
        }
      }
    };
  
    const coverVariants = {
      hidden: { scaleX: 1 },
      visible: { 
        scaleX: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        }
      },
      exit: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } }
    };
  
    return (
      <AnimatePresence>
        {inView && (
          <Wrapper ref={ref}>
            <Text 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
            >
              Your paragraph text here...
            </Text>
            <Cover 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={coverVariants}
            />
          </Wrapper>
        )}
      </AnimatePresence>
    );
}

