import React from 'react';
import loading from '../../assets/loading/Rainbow.gif';

export const Loading = () => {
    return (
        <div className="con-loading flex-center-center w-h-full">
        <img src={loading} alt="loading" />
        </div>
    );
}