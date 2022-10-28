<<<<<<< HEAD
import "/Card.css";
import React from "react";

export default (props) => {
    return <div>
        <div>Contéudo</div>
        <div>{props.titulo}</div>
    </div>;


=======
import "./Card.css"
import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className="Card" style={cardStyle}>

            <div className="Title">{ props.titulo }</div>
            <div className="Content">
                {props.children}
                </div>
            
        </div>
    );
>>>>>>> 05ddfeb8067f0bdeccfffe894b18ae3f1ded8c2d
};