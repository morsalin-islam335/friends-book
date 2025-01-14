import { useState } from "react";
import CheckIcon from "../../assets/icons/check.svg";
import { actions } from "./../../actions/index";

import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "./../../hooks/useAxios";
import { useProfile } from "./../../hooks/useProfile";

import { toast } from "react-toastify";

import { motion } from "motion/react";

export default function Bio() {
  const { state, dispatch } = useProfile();
  // console.log("state is ", state?.user?.bio);

  const { api } = useAxios();

  const [bio, setBio] = useState(state?.user?.bio ?? "hello world");
  const [editMode, setEditMode] = useState(false);

  const handleBioChange = async (event) => {
    event.preventDefault();

    dispatch({
      type: actions.profile.DATA_FETCHING,
    });

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_FETCHED,
          data: response.data,
        });
        setBio(response.data);
        toast.success("Bio Update Successful!", {
          position: "top-right", // Positioning the toast at the top-right
          autoClose: 2000, // Auto close after 2 seconds
        });
      }

      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {!editMode ? (
            <motion.p
              className="leading-[188%] text-grey-400 lg:text-lg"
              animate={{
                scale: [1, 1.1, 1.2, 1.3, 1.2, 1.1, 1],
              }}
              transition={{ duration: 1.3 }}
              exit={{
                x: "-100vw",

                transition: {
                  ease: "easeInOut",
                  duration: 6,
                },
              }}
            >
              {state?.user?.bio}
            </motion.p>
          ) : (
            <textarea
              className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
              value={bio}
              rows={4}
              cols={55}
              onChange={(e) => setBio(e.target.value)}
            />
          )}
        </div>
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="flex-center h-7 w-7 rounded-full"
          >
            <img src={EditIcon} alt="Edit" />
          </button>
        ) : (
          <button
            className="flex-center h-7 w-7 rounded-full"
            onClick={handleBioChange}
          >
            <img src={CheckIcon} alt="Check" />
          </button>
        )}
      </div>
    </>
  );
}
