export default function Post(props) {
    // add the date
    // add the username
    // add a pic
    // props.fromMe
    return (
      <div className="message-row">
        <div className="message">
          <span className="message-user">{props.user}</span>
          <span>{props.text}</span>
        </div>
      </div>
    );
  }