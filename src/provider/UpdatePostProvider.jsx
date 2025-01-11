/* eslint-disable react/prop-types */
import { useState } from "react";
import { UpdatePostContext } from "../context";

export default function UpdatePostProvider({ children }) {
  const [updatePost, setUpdatePost] = useState(null);

  return (
    <>
      <UpdatePostContext.Provider value={{ updatePost, setUpdatePost }}>
        {children}
      </UpdatePostContext.Provider>
    </>
  );
}
