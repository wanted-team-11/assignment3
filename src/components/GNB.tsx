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
            <div>FILMSπΏ</div>
          </S.Home>
          <S.Button onClick={() => moveToListPage("now-playing")}>
            νμ¬ μμ μν
          </S.Button>
          <S.Button onClick={() => moveToListPage("upcoming")}>
            κ°λ΄ μμ  μν
          </S.Button>
          <S.Button onClick={() => moveToListPage("top-rated")}>
            λ³μ  λμ μν
          </S.Button>
        </S.LeftWrap>
        <S.RightWrap>
          <S.Search>
            <BsSearch />
          </S.Search>
          <S.Input
            placeholder="μν μ λͺ©μ κ²μν΄λ³΄μΈμ."
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
