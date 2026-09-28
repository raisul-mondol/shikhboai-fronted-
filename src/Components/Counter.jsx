import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect } from "react";

const Counter = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  start = false,
  className,
   once = true,
}) => {
  const count = useMotionValue(from);

  const displayValue = useTransform(count, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (!start) return;

    animate(count, to, {
      duration,
      ease: "easeOut",
    });
  }, [start, to, duration, count]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.8, once }}
      className={className}
    >
      {displayValue}
    </motion.span>
  );
};

export default Counter;