import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import remoteAPI from "../API/remoteAPI";
import BullshitCard from "../Components/BullshitCard";
import NewBullshitCard from "../Components/NewBullshitCard";
import BullshitCardBase from '../Components/BullshitCardBase';

const HomeView = () => {
    const [bullshits, setBullshits] = useState([]);
    const [stats, setStats] = useState(null);

    const fetchBullshits = async (offset) => {
        offset = offset || bullshits.length;
        try {
            let response = await remoteAPI.getBullshits(offset, "");
            if (offset === 0) setBullshits(response.data);
            else setBullshits([...bullshits, ...response.data]);
        } catch {}
    };

    const fetchStats = () => remoteAPI.getStats().then((response) => setStats(response.data));

    useEffect(() => {
        fetchBullshits(0);
        fetchStats();
    }, []);

    return (
        <div className="flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-bold text-xl">إحصائيات</p>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                    {stats &&
                        Object.keys(stats).map((x) => (
                            <>
                                <p>
                                    {x}: {stats[x]}
                                </p>
                            </>
                        ))}
                </div>
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                <NewBullshitCard />
                {bullshits &&
                    bullshits.map((bullshit) => (
                        <Link className="h-full" to={{ pathname: `/${bullshit.id}`, data: bullshit }} key={bullshit.id}>
                            <BullshitCard bullshit={bullshit} />
                        </Link>
                    ))}
                <BullshitCardBase className="h-full">
                    <div className="flex flex-col justify-center h-full" onClick={() => fetchBullshits(null)}>
                        <p className="font-bold text-6xl text-gray-800 text-center">بعد</p>
                    </div>
                </BullshitCardBase>
            </div>
        </div>
    );
};

export default HomeView;
