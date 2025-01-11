import { useEffect, useRef, useState } from "react";
import { UpdatePostContext } from "../../context";
import useAuth from "../../hooks/useAuth";
import PostEntry from "./PostEntry";

import { useContext } from "react";

export default function NewPost() {
  const { updatePost, setUpdatePost } = useContext(UpdatePostContext);

  const [showPostEntry, setShowPostEntry] = useState(updatePost || false);
  const handleCreateOrCancelOrUpdate = () => {
    setShowPostEntry(() => false);
    setUpdatePost(() => null);
  };

  const newPostRef = useRef();

  const { auth } = useAuth();

  useEffect(() => {
    if (updatePost) {
      newPostRef.current.focus(); // focus edited post
    }
  }, []);
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
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }`}
              alt="avatar"
            />

            <div className="flex-1">
              <textarea
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
