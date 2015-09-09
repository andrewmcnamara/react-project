import React from "react";
const Greeting = function (props) {

  return {
    props,
    render () {
      return (
        <p>Hello, {this.props.name}!</p>
      );
    }
  };

};

export default Greeting;
