import React, { useState, useEffect } from "react";
import axios from "axios";

const Promise = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3>Posts</h3>
      <div>
        {posts.map((post) => (
          <p key={post.id}>
            {post.id}...{post.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Promise;
