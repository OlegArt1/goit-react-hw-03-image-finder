import React, { Component } from "react";
import { Dna, Vortex } from 'react-loader-spinner';
import Css from "./Loader.module.css";

export const Loader = () =>
{
    return (
        <div className={Css.loader}>
            <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper"/>
            {/*<Vortex visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperClass="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/>*/}
        </div>
    );
}