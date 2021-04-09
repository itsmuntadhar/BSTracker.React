import React from "react";
import { Link } from "react-router-dom";
import BullshitCardBase from "./BullshitCardBase";

const NewBullshitCard = () => {
    return (
        <Link to="/new">
            <BullshitCardBase className="h-full">
                <p className="font-bold text-6xl text-gray-800 text-center">+</p>
            </BullshitCardBase>
        </Link>
    );
};

export default NewBullshitCard;
