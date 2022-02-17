import { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';

function LoginForm(props) {
    // this is the state of the name itself
    const [name, setName] = useState("");
    // this is a toggle between showing and hiding the input
    const [showInput, setShowInput] = useState(false);
  
    // you clicked ok!
    function ok() {
      props.setUsername(name);
      setShowInput(false);
    }
  
    if (showInput) {
      return (
        <div className="name-picker">
          <input
            className="name-picker-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button className="name-picker-button" onClick={ok}>
            OK
          </button>
        </div>
      );
    }
    return (
      <div className="name-picker">
        <span className="name-picker-name">{name || "Set Username:"}</span>
        <LoginIcon size="24" onClick={() => setShowInput(true)} />
      </div>
    );
  }
  
  export default LoginForm;