import React,{useState} from 'react'
export default function TextArea(proprs) {
    const[text,setText] = useState("Enter Text Here");
    const handleUpClick =(event)=>{
       
        setText(text.toUpperCase());
    };

    const handleOnChange=(event)=>{

        setText(event.target.value);
    }
    return (
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Provide Text</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Format</button>

    </div>
  )
}
