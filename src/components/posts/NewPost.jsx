import { useContext, useEffect, useRef, useState } from "react";
import Avatar from "../../assets/images/avatars/DefaultAvatar.jpg";
import { UpdatePostContext } from "../../context";
import useAuth from "../../hooks/useAuth";
import PostEntry from "./PostEntry";

export default function NewPost() {
  const { updatePost, setUpdatePost } = useContext(UpdatePostContext);

  const [showPostEntry, setShowPostEntry] = useState(
    updatePost?.content ? true : false
  );
  const handleCreateOrCancelOrUpdate = () => {
    setShowPostEntry(() => false);
    setUpdatePost(() => null);
  };

  const newPostRef = useRef();
  const textAreaRef = useRef();

  const { auth } = useAuth();

  useEffect(() => {
    if (updatePost) {
      if (showPostEntry) {
        newPostRef.current.focus();
      } else {
        textAreaRef.current.click(); // after clicking this PostEntry will be open
      }
    }
  }, [updatePost]);

  return (
    <>
      {showPostEntry ? (
        <div ref={newPostRef}>
          <PostEntry onCreateOrCancelOrUpdate={handleCreateOrCancelOrUpdate} />
        </div>
      ) : (
        <div className="card">
          <div className="flex-center mb-3 gap-2 lg:gap-4">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={
                auth?.user?.avatar
                  ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                      auth?.user?.avatar
                    }`
                  : Avatar
              }
              alt="avatar"
            />

            <div className="flex-1">
              <textarea
                ref={textAreaRef}
                className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                name="post"
                id="post"
                placeholder="What's on your mind?"
                onClick={() => setShowPostEntry(true)}
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
