
import React from "react";

export const StatusError = ({ errorApi, errorInput }: { errorApi: string|null; errorInput: string|null }) => {
    const errorApiMessage="Oops! Something went wrong. Please try again later"
    const errorInputMessage="Please choose number in this format *#.## and make sure to choose currency"
    return (
    <div className="con-convertedAmount w-full flex-center-center">
      <div data-testid="amount-result" className="convertedAmount text-red-800 m-4 p-4 text-lg  flex justify-center items-center rounded-md bg-red-400 w-full" onClick={() => {}}>
        {errorApi ? errorApiMessage: errorInputMessage}
      </div>
    </div>
  );
};
