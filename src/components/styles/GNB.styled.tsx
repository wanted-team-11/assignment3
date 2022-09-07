import styled from "styled-components";

export const GNBContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  background-color: white;
  z-index: 10;
  width: 100vw;
  height: 62px;
  border: 1px solid lightgray;
  border-top: none;
`;

export const LeftWrap = styled.div`
  display: flex;
`;

export const RightWrap = styled.div`
  display: flex;
  position: relative;
`;

export const Home = styled.button`
  width: 151px;
  border: 0;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100px;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 20px;
`;

export const Input = styled.input`
  display: flex;
  width: 300px;
  height: 38px;
  align-items: center;
  background-color: #f5f5f7;
  border: 0;
  outline: none;
  margin: 12px;
  padding: 0 30px;
`;

export const Padding = styled.div`
  width: 100%;
  padding: 31px;
`;
