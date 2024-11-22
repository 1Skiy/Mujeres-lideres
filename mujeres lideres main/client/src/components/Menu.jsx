import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Menu = ({cat}) => {

  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/?cat=${cat}`);
        setposts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);
  return (
    <div className="menu">
      <h3>Otros post que quiza te agraden</h3>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h5>{post.title}</h5>
          <Link to={`/post/${post.id}`} className="link">
            <button>Leer más</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu