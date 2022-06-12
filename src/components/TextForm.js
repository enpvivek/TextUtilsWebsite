import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleToUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleToLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleRmSpaces = () => {
    let arr = text.split(" ");
    let noSpace = "";
    for (let i = 0; i < arr.length; i++) {
      noSpace = noSpace + arr[i];
    }
    setText(noSpace);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  // const handleToBinary = () => {
  //   var binString = '';
  //   text.split(' ').map(function(bin) {
  //   binString += String.fromCharCode(parseInt(bin, 2));
  // });
  // }
  // let newText = binString;
  // setText(newText);
  // };
  const handleToBinary = () => {
    let newText = "";
    for (var i = 0; i < text.length; i++) {
      newText += text[i].charCodeAt(0).toString(2) + " ";
    }
    setText(newText);
  };

  //const handleCopyText ={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

  const [text, setText] = useState("Enter the text here");
  return (
    <>
      <div className="container ">
        <div className="mt-1 pt-4 px-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1> {props.heading} </h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <button className="btn  btn-primary my-3" onClick={handleToUp}>
            UPPERCASE
          </button>
          <button className="btn  btn-primary mx-3 my-3" onClick={handleToLow}>
            LOWERCASE
          </button>
          <button className="btn  btn-primary  my-3" onClick={handleRmSpaces}>
            REMOVE SPACES
          </button>
          <button
            className="btn  btn-primary mx-3 my-3"
            onClick={handleToBinary}
          >
            BINARY
          </button>
          <button className="btn  btn-primary my-3" onClick={handleClearText}>
            CLEAR
          </button>
        </div>
      </div>

      <div className="container">
        <div className="mb-5 pt-5 px-5">
          <h1>YOUR TEXT SUMMARY</h1>
          <div className="border border-2 rounded h5 p-2 ">
            {text.split(" ").length} words and {text.length} characters
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mb-5 px-5">
          <h1>PREVIEW</h1>
          <div className="border border-2 rounded h5 p-2 ">{text}</div>
          <button
            className="btn  btn-primary  my-3"
            onClick={() => {
              navigator.clipboard.writeText(text);
              window.alert("Copied to Clipboard");
            }}
          >
            COPY TO CLIPBOARD
          </button>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string };
TextForm.defaultProps = { heading: "TEXTFORM" };
