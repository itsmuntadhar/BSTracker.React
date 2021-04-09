import React from "react";
import BullshitCardBase from "./BullshitCardBase";

const BullshitCard = ({ bullshit, ...props }) => {
    return (
        <BullshitCardBase>
            <p>
                <span className="font-semibold text-lg text-gray-700">"{bullshit.text}"</span>
                <br />
                <br />
                <span className="font-bold text-gray-600">-{bullshit.whoSaidIt}</span>
                <br />
                <span className="font-bold text-sm text-gray-500">{new Date(bullshit.createdAt).toLocaleString()}</span>
            </p>
        </BullshitCardBase>
    );
};

export default BullshitCard;
