import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Foobar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    foo: PropTypes.string
  };

  render() {
    return <div>fooar</div>;
  }
}
