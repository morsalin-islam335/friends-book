// /* eslint-disable react/prop-types */
// import PostAction from "./PostAction";
// import PostBody from "./PostBody";
// import PostComments from "./PostComments";
// import PostHeader from "./PostHeader";

// import { useState } from "react";

// import { motion } from "motion/react";

// export default function PostCard({ post }) {
//   const [comments, setComments] = useState(post?.comments);
//   return (
//     <motion.article
//       className="card mt-6 lg:mt-8"
//       initial={{ opacity: 0, x: -50, y: -100 }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//         transition: {
//           duration: 1.3,
//         },
//       }}
//       // viewport={{ once: true }}
//     >
//       <PostHeader post={post} />
//       <PostBody poster={post?.image} content={post?.content} />
//       <PostAction post={post} comments={comments} />

//       <PostComments post={post} comments={comments} onComments={setComments} />
//     </motion.article>
//   );
// }

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
import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "../modals/ImageModal";

export default function PostBody({ poster, content, controls }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageFile = `${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const wordArray = content?.split(" ");

  return (
    <>
      <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
        <p className="mb-4">
          {content
            ? wordArray.map((word, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={controls} // Use controls from PostCard
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: index * 0.1 },
                    },
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))
            : ""}
        </p>

        <div className="flex flex-center justify-center overflow-hidden">
          {poster ? (
            <>
              <ImageModal
                isOpen={isModalOpen}
                imageFile={imageFile}
                onClose={toggleModal}
              />
              <button className="w-1/2" onClick={toggleModal}>
                <img src={imageFile} alt="poster" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
