import React from 'react';
import {connect} from "react-redux";
import {dec, inc, updateName} from "./actions";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render () {
    const { count, onDec, onInc, name, onName } = this.props;
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={onDec}>DEC</button>
        <button onClick={onInc}>INC</button>
        <p></p>

        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <h2>Name: {name}</h2>
        <button onClick={() => {onName(this.state.value)}}>NAME</button>
      </div>
    )
  }
}

const mapStateToProps = ( {updateCount: {count}, updateName: {name}} ) => {
  return { count, name };
};

const mapDispatchToProps = {
    onInc: inc,
    onDec: dec,
    onName: updateName,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);