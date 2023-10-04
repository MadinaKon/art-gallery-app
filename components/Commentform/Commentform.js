import React from "react";

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
    <form onSubmit={handleFormSubmit}>
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
      <button>submit</button>
    </form>
  );
}
