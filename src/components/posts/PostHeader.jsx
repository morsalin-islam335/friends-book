/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ThreeDotsIcon from "../../assets/icons/3dots.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

import EditIcon from "../../assets/icons/edit.svg";

import TimeIcon from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getDateTimeDifferenceFromNow } from "../../utils";
import { actions } from "./../../actions/index";
import useAxios from "./../../hooks/useAxios";
import usePost from "./../../hooks/usePost";

export default function PostHeader({ post }) {
  const [showAction, setShowAction] = useState(false);

  const { avatarURL } = useAvatar(post);

  // const { auth } = useAuth();

  const { dispatch } = usePost();

  const { api } = useAxios();

  function toggleAction() {
    setShowAction(!showAction);
  }

  const handleEditPost = () => {};

  const completeDeletePost = async () => {
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}`
      );

      if (response.status === 200) {
        dispatch({
          type: actions.post.POST_DELETED,
          data: post.id,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.post.DATA_FETCH_ERROR,
        error: response.error,
      });
    }
  };

  const handleDeletePost = async (event) => {
    event.preventDefault();

    const isAggree = confirm("Are you sure to delete this post?");
    if (isAggree) {
      completeDeletePost();
    }
  };

  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={avatarURL}
            alt="avatar"
          />
          <div>
            <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div className="flex items-center gap-1.5">
              <img src={TimeIcon} alt="time" />
              <span className="text-sm text-gray-400 lg:text-base">{`${getDateTimeDifferenceFromNow(
                post?.createAt
              )} ago`}</span>
              <span className="text-sm text-gray-400 lg:text-base"></span>
            </div>
          </div>
        </div>

        <div className="relative">
          <button onClick={toggleAction}>
            <img src={ThreeDotsIcon} alt="3dots of Action" />
          </button>

          {showAction && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-morsalinGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button
                onClick={(event) => handleDeletePost(event)}
                className="action-menu-item hover:text-red-500"
              >
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
