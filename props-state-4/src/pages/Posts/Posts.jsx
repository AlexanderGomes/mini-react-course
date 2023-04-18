import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

const Posts = () => {
  const [post, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post__main">
      {post?.map((p) => (
        <div>
          <PostCard data={p} />
        </div>
      ))}
    </div>
  );
};

const PostCard = ({ data }) => {
  return (
    <div className="cardPost__main">
      <p>{data.title}</p>
      <Bottom body={data.body} />
    </div>
  );
};

const Bottom = (props) => {
  return <p className="black">{props.body}</p>;
};

export default Posts;
