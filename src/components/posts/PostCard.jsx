// import PostAction from "./PostAction";
// import PostBody from "./PostBody";
// import PostComments from "./PostComments";
// import PostHeader from "./PostHeader";

// import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";

// export default function PostCard({ post }) {
//   const [comments, setComments] = useState(post?.comments);

//   // Control animation for PostBody
//   const controls = useAnimation();

//   return (
//     <motion.article
//       className="card mt-6 lg:mt-8"
//       initial={{ opacity: 0, x: -50, y: -100 }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         transition: { duration: 1.3 },
//       }}
//       onViewportEnter={() => controls.start("visible")} // Trigger PostBody animation
//       viewport={{ once: true }} // Ensure animation triggers only once
//     >
//       <PostHeader post={post} />
//       <PostBody
//         poster={post?.image}
//         content={post?.content}
//         controls={controls} // Pass controls to PostBody
//       />
//       <PostAction post={post} comments={comments} />
//       <PostComments post={post} comments={comments} onComments={setComments} />
//     </motion.article>
//   );
// }

/* eslint-disable react/prop-types */
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

import { motion, useAnimation } from "motion/react";
import { useState } from "react";

export default function PostCard({ post }) {
  const [comments, setComments] = useState(post?.comments);

  // Control animation for PostBody
  const controls = useAnimation();

  return (
    <motion.article
      className="card mt-6 lg:mt-8"
      initial={{ opacity: 0, x: -50, y: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1.3 },
      }}
      onViewportEnter={() => controls.start("visible")} // Trigger PostBody animation
      viewport={{ once: true }} // Ensure animation triggers only once
    >
      <PostHeader post={post} />
      <PostBody
        poster={post?.image}
        content={post?.content}
        controls={controls} // Pass controls to PostBody
      />
      <PostAction post={post} comments={comments} />
      <PostComments post={post} comments={comments} onComments={setComments} />
    </motion.article>
  );
}
