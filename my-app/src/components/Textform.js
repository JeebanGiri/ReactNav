import React, { useState, useReducer } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    // console.log("upercase click: " + text);
    let uppper = text.toUpperCase();
    settext(uppper);
  };
  const handledownclick = () => {
    let smaller = text.toLocaleLowerCase();
    settext(smaller);
  };
  const handlecleartext = () => {
    let clear = "";
    settext(clear);
    // settext('');             Directly use settext method using space between inverted commas
  };


  // This function currently not working 
  const handlecolortext = () => {
    setcolor("#ff0000");
  }

  const handledownloadtext = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [(document.getElementsByClassName("form-control").value = text)],
      { type: "text/plain;charset=utf-8" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleonchange = (event) => {
    // console.log("on change function run");
    settext(event.target.value);
};

const handleonchecked=()=>{
  setchecked((checked) => !checked)
}


  const [text, settext] = useState("");
  const [color, setcolor] = useState("#000000");
  const [checked, setchecked] =useState(false);
  const [check, setcheck] =useReducer(
    (check) => !check,
    false);
  const result = color + text;
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="form-outline">
          <textarea
            className="form-control"
            id="textAreaExample1"
            value={result} 
            placeholder="Enter text here to chage"
            onChange={handleonchange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-2 " onClick={handleupclick}>
          Change Uppercase
        </button>
        <button
          className="btn btn-primary mt-2 mx-5 "
          onClick={handledownclick}
        >
          Change Lowercase
        </button>
        <button
          className="btn btn-primary mt-2 mx-5 "
          onClick={handlecleartext}
        >
          Clear Text
        </button>

        {/* <button 
        className="btn btn-primary mt-2 mx-5 "
         onClick={()=> settext(" ")}
         >
          Clear Text
        </button> */}

        <button
          className = "btn btn-primary mt-2 mx-5 "
          onClick = {handlecolortext}
          onChange={(event) => 
          event.target.value}
        >
          Colour Text
        </button>

        <button
          className="btn btn-primary mt-2 mx-5 "
          onClick={handledownloadtext}
        >
          Download Text
        </button>

      </div>
      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length-1} Words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length}Minute Read</p>
        <h2>Preview</h2>
        <p>{text}</p>

        {/* Checkbox using usestate hook */}
        <input type="checkbox" value={checked} onChange = {handleonchecked}/>
        <label>
            {checked ? "Checked" : "Not checked"}
        </label>

        {/* Checkbox created using useReducer hook */}
        <input type="checkbox"
        value={check}
        onChange={setcheck}
        />
        <label>{check ? "Checked" : "Not checked"}</label>
      </div>
    </>
  );
}
