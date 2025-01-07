/* eslint-disable react/prop-types */
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </>
  );
}
