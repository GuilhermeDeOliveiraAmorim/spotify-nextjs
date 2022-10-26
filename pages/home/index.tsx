import { NextPage } from "next";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Page from "../../components/page";
import Ranking from "../../components/ranking";

const Home: NextPage = () => {

    return (
        <div className="flex flex-col bg-spotify-green overflow-auto">
            <Header />
            <main className="flex flex-col sm:flex-row lg:flex-row gap-2 p-2">
                <Ranking
                    period="day"
                    title="Day Ranking"
                    urlImg="https://mosaic.scdn.co/300/ab67616d0000b27338e1ac1f00e0eada50b0e5b6ab67616d0000b2735512578259c721cb16808461ab67616d0000b273b944f430d0489ae7c6a1fd02ab67616d0000b273d46dec4689741b1400c3df95"
                />
                <Ranking
                    period="week"
                    title="Week Ranking"
                    urlImg="https://i.scdn.co/image/ab67616d0000b2736442cba70068cdfa0c5169de"
                />
                <Ranking
                    period="month"
                    title="Month Ranking"
                    urlImg="https://i.scdn.co/image/ab67706c0000bebb667524ffe97221bd9dd9cb5b"
                />
            </main>
            <Footer />
        </div>
    )
}

export default Home;