import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Textform(props) {
  const handleUpClick = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
    setModifiedText(tempText);
  };

  const handleDownClick = () => {
    let tempText = text.toLowerCase();
    setText(tempText);
    setModifiedText(tempText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const handleSentenceCaseClick = () => {
      let modifiedText = text.split('. ')
      .map((modifiedText) => modifiedText.charAt(0).toUpperCase() + modifiedText.slice(1))
      .join('. ');
      setModifiedText(modifiedText);
      setText(modifiedText);
    };
    
    const handleclearClick = () => {
      setText('');
      setModifiedText('');
      props.showalert("Text Cleared","success")
    };
    const handleclipboard = () => {
        props.showalert("Message Copied Successfully","success")
    };
    const [text, setText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  return (
    <>
      <div className='Container'>
        <h3>{props.heading}:</h3>
        <div className='mb-3'>
          <textarea
            className='form-control my-3'
            onChange={handleOnChange}
            value={text}
            id='myBox'
            rows='8'
            // ${props.mode==='dark'?'light':'dark'}
            style={{backgroundColor:props.mode==='dark'?'#03001C':'white', color:props.mode==='dark'?'white':'black'}}
            placeholder='Enter your value here:'
          ></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className='btn btn-primary mx-1 my-2' onClick={handleDownClick}>
          Convert To LowerCase
        </button>
        <button className='btn btn-primary mx-1 my-2' onClick={handleSentenceCaseClick}>
          Sentence Case
        </button>
        <button className='btn btn-primary mx-1 my-2' onClick={handleclearClick}>
        Clear Text
        </button>
        {/* <button className='btn btn-primary mx-1 my-2' onClick={{handleclipboard,props.showalert("copied successfully","success")}} > */}
        <CopyToClipboard text={text}>
            <button className="btn btn-primary mx-1 my-2" onClick={handleclipboard}>
            Copy Text
            </button>
        </CopyToClipboard>
      </div>
      <div className='container my-4'>
        <h4>Text Summary :</h4>
        <p>
          Character Count : {text.length}
          <br />
          Words Count :{' '}
          {text.trim().split(/\s+/).length > 1 ? text.trim().split(/\s+/).length : 0}
          <br />
          { text.split(' ').length>1?text.split(' ').length * 0.008:0} Minute Read
        </p>
        <h4 className='my-2'>Text Preview :</h4>
        <p>{modifiedText !== '' ? modifiedText : text}</p>
      </div>
    </>
  );
}
