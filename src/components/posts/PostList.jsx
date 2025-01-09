/* eslint-disable react/prop-types */
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  const sortedPostList = posts.sort((a, b) => {
    const dateA = new Date(a.createAt);
    const dateB = new Date(b.createAt);
    return dateB - dateA; // Most recent first
  });

  return (
    <>
      {posts &&
        sortedPostList.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </>
  );
}
