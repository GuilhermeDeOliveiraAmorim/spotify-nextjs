import { NextPage } from "next";
import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Page } from "../components/page";
import { IWeek } from "./IWeek";

const Week: NextPage = (props: IWeek) => {
    const { } = props;

    return (
        <div className="flex flex-col bg-spotify-green overflow-auto">
            <Header />
            <main className="gap-2 p-2">
                <Page pageTitle="Week" />
            </main>
            <Footer />
        </div>
    )
}

export default Week;