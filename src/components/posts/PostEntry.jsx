// import { useForm } from 'react-hook-form';
// import { actions } from './../../actions/index';

// import AddPhotoIcon from "../../assets/icons/addPhoto.svg";
// import useAxios from './../../hooks/useAxios';
// import usePost from './../../hooks/usePost';
// import { useProfile } from './../../hooks/useProfile';

// import Field from './../Field';
// import useAuth from './../../hooks/useAuth';

export default function PostEntry({ onCreate }) {
  // const {auth} = useAuth();
  // const {dispatch} = usePost();
  // const {api} = useAxios();
  // const {state: profile} = useProfile();
  // const user = profile?.user??auth?.user;

  // const {
  //     register,
  //     handleSubmit,
  //     formState: {errors},
  //     setError,
  // } = useForm();

  // const handlePostSubmit = async(formData) =>{

  // }

  return (
    <>
      <div className="card relative">
        <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
          Create Post
        </h6>

        <form>
          <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
            <div className="flex items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                src="./assets/images/avatars/avatar_1.png"
                alt="avatar"
              />
              <div>
                <h6 className="text-lg lg:text-xl">Sumit Saha</h6>

                <span className="text-sm text-gray-400 lg:text-base">
                  Public
                </span>
              </div>
            </div>

            <label
              className="btn-primary cursor-pointer !text-gray-100"
              htmlFor="photo"
            >
              <img src="./assets/icons/addPhoto.svg" alt="Add Photo" />
              Add Photo
            </label>
            <input type="file" name="photo" id="photo" className="hidden" />
          </div>
          {/* <!-- Post Text Input --> */}

          <textarea
            name="post"
            id="post"
            placeholder="Share your thoughts..."
            className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
          ></textarea>
          <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
            <button
              className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
