import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: BF4F74;
`;

export default function Commentform({ onAddComment, slug }) {
  // function handleInputchange(input)
  function handleFormSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.commentInput.value;
    console.log(comment);
    onAddComment(comment, slug);
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>exchange here</legend>
        {/* <label htmlFor='commentInput'></label> */}
        <textarea
          type="text"
          id="commentInput"
          name="commentInput"
          //   value="Leave your comment here"
          //   onChange={(event) => handleInputchange(event.target.value)}
        ></textarea>
      </fieldset>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
