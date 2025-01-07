import { ProfileContext } from "../context";
import { initialState, profilelReducer } from "../reducers/profileReducer";

import { useReducer } from "react";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profilelReducer, initialState);

  return (
    <ProfileContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
