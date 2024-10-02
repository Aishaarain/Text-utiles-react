import React, { useState } from 'react'

export default function About(props) {
  // const [mystyle,setstyle]=useState({
  //    color : 'white',
  //       backgroundColor:'black'
  // })
  // const[btnText,setBtnText]=useState("Enable Dark Mode")

  // const togglestyle=()=>{
  //   if(mystyle.color==="white"){
  //     setstyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setstyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // } 
  // const [bodyStyle,setBStyle]=useState({
  //   backgroundColor:'grey',
  //   color:'white'
  // })
  // const BodyToggle=()=>{
  //   if(bodyStyle.color==="white"){
  //     setBStyle({
  //       color:'slategrey',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable Light Mode");
  //   }
  //   else{
  //     setBStyle({
  //       backgroundColor:'slategrey',
  //       color:'white'
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  // }

  return (
    <>

    
    <div className='container'  >
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}}>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}}>
        Analyze Your Text
      </button>
    </h2>
    <div style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      The app includes a simple copy function, enabling you to quickly transfer your text elsewhere without hassle. If needed, you can clear all text with a single click, providing a fresh workspace. Furthermore, the app supports voice input, allowing you to dictate your text for added convenience and flexibility.You can count the number of words or characters in your text, making it easier to track length or meet specific requirements. The app also provides quick options to convert your text to uppercase, lowercase, or capitalize the first letter of each word, enhancing its readability and presentation.
      </div>
    </div>
  </div>
  <div  style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}}className="accordion-item">
    <h2 style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}}className="accordion-header">
      <button style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      The Text Utils app is a versatile tool designed to enhance your text management experience. With a variety of features, it allows you to perform several essential tasks effortlessly.
      </div>
    </div>
  </div>
  <div  style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}}className="accordion-item">
    <h2 className="accordion-header">
      <button style={{backgroundColor:props.mode==='dark'?'#292d39':'white', color:props.mode==='dark'?'white':"black"}} className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      The Text Utils app is also optimized for cross-browser compatibility, ensuring that users can access its full range of features seamlessly across all modern web browsers. Whether you are using Chrome, Firefox, Edge, Safari, or any other browser, the app functions consistently, providing a smooth user experience.
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
