import UploadPreview from "@rpldy/upload-preview";
import React, { useRef, useState, useCallback } from "react";

export default function PreviewsWithClear() {
    const previewMethodsRef = useRef();
    const [previews, setPreviews] = useState([]);
  
    const onPreviewsChanged = useCallback((previews) => {
      setPreviews(previews);
    }, []);
  
    const onClear = useCallback(() => {
      if (previewMethodsRef.current?.clear) {
        previewMethodsRef.current.clear();
      }
    }, [previewMethodsRef]);
  
    return (
      <>
        <br />
        <UploadPreview
          rememberPreviousBatches
          previewMethodsRef={previewMethodsRef}
          onPreviewsChanged={onPreviewsChanged}
        />
      </>
    );
  };