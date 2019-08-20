import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      member: {},
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    $.ajax({
      url: '/add',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({"index" : this.state.index}),
      success: this.componentDidMount.bind(this)
    }
    );

  }

  componentDidMount() {

    $.get("/docs", (data) => {
      console.log(data);
      data = JSON.parse(data);
      this.setState({members: data, index : data.length});
    });


    // this.setState({
    //   members: [
    //     {
    //       id: 1,
    //       name: "test1",
    //       highScore: 300,
    //       average: 220
    //     },
    //     {
    //       id: 2,
    //       name: "test2",
    //       highScore: 300,
    //       average: 210
    //     }
    //   ]
    // });
  }

  render() {

    console.log(this.state);
    return (<div style = {{textAlign: 'center'}}>
      <h1 style ={{textAlign:'center'}}>Bowling League</h1>
      <h2 style ={{textAlign:'center'}}>Member List</h2>
      <button onClick = {this.handleClick}>Add Member</button>
      <div id="members">
        <table >
          <tbody>
            <tr key = "0">
              <td style ={{textAlign:'left'}}>Name</td>
              <td>Average</td>
              <td>High Score</td>
            </tr>
          {this.state.members.map((val) => {
            return (<tr key={val.id}>
              <td style = {{textAlign:'left'}}>
                {val.name}
              </td>
              <td>
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

    </div>)
  }

}

ReactDOM.render(<App />, document.getElementById("app"));
