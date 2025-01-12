import { Link } from "react-router-dom";
// import AuthIllustration from "../assets/images/auth_illustration.png";
import AuthIllustration from "../assets/images/authenticationImg.jpg";
import LoginForm from "../components/auth/LoginForm";

import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <center>
              <span className="text-center text-green-400 text-xl ">
                Welcome Back
              </span>
            </center>
            <img
              className="mt-16 max-w-full max-lg:hidden"
              src={AuthIllustration}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Friends-book
              </h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* extra div for allignment */}
          <div className="mb-5">
            <div className="card">
              <LoginForm />
              <div>
                <h3 className="text-white text-center pt-3">
                  Or Continue With
                </h3>
              </div>
              <div className="py-4 lg:py-6 gap-6 flex justify-center">
                <div>
                  <button>
                    <FaGoogle size={40} />
                  </button>
                </div>
              </div>
              <div className="py-4 lg:py-6">
                <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                  Don’t have an account?
                  <Link
                    className="text-white transition-all hover:text-lwsGreen hover:underline mx-2"
                    to="/register"
                  >
                    Create New
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
