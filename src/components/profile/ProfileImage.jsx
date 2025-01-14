import { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import Avatar from "../../assets/images/avatars/DefaultAvatar.jpg";
import useAxios from "./../../hooks/useAxios";
import { useProfile } from "./../../hooks/useProfile";

import useAuth from "../../hooks/useAuth";
import ImageModal from "../modals/ImageModal";
import { actions } from "./../../actions/index";

import { useState } from "react";

import { toast } from "react-toastify";

import { motion } from "motion/react";

export default function ProfileImage() {
  const { state, dispatch } = useProfile();
  const { setAuth } = useAuth(); // retrive auth and setAuth from useAuth hook

  // console.log("state from profileImage ", state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageFile = state?.user?.avatar
    ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`
    : Avatar;

  const { api } = useAxios();

  const fileUploadRef = useRef();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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

        setAuth((prevAuth) => {
          return {
            ...prevAuth,
            user: {
              ...prevAuth.user,
              avatar: response.data.avatar,
            },
          };
        });

        toast.success("Profile Picture Update Successful!", {
          position: "top-right", // Positioning the toast at the top-right
          autoClose: 2000, // Auto close after 2 seconds
        });

        console.log("Update Profile Image and data is", response.data);
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
        <ImageModal
          isOpen={isModalOpen}
          imageFile={imageFile}
          onClose={toggleModal}
        />
        <button onClick={toggleModal}>
          <motion.img
            className="max-w-full rounded-full"
            src={
              state?.user?.avatar
                ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`
                : Avatar
            }
            alt={`${state?.user?.firstName}`}
            animate={{
              rotate: [0, 90, 180, 270, 360, 0],
              scale: [1.1, 1.3, 1.5, 1.3, 1.1, 1],
            }}
            transition={{ duration: 1.7 }}
            exit={{
              x: "-100vw",

              transition: {
                ease: "easeInOut",
                duration: 6,
              },
            }}
          />
        </button>

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
