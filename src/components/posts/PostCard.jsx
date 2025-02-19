// // import PostAction from "./PostAction";
// // import PostBody from "./PostBody";
// // import PostComments from "./PostComments";
// // import PostHeader from "./PostHeader";

// // import { motion, useAnimation } from "framer-motion";
// // import { useState } from "react";

// // export default function PostCard({ post }) {
// //   const [comments, setComments] = useState(post?.comments);

// //   // Control animation for PostBody
// //   const controls = useAnimation();

// //   return (
// //     <motion.article
// //       className="card mt-6 lg:mt-8"
// //       initial={{ opacity: 0, x: -50, y: -100 }}
// //       whileInView={{
// //         opacity: 1,
// //         x: 0,
// //         transition: { duration: 1.3 },
// //       }}
// //       onViewportEnter={() => controls.start("visible")} // Trigger PostBody animation
// //       viewport={{ once: true }} // Ensure animation triggers only once
// //     >
// //       <PostHeader post={post} />
// //       <PostBody
// //         poster={post?.image}
// //         content={post?.content}
// //         controls={controls} // Pass controls to PostBody
// //       />
// //       <PostAction post={post} comments={comments} />
// //       <PostComments post={post} comments={comments} onComments={setComments} />
// //     </motion.article>
// //   );
// // }

// /* eslint-disable react/prop-types */
// import PostAction from "./PostAction";
// import PostBody from "./PostBody";
// import PostComments from "./PostComments";
// import PostHeader from "./PostHeader";

// import { motion, useAnimation } from "motion/react";
// import { useState } from "react";

// export default function PostCard({ post }) {
//   const [comments, setComments] = useState(post?.comments);
//   const [inView, setInview] = useState(false);
//   const [inViewPort, setInviewPort] = useState(false);

//   // Control animation for PostBody
//   const controls = useAnimation();

//   return (
//     <motion.article
//       className="card mt-6 lg:mt-8"
//       initial={{ opacity: 0, x: -50, y: -100, scale: 0.8 }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         y: 0,
//         scale: 1,
//         transition: { duration: 1.2 },
//       }}
//       onViewportEnter={() => controls.start("visible")} // Trigger PostBody animation
//       // viewport={{ once: false }} // Ensure animation triggers only once
//       onViewportEnter={() => setInViewPort(true)} // Set inView to true when in viewport
//       onViewportLeave={() => setInView(false)} // Reset inView when out of viewport
//       viewport={{ once: true }} // Ensure animation triggers only once
//     >
//       <PostHeader post={post} />
//       <PostBody
//         poster={post?.image}
//         content={post?.content}
//         controls={controls} // Pass controls to PostBody
//       />
//       <PostAction post={post} comments={comments} inView={inView} />
//       <PostComments post={post} comments={comments} onComments={setComments} />
//     </motion.article>
//   );
// }

// export function PostCard2({ post }) {
//   const [comments, setComments] = useState(post?.comments);
//   const [inView, setInView] = useState(false); // State to track if the post is in view

//   return (
//     <motion.article
//       className="card mt-6 lg:mt-8"
//       initial={{ opacity: 0, x: -50, y: -100 }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         transition: { duration: 1.3 },
//       }}
//       onViewportEnter={() => setInView(true)} // Set inView to true when in viewport
//       onViewportLeave={() => setInView(false)} // Reset inView when out of viewport
//       viewport={{ once: true }} // Ensure animation triggers only once
//     >
//       <PostHeader post={post} />
//       <PostBody poster={post?.image} content={post?.content} />
//       <PostAction post={post} comments={comments} inView={inView} />{" "}
//       {/* Pass inView */}
//       <PostComments post={post} comments={comments} onComments={setComments} />
//     </motion.article>
//   );
// }

// import PostAction from "./PostAction";
// import PostBody from "./PostBody";
// import PostComments from "./PostComments";
// import PostHeader from "./PostHeader";

// import { motion, useAnimation } from "motion/react";
// import { useState } from "react";

// export default function PostCard({ post }) {
//   const [comments, setComments] = useState(post?.comments);
//   const [inView, setInView] = useState(false);

//   // Control animation for PostBody
//   const controls = useAnimation();

//   return (
//     <motion.article
//       className="card mt-6 lg:mt-8"
//       initial={{ opacity: 0, x: -50, y: -100, scale: 0.8 }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         y: 0,
//         scale: 1,
//         transition: { duration: 1.2 },
//       }}
//       onViewportEnter={() => {
//         controls.start("visible"); // Trigger animation for PostBody
//         setInView(true); // Set inView to true
//       }}
//       onViewportLeave={() => setInView(false)} // Reset inView when out of viewport
//       viewport={{ once: false }} // Trigger onViewportEnter/Leave multiple times
//     >
//       <PostHeader post={post} />
//       <PostBody
//         poster={post?.image}
//         content={post?.content}
//         controls={controls} // Pass controls to PostBody
//       />
//       <PostAction post={post} comments={comments} inView={inView} />
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
  const [inView, setInView] = useState(false);

  // Control animation for PostBody
  const controls = useAnimation();

  return (
    <motion.article
      className="card mt-6 lg:mt-8"
      initial={{ opacity: 0, x: -50, y: -100, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 1.2 },
      }}
      onViewportEnter={() => {
        controls.start("visible"); // Trigger animation for PostBody
        setInView(true); // Set inView to true
      }}
      onViewportLeave={() => setInView(false)} // Reset inView when out of viewport
      viewport={{ once: false }} // Trigger onViewportEnter/Leave multiple times
    >
      <PostHeader post={post} />
      <PostBody
        poster={post?.image}
        content={post?.content}
        controls={controls} // Pass controls to PostBody
      />
      <PostAction post={post} comments={comments} inView={inView} />
      <PostComments post={post} comments={comments} onComments={setComments} />
    </motion.article>
  );
}
