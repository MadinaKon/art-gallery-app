import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0.25em solid black;
  color: black;
  background: white;
  &:hover {
    border: 0.4em solid black;
    margin: 0.88em;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 4px solid black;
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
      <StyledFieldset>
        <legend>
          <h1>Comments</h1>
        </legend>
        <StyledFieldset>
          <legend>exchange here</legend>
          {/* <label htmlFor='commentInput'></label> */}
          <textarea
            type="text"
            id="commentInput"
            name="commentInput"
            //   value="Leave your comment here"
            //   onChange={(event) => handleInputchange(event.target.value)}
          ></textarea>
        </StyledFieldset>
        <StyledButton>Submit</StyledButton>
      </StyledFieldset>
    </StyledForm>
  );
}
