import styled from "styled-components";

const PreviewContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  margin: 5px;
  max-width: 18rem;
  height: auto;
  margin-right: 10px;
  padding-top:5px;
}
`;

export default function Post(props) {
  console.log(props)
  // add the date
  // add the username
  // add a pic
  // props.fromMe
  return (
    <div className="message-row">
      <div className="message">
        <div className="top-row">
          <span className="message-user">{props.user}</span>
          <span className={props.postType === "Offer" ? "greeny" : "bluey"}>{props.postType}</span>
        </div>
        <span>{props.text}</span>
        <PreviewContainer>
          <img src={props.imageSrc}/>
        </PreviewContainer>
      </div>
    </div>
  );
}
