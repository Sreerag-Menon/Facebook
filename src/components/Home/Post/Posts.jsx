import React, { useEffect, useState } from "react";
import Post from "./Post";
import db from "../../../firebase/firebase";
import { doc } from "firebase/firestore";

import {
  collection,
  query,
  getDocs,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";

function Posts() {
  const [isliked, setIsLiked] = useState(false);
  const [counter, setCounter] = useState(0);

  const user = useSelector((state) => state.user);
  const { username, image } = user.user;
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const post = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    getDocs(post).then((snapshot) => {
      setPost(
        snapshot.docs.map((docs) => ({ id: docs.id, data: docs.data() }))
      );
    });
  }, []);

  const deletePost = async (postId) => {
    const docRef = doc(db, "posts", postId);
    await deleteDoc(docRef);
  };
  const like = () => {
    if (!isliked) {
      setCounter((prev) => prev + 1);
      setIsLiked((prev) => !prev);
    } else {
      setCounter((prev) => prev - 1);
      setIsLiked((prev) => !prev);
    }
  };

  return (
    <>
      {posts.map((post) => (
        <Post
          isliked={isliked}
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          message={post.data.message}
          username={post.data.username}
          timestamp={post.data.timestamp}
          like={post.data.like}
          onDelete={() => deletePost(post.id)}
          onLike={() => like()}
        />
      ))}
    </>
  );
}

export default Posts;
