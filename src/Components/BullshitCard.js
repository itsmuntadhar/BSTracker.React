import React from "react";
import BullshitCardBase from "./BullshitCardBase";

const BullshitCard = ({ bullshit, ...props }) => {
    return (
        <BullshitCardBase>
            <div className="flex flex-col h-full">
                <p className="flex-1 font-semibold text-lg text-gray-700">"{bullshit.text}"</p>
                <p className="mt-4">
                    <span className="font-bold text-gray-600">-{bullshit.whoSaidIt}</span>
                    <br />
                    <span className="font-bold text-sm text-gray-500">{new Date(bullshit.createdAt).toLocaleString()}</span>
                </p>
            </div>
        </BullshitCardBase>
    );
};

export default BullshitCard;
