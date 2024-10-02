import React from 'react'

import { useState } from 'react'
export default function Form(props) {

  const [text,settext]=useState("");
 

  const handleUpClick=()=>{
    let newText =text.toUpperCase();
    settext(newText)
  }
  const LowerCasehandle =()=>{
    let text2=text.toLowerCase();
    settext(text2);
  }
  const CapitalizeText=()=>{
    const a = text.split(' ')
        for (let i = 0; i < a.length; i++) {
          a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
        }
        const newText = a.join(' ')
    settext(newText);
    // props.showAlert("text has been capitalize","success");
  }
  const handleOnChange=(event)=>{
    settext(event.target.value)
  }
  const clearText=()=>{
    let textC=" ";
    settext(textC);
  }
  const handleCopy=()=>{
    var t=document.getElementById("mytext");
    t.select();
    navigator.clipboard.writeText(t.value);
  }
  const handleSpeak=()=>{
  
      const voice1 = new SpeechSynthesisUtterance(text);
   
      const voices = speechSynthesis.getVoices();
      voice1.voice = voices[2]; 
      speechSynthesis.speak(voice1);
  }
  const extraSpaces=()=>{
   let trim=text.split(/[ ]+/)
   let newText=trim.join(" ");
   settext(newText)
  }

  return (
    <>
    <div className='container'>
  <div class="mb-3">
    <h2 className='my-4'>{props.heading}</h2>
  
    <textarea onChange={handleOnChange} className="form-control" id="mytext" value={text} style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}} rows="7"></textarea>
  </div>
  <button className='btn btn-dark ' onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-dark mx-2 ' onClick={LowerCasehandle}>Convert to LowerCase</button>
  <button className='btn btn-dark mx-2' onClick={CapitalizeText}>Capitalize Text</button>
  <button className='btn btn-dark mx-2' onClick={clearText}>Clear text</button>
  <button className='btn btn-dark mx-2' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-dark mx-2' onClick={handleSpeak}>speak Text</button>
  <button className='btn btn-dark mx-2' onClick={extraSpaces}>Remove Extra Spaces </button>
  </div> 
  <div className="container my-3">
    <h2>Your text Summary</h2>
    <p> {text.split(" ").length-1} words and {text.replace(/\s+/g, '').length}  characters</p>
    <p>{0.08 * text.split(" ").length} Minutes Read</p>
    <p>{text.split(".").length-1} Number of sentences</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter some text above to preview it"}</p>
  </div>
  </>
  )
}
