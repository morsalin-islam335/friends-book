import axios from "axios";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import Field from "../Field";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }, // sepereate error from formSate
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login"); // after creating account user will navigate to login page
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong. ${error.message}`,
      });
    }
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", {
              required: "First Name is Required",
            })}
            className={`auth-input ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
            type="firstName"
            name="firstName"
            id="firstName"
          />
        </Field>

        <Field label="Last Name" error={errors.lastName}>
          <input
            {...register("lastName")}
            className={`auth-input ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
            type="lastName"
            name="lastName"
            id="lastName"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email ID is Required" })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="email"
            name="email"
            id="email"
          />
        </Field>

        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`auth-input ${
              errors.password ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            name="password"
            id="password"
          />
        </Field>

        <button
          className="auth-input bg-morsalinGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>

        <p className="text-red-500">{errors?.root?.random?.message}</p>
      </form>
    </>
  );
}
