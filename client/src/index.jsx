import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Mainpage from './components/mainpage.jsx';
import Addpage from './components/addpage.jsx';


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

    // $.ajax({
    //   url: '/add',
    //   method: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({"index" : this.state.index}),
    //   success: this.componentDidMount.bind(this)
    // }
    // );
    this.setState({add: !this.state.add});

  }

  componentDidMount() {

    $.get("/docs", (data) => {
      console.log(data);
      data = JSON.parse(data);
      this.setState({members: data, index : data.length});
    });


  }

  render() {

    console.log(this.state);
    return (<div style = {{textAlign: 'center'}}>
      <h1 style ={{textAlign:'center'}}>Bowling League</h1>
      {this.state.add ?
      <Addpage handleclick = {this.state.handleClick}/>
      :
        <Mainpage members = {this.state.members} handleclick = {this.handleClick} />
      }


    </div>)
  }

}

ReactDOM.render(<App />, document.getElementById("app"));
