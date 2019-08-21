import React from 'react';

const addpage = (props) => (
  <div>
    <form onSubmit = {props.handleclick}>
      Name : <input type = 'text' name = 'name' /> <br />
      High Score: <input type = 'text' name = 'highscore' /> <br />
      Average: <input type = 'text' name = 'average' /> <br />
      <input type = 'submit' value = 'Submit'></input>
    </form>
  </div>
);

export default addpage;