import "bootstrap/js/dist/base-component";

import React, { useState } from 'react'

const Form = (props) => {
    const [text, setText] = useState();

    const handleChange = (event) => {
        setText(event.target.value)

    }
    const handleUpperCase = () => {
      let newText = text.toUpperCase();
      setText(newText)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    // const handleCapCase = () => {
    //     let newText = text.toCapitalCase();
    //     setText(newText)
    // }

    return (
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="my-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange}></textarea>
                <button className="btn btn-primary m-2" onClick={handleUpperCase}>UpperCase</button>
                <button className="btn btn-primary m-2" onClick={handleLowerCase}>LowerCase</button>
                {/* <button className="btn btn-primary m-2" onClick={handleCapCase}>CapitalCase</button> */}
            </div>
        </div>
    )
}

export default Form
