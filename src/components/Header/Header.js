import React from "react";
import classes from "./Header.module.css";

export default function Header(){
    return(
        <div className={classes.headerWrapper}>
            <p>CV Maker: Create professional resumes for free.</p>
        </div>
    );
}