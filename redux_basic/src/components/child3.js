import React from 'react';
import { connect } from "react-redux";

import { getData } from "../redux/selectors";


function Child3(props) {
    return (
    <div>
        Child3 - Counter: {props.counter.counter}
    </div>
  );
}

const mapStateToProps = state => {
    const counter = getData(state);
    return counter;
  };

export default connect(mapStateToProps)(Child3);
