import React, { Fragment } from "react";
import styled from "styled-components";

const StyledCommentDiv = styled.div`
  border: 4px solid black;
  padding: 2rem;
  background: silver;
`;

export default function Comments({ pieceInfo }) {
  return (
    <ul
      style={{
        listStyleType: "none",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {pieceInfo.comments?.map((comment) => (
        <li key={comment.id}>
          <StyledCommentDiv>
            <h5>
              published on:{comment.commentDate} at:{comment.commentTime}
            </h5>
            <StyledCommentDiv>{comment.commentText}</StyledCommentDiv>
          </StyledCommentDiv>
        </li>
      ))}
    </ul>
  );
}
