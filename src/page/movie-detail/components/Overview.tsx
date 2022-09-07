import { useState } from "react";
import * as S from "../style/OverView.styled";

const Overview = ({ children }: { children?: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const collapse = () => {
    setIsCollapsed(true);
  };

  const expand = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      {isCollapsed ? (
        <>
          <S.Ellipsis>{children}</S.Ellipsis>
          <S.ToggleShrinkBtn onClick={expand}>더 보기</S.ToggleShrinkBtn>
        </>
      ) : (
        <>
          <S.FullText>{children}</S.FullText>
          <S.ToggleShrinkBtn onClick={collapse}>간략히</S.ToggleShrinkBtn>
        </>
      )}
    </>
  );
};

export default Overview;
