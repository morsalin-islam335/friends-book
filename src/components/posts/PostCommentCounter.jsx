import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PostCommentCounter = ({ limit }) => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, { limit }, { duration: 2 });

    return animation.stop;
  }, []);

  return <motion.div>{roundedValue}</motion.div>;
};

export default PostCommentCounter;
