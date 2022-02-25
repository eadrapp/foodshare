import "./TextInput.css";
import { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';

function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
        <div className="post">
            <input
                className="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}
            />
            <button className="send" onClick={send}>
                <PostAddIcon />
            </button>
        </div>
    </footer>
  );
}

export default TextInput;