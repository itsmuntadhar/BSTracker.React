import React from "react";
import Emoji from "../Emojis";

const BullshitCardBase = (props) => {
    return (
        <div className={`relative bg-yellow-100 rounded shadow-lg hover:shadow-xl cursor-pointer h-full p-3 ${props.className || ""}`}>
            <div className="absolute bottom-2 left-2 opacity-40">
                <Emoji name="pile-of-poo" />
            </div>
            {props.children}
        </div>
    );
};

export default BullshitCardBase;
