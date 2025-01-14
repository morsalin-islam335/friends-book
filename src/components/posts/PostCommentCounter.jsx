// import { animate, motion, useMotionValue, useTransform } from "motion/react";
// import { useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// const PostCommentCounter = ({ limit, inView }) => {
//   const count = useMotionValue(0);
//   const roundedValue = useTransform(count, Math.round);
//   useEffect(() => {
//     if (inView) {
//       const animation = animate(count, limit, { duration: 2 });
//       return () => animation.stop();
//     }
//   }, [inView, limit]);

//   return <motion.span>{roundedValue}</motion.span>;
// };

// export default PostCommentCounter;

// it also works.

// import { animate, motion, useMotionValue, useTransform } from "motion/react";
// import { useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// const PostCommentCounter = ({ limit, inView }) => {
//   const count = useMotionValue(0);
//   const roundedValue = useTransform(count, Math.round);

//   useEffect(() => {
//     if (inView) {
//       const animation = animate(count, limit || 0, { duration: 1.5 });
//       return () => animation.stop();
//     }
//   }, [inView, limit]);

//   return <motion.span>{roundedValue}</motion.span>;
// };

// export default PostCommentCounter;

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PostCommentCounter = ({ limit, inView }) => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      animate(count, limit || 0, { duration: 1.5 });
    }
  }, [inView, limit]);

  return <motion.span>{roundedValue}</motion.span>;
};

export default PostCommentCounter;
