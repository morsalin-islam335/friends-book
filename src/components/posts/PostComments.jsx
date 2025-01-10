/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAvatar } from "./../../hooks/useAvatar";
import useAxios from "./../../hooks/useAxios";
import PostCommentList from "./PostCommentList";
// import {useEffect} from "react";

export default function PostComments({ post, comments, onComments }) {
  const { avatarURL } = useAvatar(post);
  const [showComments, setShowComments] = useState(false);
  // const { auth } = useAuth();
  // const [comments, setComments] = useState(post?.comments); // take it from parrent component

  const [comment, setComment] = useState("");

  const { api } = useAxios();

  const addComment = async (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 13) {
      try {
        const response = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/comment`,
          { comment }
        );

        if (response.status === 200) {
          onComments((prevComments) => [
            ...prevComments,
            response.data.comments[response.data.comments.length - 1],
          ]); // as it is patch request so response.data.comments will return all comments including new comment
          // () => setComments([...response.data.comments]);
          console.log(response.data);
        }
        setComment("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div>
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
            src={avatarURL}
            alt="avatar"
          />

          <div className="flex-1">
            <input
              type="text"
              className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
              name="post"
              placeholder="What's on your mind?"
              id="post"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => addComment(e)}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-gray-300 max-md:text-sm"
          >
            All Comment ▾
          </button>
        </div>

        {showComments && <PostCommentList comments={comments} />}
      </div>
    </>
  );
}
