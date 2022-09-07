import { BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

const MovieRate = ({ rate }: { rate: number }) => {
  const color = "#ffd400";

  return (
    <>
      {Array(Math.floor(rate / 2))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="30" color={color} />
        ))}
      {(rate / 2) % 1 !== 0 && <BsStarHalf size="30" color={color} />}
      {Array(Math.floor(5 - rate / 2))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="30" color="#E3E3E3" />
        ))}
    </>
  );
};

export default MovieRate;
