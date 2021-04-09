import remoteAPI from "../API/remoteAPI";
import React, { useEffect, useState } from "react";
import BullshitCard from "../Components/BullshitCard";
import NewBullshitCard from "../Components/NewBullshitCard";
import { Link } from "react-router-dom";

const HomeView = () => {
    const [bullshits, setBullshits] = useState([]);

    const fetchBullshits = async (offset) => {
        offset = offset || 0;
        try {
            const response = await remoteAPI.getBullshits(offset, "");
            return response.data;
        } catch (e) {
            return [];
        }
    };

    useEffect(() => {
        fetchBullshits(0).then((bs) => setBullshits(bs));
    }, []);

    return (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            <NewBullshitCard />
            {bullshits &&
                bullshits.map((bullshit) => (
                    <Link to={{ pathname: `/${bullshit.id}`, data: bullshit }} key={bullshit.id}>
                        <BullshitCard bullshit={bullshit} />
                    </Link>
                ))}
        </div>
    );
};

export default HomeView;
