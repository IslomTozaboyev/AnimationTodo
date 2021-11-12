import React from "react";
import styled from "styled-components";

const MyLoaderWrapper = styled.div`
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const MyLoader = () => {
  return (
    <MyLoaderWrapper>
      <div className="loader mb-5"></div>
    </MyLoaderWrapper>
  );
};

export default MyLoader;
