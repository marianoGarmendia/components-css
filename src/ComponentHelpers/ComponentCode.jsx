import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { filesElements } from "../filesElements/filesElement";

import CardsElement from "./CardsElement";
import Editor from "@monaco-editor/react";
import { useCopiedOk } from "../helpers/useCopiedOk";

function ComponentCode() {
  const { elementName } = useParams();
  const [fileName, setFileName] = useState(elementName);
  const [card, setCard] = useState("");
  const { copied, CopiedMessage, handleCopied } = useCopiedOk();
  const editorRef = useRef(null);
  const file = filesElements[fileName];

  useEffect(() => {
    setFileName(elementName);
  }, [elementName]);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    setCard(editorRef.current.getValue());
  }

  function getValueEditor() {
    navigator.clipboard.writeText(editorRef.current.getValue());
    handleCopied();
  }

  // New functionality
  // Botones que permitan cambiar el editor para obtener el codigo css o en tailwind
  return (
    <div className="flex flex-col gap-10 md:flex-row h-[100%]">
      <div className="flex flex-col items-start gap-2 w-full h-fit ">
        <Editor
          width="100%"
          height="300px"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={(value) => {
            setCard(value);
          }}
          path={file.name}
          language={file.language}
          defaultLanguages={file.language}
          defaultValue={file.value}
        />
        <div className="p-4 bg-slate-500 mt-2 rounded-md">
          <button
            className="bg-lightGray p-2   rounded-md"
            onClick={getValueEditor}
          >
            Copy code
          </button>
        </div>
        <div className="py-2 relative w-full">
          {copied && <CopiedMessage />}
        </div>
      </div>
      <div className="w-full h-full">{CardsElement(card)}</div>
    </div>
  );
}

export default ComponentCode;
