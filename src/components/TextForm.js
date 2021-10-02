import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "Success");
    }
    const handleClsClick=()=>{
        // console.log("UpperCase was Clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "Success");
    }
    const handleDwnClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "Success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        console.log("I am Copied");
        var text=document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text", "Success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "Success");
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myTextBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-secondary mx-1" onClick={handleClsClick}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDwnClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> word and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to Read</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter Your Text To Preview"} </p>
            </div>
        </>
    )
}
