import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <GrayText>Footer</GrayText>
    </div>
  );
};

export default Footer;

const GrayText = styled.span`
  color: ${({ theme }) => theme.grayTextColor};
`;
