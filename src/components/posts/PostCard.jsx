/* eslint-disable react/prop-types */
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

import { useState } from "react";

export default function PostCard({ post }) {
  const [comments, setComments] = useState(post?.comments);
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody poster={post?.image} content={post?.content} />
      <PostAction post={post} comments={comments} />

      <PostComments post={post} comments={comments} onComments={setComments} />
    </article>
  );
}
