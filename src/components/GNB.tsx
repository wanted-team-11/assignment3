import * as S from "./styles/GNB.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";

const GNB = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const moveToListPage = (page: string) => {
    navigate(`/${page}`);
  };

  const moveToHome = () => {
    navigate("/");
  };

  const [inputText, setInputText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputText(value);
  };

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (e?.key === "Enter") {
      setInputText("");
      navigate("/search-result?query=" + inputText);
    }
  };

  return (
    <>
      <S.GNBContainer>
        <S.LeftWrap>
          <S.Home onClick={moveToHome}>
            <div>TEAM-11</div>
            <div>FILMS🍿</div>
          </S.Home>
          <S.Button onClick={() => moveToListPage("now-playing")}>
            현재 상영 영화
          </S.Button>
          <S.Button onClick={() => moveToListPage("upcoming")}>
            개봉 예정 영화
          </S.Button>
          <S.Button onClick={() => moveToListPage("top-rated")}>
            별점 높은 영화
          </S.Button>
        </S.LeftWrap>
        <S.RightWrap>
          <S.Search>
            <BsSearch />
          </S.Search>
          <S.Input
            placeholder="영화 제목을 검색해보세요."
            value={inputText}
            onChange={handleInput}
            onKeyPress={handleSearch}
          />
        </S.RightWrap>
      </S.GNBContainer>
      <S.Padding />
    </>
  );
};

export default GNB;
