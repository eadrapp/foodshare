import "./TextInput.css";
import { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';

function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendPost(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <div className="post">
      <div className="top">
          <div className="post">
              <input
                  className="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={onKeyPress}
                  overflow-wrap="break-word"
              />
              <button className="send" onClick={send}>
                  <PostAddIcon />
              </button>
          </div>
      </div>
      <div className="img-upload">
      <input
          type="file"
          ref={props.fileRef}
          onChange={props.handleFileChange}
        />
      </div>
    </div>
  );
}

export default TextInput;