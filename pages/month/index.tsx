import { NextPage } from "next";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Page from "../../components/page";
import IMonth from "../../interfaces/IMonth";

const Month: NextPage = (props: IMonth) => {
    const { } = props;

    return (
        <div className="flex flex-col bg-spotify-green overflow-auto">
            <Header />
            <main className="gap-2 p-2">
                <Page pageTitle="Month" />
            </main>
            <Footer />
        </div>
    )
}

export default Month;