import styled from "styled-components";

export const Paragraph = styled.p`
  margin-top: 20px;
  line-height: 1.7;
`;

export const Ellipsis = styled(Paragraph)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FullText = styled(Paragraph)``;

export const ToggleShrinkBtn = styled.span`
  display: inline-block;
  margin-top: 6px;
  color: ${({ theme }) => theme.accentColor};
  cursor: pointer;
`;
