import { PostContext } from "../context";

export default function PostProvider({ children }) {
  return (
    <>
      <PostContext.Provider>{children}</PostContext.Provider>
    </>
  );
}
