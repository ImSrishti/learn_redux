import React, { useState } from 'react';
import { connect } from "react-redux";
import { incCount } from "../redux/actions";

function Child1(props) {

  const [inputText, setinputText] = useState('');

  return (
    <div>
      Child1 - 
      <input type="number" value={inputText} onChange={e => setinputText(e.target.value)} />
      <button onClick={e => { props.incCount(inputText) }}>Add</button>
    </div>
  );
}



export default connect(
  null,
  { incCount }
)(Child1);
