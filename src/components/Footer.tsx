import styled from "styled-components";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../page/assets/원티드로고.png";
const Footer = () => {
  const ClicktoGithub = () => {
    window.location.href = "https://github.com/wanted-team-11/assignment3";
  };

  const ClickToWanted = () => {
    window.location.href = "https://www.wanted.co.kr/";
  };

  return (
    <FooterContainer>
      <FooterContentBox>
        <FooterContentList>
          <FooterContentListItem>서비스 이용약관</FooterContentListItem>
          <FooterContentListItem>개인정보 처리방침</FooterContentListItem>
          <FooterContentListItem>회사 안내</FooterContentListItem>
        </FooterContentList>
        <FooterContentList>
          <FooterContentDetail>
            고객센터 | wanted11@wanted.wanted, 02-1234-1234
          </FooterContentDetail>
          <FooterContentDetail>
            광고문의 | wanted11_ad@wanted.wanted
          </FooterContentDetail>
          <FooterContentDetail>
            제휴 및 대외 협력 | wanted11_team@wanted.wanted
          </FooterContentDetail>
        </FooterContentList>
        <FooterContentList>
          <FooterContentDetail>
            <FooterContentList>
              <FooterContentListItem>주식회사 원티드</FooterContentListItem>
              <FooterContentListItem>대표 원티드</FooterContentListItem>
              <FooterContentListItem>
                서울특별시 서초구 강남대로 123
              </FooterContentListItem>
            </FooterContentList>
          </FooterContentDetail>
          <FooterContentDetail>
            사업자 등록 번호 211-12-34567
          </FooterContentDetail>
          <FooterContentDetail>
            © 2022 by Wanted, Inc. All rights reserved.
          </FooterContentDetail>
        </FooterContentList>
      </FooterContentBox>
      <FooterImgContainer>
        <FooterImgBox>
          <ImgBox>
            <FaGithub onClick={ClicktoGithub} />
          </ImgBox>
          <ImgBox>
            <FaFacebook onClick={ClicktoGithub} />
          </ImgBox>
          <ImgBox>
            <FaInstagram onClick={ClicktoGithub} />
          </ImgBox>
          <FooterImg src={logo} onClick={ClickToWanted} />
        </FooterImgBox>
      </FooterImgContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1c1d1f;
  height: 400px;
  padding: 35px 200px;
`;

const FooterContentBox = styled.div`
  background-color: #1c1d1f;
  width: 530px;
  height: 100%;
`;

const FooterContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #a5a5a7;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const FooterContentListItem = styled.li`
  vertical-align: top;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;
`;

const FooterContentDetail = styled.li``;

const FooterImgContainer = styled.div`
  color: white;
  width: 400px;
  height: 100%;
`;

const FooterImgBox = styled.div`
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgBox = styled.div`
  margin-right: 25px;
  :hover {
    color: ${(props) => props.theme.grayTextColor};
  }
  cursor: pointer;
`;

const FooterImg = styled.img`
  margin-left: 30px;
  width: 200px;
  height: 40px;
  cursor: pointer;
`;
