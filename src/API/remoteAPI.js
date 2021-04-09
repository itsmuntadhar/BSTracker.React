import axios from "axios";

const root = process.env.REACT_APP_BSTRACKER_API_ROOT;

const getAxiosInstance = () => {
    let instance = axios.create({
        baseURL: root,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return instance;
};

const axiosInstance = getAxiosInstance();

const remoteAPI = {
    getBullshits: (offset, name) => axiosInstance.get(`/bullshits/?offset=${offset}&name=${name}`),
    getBullshit: (id) => axiosInstance.get(`/bullshits/${id}`),
    addBullshit: (data) => axiosInstance.post("/bullshits", data),
};

export default remoteAPI;
