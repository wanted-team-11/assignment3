import * as S from "./styles/Poster.styled";
import { useState } from "react";

import Spinner from "../assets/Spinner.gif";

const Poster = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <S.Img
        src={src}
        onLoad={onLoad}
        alt="poster"
        style={{ display: isLoaded ? "inherit" : "none" }}
      />

      {!isLoaded && (
        <S.SpinnerWrapper>
          <S.Spinner src={Spinner} alt="loading image" />
        </S.SpinnerWrapper>
      )}
    </>
  );
};

export default Poster;
