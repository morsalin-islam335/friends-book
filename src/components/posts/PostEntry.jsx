import useAxios from "./../../hooks/useAxios";
import usePost from "./../../hooks/usePost";
import { useProfile } from "./../../hooks/useProfile";

import { actions } from "../../actions";
import useAuth from "./../../hooks/useAuth";

import { useEffect, useRef, useState } from "react";

import AddPhoto from "../../assets/icons/addPhoto.svg";

// eslint-disable-next-line react/prop-types
const PostEntry = ({ onCreateOrCancel }) => {
  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();
  const { state: profile } = useProfile();

  const fileInputRef = useRef();

  const user = profile?.user ?? auth?.user;
  const [file, setFile] = useState(null);
  const [texts, setTexts] = useState("");

  const handlePostSubmit = async (data) => {
    console.log(data); // Debugging the form data

    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      // Create FormData instance
      const formData = new FormData();
      formData.append("image", file);
      formData.append("content", texts);

      // // Append text content
      // formData.append("content", data.content);

      // // Append photo if file is selected
      // if (fileInputRef.current?.files[0]) {
      //   formData.append("photo", fileInputRef.current.files[0]);
      // }

      // to do set form data globally

      // API call to submit post
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.post.DATA_CREATED,
          data: response.data,
        });

        console.log(formData);
        onCreateOrCancel(); // Close the form on success
      }
    } catch (error) {
      console.error("Error uploading post:", error);

      dispatch({
        type: actions.post.DATA_FETCH_ERROR,
        error: error.response?.data ?? error.message,
      });
    }
  };

  const handleImageUpload = (event) => {
    event.preventDefault(); // stop event default behavior
    fileInputRef.current.click();
  };

  // const updateImageDisplay = async () => {
  //   try {
  //     const formData = new FormData(); // create new form data object
  //     // append the file to the form data object
  //     // it works like key value pair

  //     for (const file of fileUploadRef.current.files) {
  //       formData.append("avatar", file);
  //     }

  //     const response = await api.post(
  //       `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
  //         state?.user?.id
  //       }/avatar`,
  //       formData
  //     );

  //     if (response.status === 200) {
  //       dispatch({
  //         type: actions.profile.IMAGE_UPDATED,
  //         data: response.data,
  //       });

  //       setAuth((prevAuth) => {
  //         return {
  //           ...prevAuth,
  //           user: {
  //             ...prevAuth.user,
  //             avatar: response.data.avatar,
  //           },
  //         };
  //       });

  //       console.log("Update Profile Image and data is", response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({
  //       type: actions.profile.DATA_FETCH_ERROR,
  //       error: error.message,
  //     });
  //   }
  // };

  useEffect(() => {
    console.log("fileInputRef.current:", fileInputRef.current);
  }, []);

  return (
    <div className="card relative">
      <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
        Create Post
      </h6>
      {/* <form
        onSubmit={handleSubmit(handlePostSubmit)}
        encType="multipart/form-data"
      >
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}
              </h6>
              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <button
            className="btn-primary cursor-pointer !text-gray-100"
            onClick={handleImageUpload}
          >
            <img src={AddPhoto} alt="Add Photo" />
            Add Photo
          </button>


          <Field label="" error={errors.photo}>
            <input
              type="file"
              name="photo"
              id="photo"
              className="hidden"
              ref={(e) => {
                fileInputRef.current = e; // Assign the DOM element to fileInputRef
                register("photo").ref(e); // Attach react-hook-form's ref
              }}
              onChange={handleFileChange}
            />
          </Field>
        </div>
        <Field label="" error={errors.content}>
          <textarea
            {...register("content", {
              required: "Adding some text is mandatory!",
            })}
            name="content"
            id="content"
            placeholder="Share your thoughts..."
            className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
          ></textarea>
        </Field>
        <div className="flex gap-6 border-t border-[#3F3F3F] pt-4 lg:pt-6">
          <button
            className="auth-input bg-morsalinGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Post
          </button>

          <button
            className="auth-input bg-red-500 font-bold text-deepDark transition-all hover:opacity-90"
            onClick={onCreateOrCancel}
          >
            Cancel
          </button>
        </div>
      </form> */}

      <form encType="multipart/form-data" onSubmit={handlePostSubmit}>
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}
              </h6>

              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <button
            className="btn-primary cursor-pointer !text-gray-100"
            onClick={handleImageUpload}
          >
            <img src={AddPhoto} alt="Add Photo" />
            Add Photo
          </button>
          <input
            onChange={(event) => setFile(event.target.files[0])}
            ref={fileInputRef}
            type="file"
            name="photo"
            id="photo"
            className="hidden"
          />
        </div>
        {/* <!-- Post Text Input --> */}

        <textarea
          value={texts}
          onChange={(event) => setTexts(event.target.value)}
          name="post"
          id="post"
          placeholder="Share your thoughts..."
          className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
        ></textarea>
        <div className="flex gap-6 border-t border-[#3F3F3F] pt-4 lg:pt-6">
          <button
            className="auth-input bg-morsalinGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Post
          </button>

          <button
            className="auth-input bg-red-500 font-bold text-deepDark transition-all hover:opacity-90"
            onClick={onCreateOrCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEntry;
