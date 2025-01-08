import ProfileProvider from "../provider/ProfileProvider";
import HomePage from "./Homepage";

export default function Home() {
  return (
    <>
      <ProfileProvider>
        <HomePage />
      </ProfileProvider>
    </>
  );
}
