import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`;

export const ModalContent = styled.div`
  max-width: 600px;
  padding: 0 30px 0 30px;
  /* background-color: white; */
  color: #000;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  overflow: auto;
`;

export const ModalHeading = styled.p`
  max-width: 100%;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3rem;
`;

export const Button = styled.div`
  max-width: 100px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 1);
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px 10px 15px;
  margin: 20px auto 10px auto;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 1);
  background-color: black;
  transition: all 0.6s;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
    max-height: 40px;
    overflow: hidden;
  }
  &:hover {
    padding: 10px 15px 10px 15px;
    transform: scale(1, 1);
    text-decoration: none;
    background-color: white;
    color: black;
  }
`;
