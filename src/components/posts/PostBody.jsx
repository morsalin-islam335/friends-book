// import { useState } from "react";
// import ImageModal from "../modals/ImageModal";

// export default function PostBody({ poster, content }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const imageFile = `${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`;

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
//         <p className="mb-4">{content ?? ""}</p>
//         <div className="flexm flex-center justify-center overflow-hidden">
//           {poster ? (
//             <>
//               <ImageModal
//                 isOpen={isModalOpen}
//                 imageFile={imageFile}
//                 onClose={toggleModal}
//               />
//               <button className="w-1/2" onClick={toggleModal}>
//                 <img
//                   src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
//                   alt="poster"
//                 />
//               </button>
//             </>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import ImageModal from "../modals/ImageModal";

// export default function PostBody({ poster, content, controls }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const imageFile = `${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`;

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const wordArray = content?.split(" ");

//   return (
//     <>
//       <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
//         <p className="mb-4">{content ?? ""}</p>
//         <div className="flexm flex-center justify-center overflow-hidden">
//           {poster ? (
//             <>
//               <ImageModal
//                 isOpen={isModalOpen}
//                 imageFile={imageFile}
//                 onClose={toggleModal}
//               />
//               <button className="w-1/2" onClick={toggleModal}>
//                 <img src={imageFile} alt="poster" />
//               </button>
//             </>
//           ) : null}
//         </div>
//       </div>
//     </>
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
                      transition: { duration: 1, delay: index * 0.01 },
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
              <button className="w-4/5" onClick={toggleModal}>
                <img src={imageFile} alt="poster" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
