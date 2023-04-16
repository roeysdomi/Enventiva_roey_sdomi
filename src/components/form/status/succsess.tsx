
import React from "react";

export const StatusSuccess = ({ convertedAmount, isLoading }: { convertedAmount: number; isLoading: boolean }) => {
    return (
        <ConvertedAmount isLoading={isLoading} convertedAmount={convertedAmount} />
    );
  };
  
  export const ConvertedAmount = ({ convertedAmount, isLoading }: { convertedAmount: number; isLoading: boolean }) => {
    return (
      <div className="con-convertedAmount w-full flex-center-center">
        <div data-testid="amount-result" className="convertedAmount text-blue-800 m-4 p-4 text-4xl  flex justify-center items-center rounded-md bg-blue-400 w-full" onClick={() => {}}>
          {isLoading ? "loading" : convertedAmount}
        </div>
      </div>
    );
  };
  