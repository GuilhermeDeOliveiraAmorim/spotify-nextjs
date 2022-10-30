import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Home: NextPage = () => {

    const [code, setCode] = useState<string | null>();

    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        const code = params.get("code");
        setCode(code);
    }, [code]);

    console.log(code);

    return (
        <div className="flex flex-col h-screen justify-between bg-spotify-green overflow-auto">
            <Header />
            <main className="flex flex-col sm:flex-row lg:flex-row gap-2 p-2">
                <h1>Home</h1>
            </main>
            <Footer />
        </div>
    )
}

export default Home;