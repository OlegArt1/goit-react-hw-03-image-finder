import React from "react";
import { Dna } from 'react-loader-spinner';
import Css from "./Loader.module.css";

export const Loader = () =>
{
    return (
        <div className={Css.loader}>
            <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper"/>
        </div>
    );
}