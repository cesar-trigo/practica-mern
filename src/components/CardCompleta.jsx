import React from "react";

export default function Card(props) {
    let { image, name, category,description, next,back,hide} = props;
    return (
        <div class="card">
            <div className="title">
                <h2>{category}</h2>
            </div>
            <div className="">
                <img className="image" src={image} alt={name} />
            </div>
            <p><b>{name}</b></p>
            <p>{description}</p>
            <div className="botoms">
                <div className="arrowsDa">
                    <button onClick={next}>next</button>
                </div>
                <div>
                    <button onClick={hide}>to</button>
                </div>
                <div className="arrowsUp">
                    <button onClick={back}>back</button>
                </div>
            </div>
        </div>
    );
}