import remoteAPI from "../API/remoteAPI";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Emoji from "../Emojis";

const BullshitView = (props) => {
    const [bullshit, setBullshit] = useState(props.location.data);
    let params = useParams();
    let history = useHistory();

    const getBullshit = () => {
        remoteAPI
            .getBullshit(params.id)
            .then((response) => {
                setBullshit(response.data);
            })
            .catch(() => history.push("/"));
    };

    useEffect(() => {
        if (!bullshit) getBullshit();
    }, [bullshit]);

    return bullshit ? (
        <div className="relative bg-gray-50 border border-gray-100 rounded shadow-lg p-3" style={{ background: "linear-gradient(0deg, #f4f6f8f5, #e2a462f5)" }}>
            <p className="font-bold text-xl text-gray-700">
                <span className="text-lg text-gray-600">التفاهة</span>
                <br />
                {bullshit.text}
                <br />
                <br />
                <span className="text-lg text-gray-600">الموقف/الملاحظة</span>
                <br />
                {bullshit.note}
                <br />
                <br />
                <span className="text-lg text-gray-600">التافه</span>
                <br />
                {bullshit.whoSaidIt}
                <br />
                <br />
                <span className="text-lg text-gray-600">شوكت؟</span>
                <br />
                {new Date(bullshit.createdAt).toLocaleString()}
                <br />
                <br />
            </p>
            <div className="absolute bottom-2 left-2 opacity-80">
                <Emoji name="pile-of-poo" />
            </div>
        </div>
    ) : <></>;
};

export default BullshitView;
