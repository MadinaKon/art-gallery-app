import React from "react";

export default function Commentform({ handleFormSubmit }) {
  return (
    <form>
      <fieldset>
        <legend>exchange here</legend>
        {/* <label htmlFor='commentInput'></label> */}
        <textarea
          type="text"
          id="commentInput"
          name="commentInput"
          value="Leave your comment here"
        ></textarea>
      </fieldset>
      <button>submit</button>
    </form>
  );
}
