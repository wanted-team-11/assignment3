import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const TopButton = () => {
  const handleScroll = () => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState(false);
  const prevYPos = useRef(0);
  useEffect(() => {
    const handleButtonVisibilaty = () => {
      setIsVisible(window.scrollY !== 0);
      prevYPos.current = window.scrollY;
    };
    window.addEventListener("scroll", handleButtonVisibilaty);
    return () => {
      window.removeEventListener("scroll", handleButtonVisibilaty);
    };
  }, []);

  return (
    <PositionContainer visible={isVisible}>
      <TopBtn onClick={handleScroll}>
        <FaChevronUp />
      </TopBtn>
    </PositionContainer>
  );
};

export default TopButton;

const PositionContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 100%;
  top: 90px;
  z-index: 1000;

  opacity: ${({ visible }) => (visible ? 1 : 0)};

  // 데스크탑
  @media screen and (min-width: 480px) {
    right: 5%;
  }
`;

const TopBtn = styled.button.attrs(() => ({
  type: "button",
  title: "맨 위로 가기",
  "aria-label": "맨 위로 가기",
}))`
  position: absolute;
  top: 0;
  font-size: 30px;
  right: 0;
  border: none;
  color: white;
  background-color: #1c1d1f;
  border-radius: 15px;
  width: 70px;
  height: 70px;

  // 아이콘 스타일링
`;
