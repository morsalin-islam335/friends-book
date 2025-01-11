/* eslint-disable react/prop-types */
export default function PostBody({ poster, content }) {
  return (
    <>
      <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
        <p className="mb-4">{content ?? ""}</p>
        <div className="flexm flex-center justify-center overflow-hidden">
          {poster ? (
            <img
              className="w-1/2"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
              alt="poster"
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
