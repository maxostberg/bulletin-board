import React, { useState } from "react";
import styles from "./ReactPost.module.css";

import PostLike from "./PostLike/PostLike";

const ReactPost = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLikeHandler = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.ReactPost} id={props.id}>
      <h3>{props.question}</h3>
      <p className={styles.answerText}>{props.answer}</p>
      <hr></hr>
      <div className={styles.likeContainer}>
        <button className={styles.likeBtn} onClick={() => toggleLikeHandler()}>
          Like
        </button>
        {liked ? <PostLike /> : null}
      </div>
    </div>
  );
};

export default ReactPost;
