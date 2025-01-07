import ProfileProvider from "../provider/ProfileProvider";
import Profile from "./Profile";
export default function ProfilePage() {
  return (
    <>
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    </>
  );
}
