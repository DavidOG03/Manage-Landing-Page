import React from "react";

export const Card = ({
    id,
    head,
    text
}) => {
    return(
        <div className="about--card">
            <div className="about--card-head">
                { id && <span>{id}</span> }{head && <h3>{head}</h3>}
            </div>
            <div className="about--card-text">
                {text && <p>{text}</p>}
            </div>
        </div>
    );
}