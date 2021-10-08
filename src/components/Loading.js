import React from "react";
import Lottie from "react-lottie";
import loadingAnimationData from "../animations/load-spinner.json";
import successAnimationData from "../animations/success.json";
import failureAnimationData from "../animations/failure.json";

const Loading = ({ width, height, animationName }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: null,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (animationName === "loading") {
    defaultOptions.animationData = loadingAnimationData;
  } else if (animationName === "success") {
    defaultOptions.animationData = successAnimationData;
  } else if (animationName === "failure") {
    defaultOptions.animationData = failureAnimationData;
  }

  return (
    <div>
      <Lottie options={defaultOptions} width={width} height={height} />
    </div>
  );
};

export default Loading;
