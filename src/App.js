import Editor from "./Editor";
import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";
import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
const [srcDoc,setSrcDOC]=useState("")

  useEffect(()=>{
        const timeout=setTimeout(()=>{
          setSrcDOC(`
           <html>
           <body>${html}</body>
           <style>${css}</style>
           <script>${js}</script>
           </html>
           
          `)
        },250)

        return ()=>clearInterval(timeout)
        
  },[html,css,js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

        <Editor
          language="javascript"
          displayName="JAVA SCRIPT"
          value={js}
          onChange={setJs}
        />
      </div>

      <div className="pane">
        <iframe
        srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
