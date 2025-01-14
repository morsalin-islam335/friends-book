/* eslint-disable react/prop-types */
// import CommentIcon from "../../assets/icons/comment.svg";

// import LikeFilledIcon from "../../assets/icons/like-filled.svg";
// import LikeIcon from "../../assets/icons/like.svg";

// import { useState } from "react";
// import ShareIcon from "../../assets/icons/share.svg";
// import useAuth from "./../../hooks/useAuth";
// import useAxios from "./../../hooks/useAxios";
// import PostCommentCounter from "./PostCommentCounter";

// export default function PostAction({ post, comments }) {
//   const { api } = useAxios();
//   const { auth } = useAuth();
//   const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));

//   console.log(comments);

//   const handleLike = async () => {
//     try {
//       // const response = await api.patch(
//       //   `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
//       // );

//       const response = await api.patch(
//         `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
//       );

//       if (response.status === 200) {
//         setLike(true);
//       }
//     } catch (error) {
//       console.error(error);
//       setLike(false);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
//         <button
//           className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
//           onClick={handleLike}
//         >
//           <img src={like ? LikeFilledIcon : LikeIcon} alt="Like" />
//           <span>Like</span>
//         </button>
//         <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
//           <img src={CommentIcon} alt="Comment" />
//           <span>
//             Comment (<PostCommentCounter limit={comments?.length} />)
//           </span>
//         </button>

//         <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
//           <img src={ShareIcon} alt="Share" />

//           <span>Share</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export function PostAction2({ post, comments, inView }) {
//   const { api } = useAxios();
//   const { auth } = useAuth();
//   const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));

//   const handleLike = async () => {
//     try {
//       const response = await api.patch(
//         `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
//       );
//       if (response.status === 200) {
//         setLike(true);
//       }
//     } catch (error) {
//       console.error(error);
//       setLike(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
//       <button
//         className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
//         onClick={handleLike}
//       >
//         <img src={like ? LikeFilledIcon : LikeIcon} alt="Like" />
//         <span>Like</span>
//       </button>
//       <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
//         <img src={CommentIcon} alt="Comment" />
//         <span>
//           Comment (
//           <PostCommentCounter limit={comments?.length} inView={inView} />)
//         </span>
//       </button>
//       <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
//         <img src={ShareIcon} alt="Share" />
//         <span>Share</span>
//       </button>
//     </div>
//   );
// }

import CommentIcon from "../../assets/icons/comment.svg";
import LikeFilledIcon from "../../assets/icons/like-filled.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";

import { useState } from "react";
import useAuth from "./../../hooks/useAuth";
import useAxios from "./../../hooks/useAxios";
import PostCommentCounter from "./PostCommentCounter";

export default function PostAction({ post, comments, inView }) {
  const { api } = useAxios();
  const { auth } = useAuth();
  const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));

  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );

      if (response.status === 200) {
        setLike(true);
      }
    } catch (error) {
      console.error(error);
      setLike(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
        onClick={handleLike}
      >
        <img src={like ? LikeFilledIcon : LikeIcon} alt="Like" />
        <span>Like</span>
      </button>
      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>
          Comment (
          <PostCommentCounter limit={comments?.length} inView={inView} />)
        </span>
      </button>
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
