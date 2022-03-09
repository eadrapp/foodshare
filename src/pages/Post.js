import styled from "styled-components";

export default function Post(props) {
  const PreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 5px;
      max-width: 200px;
      height: auto;
      margin-right: 10px;
    }
  `;

  // add the date
  // add the username
  // add a pic
  // props.fromMe
  return (
    <div className="message-row">
      <div className="message">
        <span className="message-user">{props.user}</span>
        <span>{props.text}</span>
        <PreviewContainer>
          <img src={props.imageSrc}/>
        </PreviewContainer>
      </div>
    </div>
  );
}
