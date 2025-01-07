import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { actions } from "./../actions/index";
import useAuth from "./../hooks/useAuth";
import { useProfile } from "./../hooks/useProfile";

export default function Profile() {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();

  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `VITE_SERVER_BASE_URL/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);

  if (state.loading) {
    return (
      <div>
        <h1>FETCHING YOUR PROFILE DATA ....</h1>
      </div>
    );
  }

  return (
    <>
      {/* <ProfileInfo />
      <MyPosts /> */}
    </>
  );
}
