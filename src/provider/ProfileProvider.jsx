import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profilelReducer } from "../reducers/profileReducer";

// eslint-disable-next-line react/prop-types
const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profilelReducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
