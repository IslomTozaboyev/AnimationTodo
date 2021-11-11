import React from "react";
import styled from "styled-components";

const MyModalWrapper = styled.div`
  .myModal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    &.active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .myModalContent {
      min-width: 350px;
      padding: 30px;
      border-radius: 20px;
      background-color: #fff;
    }
  }
`;

const MyModal = ({ children, modal, toggleModal }) => {
  return (
    <MyModalWrapper>
      <div className={`myModal ${modal ? "active" : ""}`} onClick={toggleModal}>
        <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </MyModalWrapper>
  );
};

export default MyModal;
