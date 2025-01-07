import { useRef } from "react";

import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "./../../hooks/useAxios";
import { useProfile } from "./../../hooks/useProfile";

import { actions } from "./../../actions/index";
export default function ProfileImage() {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();

  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault(); // stop event default behavior

    fileUploadRef.current.addEventListener("change", updateImageDisplay);

    fileUploadRef.current.click();

    // initially actual filel will be hidden but after
    // clicking on edit icon we will trigger click event
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData(); // create new form data object
      // append the file to the form data object
      // it works like key value pair

      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data,
        });

        console.log("Update Profile Image", response.data);
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <>
      <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <img
          className="max-w-full rounded-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
          alt={`${state?.user?.firstName}`}
        />

        <form encType="multipart/form-data">
          <button
            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
            onClick={handleImageUpload}
            type="submit"
          >
            <img src={EditIcon} alt="" />
          </button>

          <input type="file" ref={fileUploadRef} hidden />
        </form>
      </div>
    </>
  );
}
