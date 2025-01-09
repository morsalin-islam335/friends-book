import { useContext } from "react";
import { PostContext } from "../context";

export default function usePost() {
  return useContext(PostContext);
}
