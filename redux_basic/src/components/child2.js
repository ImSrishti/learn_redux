import React, { useState } from 'react';
import { connect } from "react-redux";
import { decCount } from "../redux/actions";

function Child2(props) {

  const [inputText, setinputText] = useState('');

  return (
    <div>
      Child2 - 
      <input type="number" value={inputText} onChange={e => setinputText(e.target.value)} />
      <button onClick={e => { props.decCount(inputText) }}>Substract</button>
    </div>
  );
}



export default connect(
  null,
  { decCount }
)(Child2);
