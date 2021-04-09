import React, { useState } from "react";
import remoteAPI from "../API/remoteAPI";

const NewBullshitView = () => {
    const [text, setText] = useState("");
    const [note, setNote] = useState("");
    const [whoSaidIt, setWhoSaidIt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        let data = {
            text,
            note,
            whoSaidIt,
        };

        setIsLoading(true);
        remoteAPI.addBullshit(data).then(() => {
            setText("");
            setNote("");
            setWhoSaidIt("");
            setIsLoading(false);
        });

        return false;
    };

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col shadow-lg border border-gray-200 rounded-lg px-4 py-6 bg-gray-100">
                <label htmlFor="text" className="mt-3 font-bold text-gray-700 text-lg">
                    التفاهة
                </label>
                <textarea
                    name="text"
                    className="px-4 py-2 rounded text-gray-700 font-bold"
                    placeholder="اكتب اكتب هي خربانة خربانة"
                    rows={4}
                    onChange={(e) => setText(e.target.value)}
                    required={true}
                    value={text}></textarea>
                <label htmlFor="note" className="mt-3 font-bold text-gray-700 text-lg">
                    ملاحظة او الموقف
                </label>
                <textarea
                    name="note"
                    className="px-4 py-2 rounded text-gray-700 font-bold"
                    placeholder="شنو صار؟ شنو جان قبلها؟"
                    rows={6}
                    onChange={(e) => setNote(e.target.value)}
                    value={note}></textarea>
                <label htmlFor="who-said-it" className="mt-3 font-bold text-gray-700 text-lg">
                    منو گالها؟
                </label>
                <input
                    type="text"
                    className="px-4 py-2 rounded text-gray-700 font-bold"
                    name="who-said-it"
                    value={whoSaidIt}
                    onChange={(e) => setWhoSaidIt(e.target.value)}
                    required={true}
                    placeholder="منو صار تافه؟"
                />
                {isLoading === false && (
                    <input
                        type="submit"
                        className="px-4 py-2 mt-3 rounded bg-green-300 border border-green-400 text-green-800 cursor-pointer hover:bg-green-400 font-bold"
                        value="حفظ"
                    />
                )}
            </div>
        </form>
    );
};

export default NewBullshitView;
