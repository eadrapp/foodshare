import React from "react";
import styled from "styled-components";
import Uploady from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

const mockSenderEnhancer = getMockSenderEnhancer();

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

export default function ImageUpload() {
  return (
    <Uploady
      destination={{ url: "./images" }}
      enhancer={mockSenderEnhancer}
    >
      <div>
        <UploadButton>Upload image</UploadButton>
      </div>

      <PreviewContainer>
        <UploadPreview />
      </PreviewContainer>

    </Uploady>
  );
}

// function ImagePic() {
//   return (
//     <Uploady
//     destination={{ url: "./images" }}
//     enhancer={mockSenderEnhancer}
//     >
    
//     <PreviewContainer>
//         <UploadPreview />
//     </PreviewContainer>

//     </Uploady>
//   );
// }

// export {
//   ImagePic,
// }
