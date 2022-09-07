import { Movie } from "../types/movieDetailType";
import * as S from "../style/DetailInfo.styled";

const InfoTable = ({ details }: { details: Movie | undefined }) => {
  if (details === undefined) {
    return <div>loading</div>;
  }
  const {
    release_date,
    production_countries,
    genres,
    runtime,
    original_language,
  } = details;

  const year = new Date(Date.parse(release_date)).getFullYear();

  return (
    <S.InfoList>
      <S.InfoItem>
        <S.Title>제작 연도</S.Title>
        <S.Description>{year}</S.Description>
      </S.InfoItem>
      <S.InfoItem>
        <S.Title>국가</S.Title>
        <S.Description>
          {production_countries.map((country) => (
            <span key={country.name}>{country.name}</span>
          ))}
        </S.Description>
      </S.InfoItem>
      <S.InfoItem>
        <S.Title>장르</S.Title>
        <S.Description>
          {genres.map((genre) => (
            <span key={genre.name}>{genre.name} </span>
          ))}
        </S.Description>
      </S.InfoItem>
      <S.InfoItem>
        <S.Title>상영 시간</S.Title>
        <S.Description>{runtime}분</S.Description>
      </S.InfoItem>
      <S.InfoItem>
        <S.Title>언어</S.Title>
        <S.Description>{original_language}</S.Description>
      </S.InfoItem>
    </S.InfoList>
  );
};

export default InfoTable;
