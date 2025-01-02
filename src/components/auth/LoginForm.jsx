import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../Field";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/");
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field lable="Email" error={errors.email}>
          <input
            {...register("email", {
              required: "Email  is required",
            })}
            className={`auth-input ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            name="email"
            id="email"
            type="email"
          ></input>
        </Field>
        <Field label="Password">
          error = {errors.password}
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={`auth-input ${errors.password}? "border-red-500": "border-gray-200"`}
          ></input>
        </Field>
        <Field>
          <button className="auth-input bg-morsalinGreen font-bold text-deepDark transition-all hover:opacity-90">
            Login
          </button>
        </Field>
      </form>
    </>
  );
};
