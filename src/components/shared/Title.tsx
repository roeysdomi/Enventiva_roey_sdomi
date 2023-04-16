import React from 'react';

export const Title = ({ size, text, color }: { size: string; text: string; color: string }) => {
    return (
      <div className={`${size} ${color} flex justify-center  align-middle text-center opacity-[1]`} style={{ color }}>
        {text}
      </div>
    );
  };
  