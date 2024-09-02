import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[showParagraph,setShowParagraph] = useState(false);
  const handelSubmit = ()=>{
    setShowParagraph(true)
  }
  return (
    <div id="main">
      <button id="click" onClick={setShowParagraph}>Click Me</button>
      {
        showParagraph &&( <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>) 
      }
    </div>
  );
}


export default App;
