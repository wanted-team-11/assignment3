import styled from "styled-components";

export const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  width: 1000px;
`;

export const MovieVideo = styled.div`
  background-color: #8888b5;
  width: 100%;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  width: 100%;
  background-color: rgb(248, 248, 248);
  padding: 40px;
`;

export const MoviePoster = styled.div`
  background-color: #8888b5;
  margin-left: 0;
  margin-right: auto;
  width: 532px;
  height: 758px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieDescription = styled.div`
  display: inline-block;
  /* margin-right: 180px; */
  gap: 30px;
  width: 40%;
  align-self: flex-start;
  margin-left: 20px;
  border-radius: 4px;
  border-color: #e3e3e3;
  padding: 2em;
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
  background-color: #fff;
  border: 1px solid #aeadb7;
`;

export const MovieRateDesciption = styled.div`
  font-size: 20px;
  b {
    font-size: 40px;
    color: #ec1168;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Rating = styled.span`
  font-size: 26px;
`;

export const Year = styled.span``;

export const GenreContainer = styled.div``;
