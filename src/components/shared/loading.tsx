import React from "react";
import loading from "../../assets/loading/Rainbow.gif";

export const Loading = () => {
  return (
    <div className="wrapper      z-[4] con-form p-6 mb-6 bg-white max-w-[80%] flex-col justify-center rounded-lg ">
      <div className="con-loading flex-center-center w-h-full">
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
};
