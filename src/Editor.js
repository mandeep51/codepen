import React, { useState } from 'react'
/* import CodeMirror from 'codemirror/lib/codemirror.js' */
 import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript' 
import  CodeMirror from 'react-codemirror'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor(props) {
    const {language,displayName,value,onChange}=props  
   const [open,setOpen]=useState(true)
    function handler(editor,data,value){
         onChange(editor)
    }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}` }>
        <div className="editor-title">
          {displayName} 
            <button className="expand-collaspe-btn" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </button>
        </div>
         <CodeMirror
        onChange={handler}
        value={value}
        className="code-mirror-wrapper"
         options={{
            mode: language,
    theme: 'material',
    lineNumbers: true,
     lint:true, 
    lineWrapping:true
        }} 
        />
    </div>
  )
}

export default Editor
