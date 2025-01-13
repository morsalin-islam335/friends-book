import { createContext } from "react";

const AuthContext = createContext();
const ProfileContext = createContext();

const PostContext = createContext();
const ThemeContext = createContext();

const UpdatePostContext = createContext();

export {
  AuthContext,
  PostContext,
  ProfileContext,
  ThemeContext,
  UpdatePostContext,
};
