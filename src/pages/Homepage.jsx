import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  const firstName = auth.user.firstName;
  const lastName = auth.user.lastName;
  console.log(auth);
  // console.log(auth.user);
  return (
    <>
      {/* {auth?.user ? <h1> You are logged in</h1> : <h1> You are logged out</h1>} */}
      <h1>Home Page</h1>
      <h3>
        Wellcome {firstName} {lastName} to friends book.
      </h3>
    </>
  );
}
