import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
`;

export const CategoryTitle = styled.div`
  color: #292a32;
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 1260px;
  margin: 0 auto 120px;
  overflow-x: scroll;
  .swiper-button-next {
    width: 50px;
    height: 50px;
    top: 185px;
    opacity: 0.5;
    background-color: white;
    border-radius: 10px;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    top: 185px;
    opacity: 0.5;
    background-color: white;
    border-radius: 10px;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-disabled {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .swiper {
    width: 1260px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #000;
  }
`;
