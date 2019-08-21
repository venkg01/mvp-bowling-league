import React from 'react';

const mainpage = (props) => (
  <div id="members">
    <h2 style={{ textAlign: 'center' }}>Member List</h2>
    <button onClick={props.handleclick}>Add Member</button>
    <table style={{ border: '1px solid black' }}>
      <tbody style={{ border: '1px solid black' }}>
        <tr key="0">
          <td style={{ textAlign: 'left', border: '1px solid black' }}>Name</td>
          <td style={{ border: '1px solid black' }}>Average</td>
          <td style={{ border: '1px solid black' }}>High Score</td>
        </tr>
        {props.members.map((val) => {
          return (<tr key={val.id} style={{ border: '1px solid black' }}>
            <td style={{ textAlign: 'left' }}>
              {val.name}
            </td>
            <td >
              {val.average}
            </td>
            <td>
              {val.highScore}
            </td>
          </tr>);
        }
        )}
      </tbody>
    </table>
  </div>
);

export default mainpage;