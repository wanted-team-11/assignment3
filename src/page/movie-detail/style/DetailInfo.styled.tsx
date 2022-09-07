import styled from "styled-components";

export const InfoList = styled.ul`
  color: black;
  margin-top: 30px;
`;

export const InfoItem = styled.li`
  display: flex;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  padding: 14px 0px;
  border-bottom: 1px solid rgb(240, 240, 240);
  margin: 0px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.grayTextColor};
  width: 200px;
`;

export const Description = styled.span`
  color: black;
  width: 520px;
  margin-left: 10px;
`;
