import React from "react";

export const Button = (props) => {
    return (
        <button className="search-button" onClick={props.onClick}>{props.value}</button>
    )
}