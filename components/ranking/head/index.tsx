import React from "react";
import { IHead } from "./IHead";

function Head(props: IHead) {

    const { period, title, urlImg } = props;

    return (
        <div id={`head-list-${period}`} className="flex gap-6">
            <img src={urlImg} className="h-32 rounded-lg" />
            <div className="flex justify-between flex-col w-full">
                <h2 className="text-text-base text-3xl">
                    {title}
                </h2>
                <div className="flex justify-between">
                    <span className="text-text-base">
                        23/10/2022
                    </span>
                    <span className="text-text-base">
                        Played: 13
                    </span>
                </div>
            </div>
        </div>
    )
}

export { Head };