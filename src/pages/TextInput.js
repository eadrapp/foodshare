import "./TextInput.css";
import { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  FormControl,
  NativeSelect,
} from "@mui/material";

function TextInput(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    props.setPostType(e.target.value)
    console.log(e.target.value)
  }

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
      <div className="extras">
        <div className="img-upload">
          <input
            type="file"
            ref={props.fileRef}
            onChange={props.handleFileChange}
          />
        </div>
        <div className="post-type">
          <FormControl fullWidth>
            <NativeSelect
              value={props.postType}
              onChange={handleChange}
              defaultValue={"Offer"}
              inputProps={{
                name: "type",
                id: "uncontrolled-native",
              }}
            >
              <option value={"Offer"}>Offer</option>
              <option value={"Request"}>Request</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default TextInput;
