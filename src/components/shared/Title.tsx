import React from 'react';

export const Title = ({ size, text, color ,visibility}: { size?: string; text: string; color: string,visibility?:string }) => {
    return (
      <div className={`${size} ${color} ${visibility} flex justify-center  align-middle text-center opacity-[1]`} style={{ color }}>
        {text}
      </div>
    );
  };
  