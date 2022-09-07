import React from "react";
import * as S from "./styles/VideoComponent.styled";

const VideoComponent = ({ videoId }: { videoId: string | undefined }) => {
  return (
    <S.Wrapper>
      {videoId && (
        <iframe
          width="1000"
          height="562"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
        ></iframe>
      )}
    </S.Wrapper>
  );
};

export default VideoComponent;
