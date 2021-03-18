import React from 'react';
import spinner from './spinner.svg';
import './spinner.css';

const Spinner = () => {
    return (
        <img src={spinner} alt="Loading..." className="spinner"/>
        // <div className="loadingio-spinner-spin-ex4de019zc5">
        //     <div className="ldio-tp4pirdj1tc"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        // </div>
    );
};

export default Spinner;