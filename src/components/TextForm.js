import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const calcul = 0.0008*text.split(" ").length;
    const clearHandale = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = '';
        setText(newText)
        // props.showAlert(" Text  Clear ","success")
    }
    const convrt2uc = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Text converted to UpperCase ","success")
    }
    const convrt2lc = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Text converted to LowerCase ","success")
    }
    const  copyText= () => {
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert(" Text is Copy ","success")
    }
    const truncate = () =>{
        var ctext = document.getElementById("mybox")
        ctext.select();
        navigator.clipboard.writeText(ctext.value)
        setText('')
        props.showAlert(" Text is Cut ","success")
       }
    //input?.length > 300 ? `${input.substring(0, 254)}...` : input;
    //   console.log(input)
    const handelonchange = (event) => {
        //   console.log("on Change");
        setText(event.target.value);
    }
    const back = () => {
           //console.log("back");
        var data= "";
        for (var i=0;i<(text.length)-1;i++)
        {
            data=data+text[i];
        }
       setText(data);
    }
    return (
        <div>
            <div className="container">

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelonchange} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={convrt2uc}>Convert Into UC</button>
                <button className='btn btn-primary mx-1' onClick={convrt2lc}>Convert Into LC</button>
                <button className='btn btn-primary mx-1' onClick={clearHandale}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={truncate}>Cut Text</button>
                <button className='btn btn-primary mx-1' onClick={back}>Back Character</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary are:</h1>
                <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
                <p>{calcul.toFixed(4)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
