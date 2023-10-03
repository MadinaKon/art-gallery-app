import React, { Fragment } from "react";

export default function Comments({ pieceInfo }) {
  return (
    <ul>
      {pieceInfo.comments?.map((comment) => (
        <li key={comment.id}>
          <h6>
            {comment.date}
            {comment.showTime}
          </h6>
          {comment.commentText}
        </li>
      ))}
    </ul>
  );
}
