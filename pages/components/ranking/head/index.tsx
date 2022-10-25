import React from "react";
import IHead from "../../../../interfaces/IHead";

export default function Head(props: IHead) {

    const { period, title, urlImg } = props;

    var myPeriod = "";

    switch (period) {
        case "day":
            myPeriod = new Date().toLocaleString();
            myPeriod = myPeriod.split(" ")[0];
            break;
        case "week":
            var now = new Date();
            now.setDate(now.getDate() - 7);
            myPeriod = now.toDateString();
            myPeriod = myPeriod.toLocaleString();
            myPeriod = new Date(myPeriod).toLocaleString();
            myPeriod = myPeriod.split(" ")[0];
            now = new Date();
            myPeriod = `${myPeriod.split(" ")[0]} - ${now.toLocaleString().split(" ")[0]}`
            break;
        case "month":
            var now = new Date();
            now.setDate(now.getDate() - 30);
            myPeriod = now.toDateString();
            myPeriod = myPeriod.toLocaleString();
            myPeriod = new Date(myPeriod).toLocaleString();
            myPeriod = myPeriod.split(" ")[0];
            now = new Date();
            myPeriod = `${myPeriod.split(" ")[0]} - ${now.toLocaleString().split(" ")[0]}`
            break;
    }

    return (
        <div id={`head-list-${period}`} className="flex gap-6">
            <img src={urlImg} className="h-20 sm:h-32 lg:h-32 rounded-lg" />
            <div className="flex justify-between flex-col w-full">
                <h2 className="text-text-base text-xl sm:text-3xl lg:text-3xl">
                    {title}
                </h2>
                <div className="flex justify-between">
                    <span className="text-text-base text-xs sm:text-sm lg:text-sm">
                        {myPeriod}
                    </span>
                    <span className="text-text-base text-xs sm:text-sm lg:text-sm">
                        Played: 13
                    </span>
                </div>
            </div>
        </div>
    )
}