import React, { useState, useEffect } from "react";
import axios from "axios";

const Asyncawait = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      await setPosts(res.data);
    }
    getPosts();
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

export default Asyncawait;
