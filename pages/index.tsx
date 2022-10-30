import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const Home: NextPage = () => {

	const client_id = "83dc318f5c3c4ca0b4bfb6c7f7333631";
	const response_type = 'code';
	const scope = "user-top-read";
	const redirect_uri = "http://localhost:3000/home";
	const uri_authorize = `https://accounts.spotify.com/authorize?response_type=${response_type}&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;

	function login() {
		location.href = uri_authorize;
	}

	return (
		<div className="flex flex-col h-screen justify-between bg-spotify-green overflow-auto">
			<Header />
			<main className="flex flex-col sm:flex-row lg:flex-row gap-2 p-2">
				<button onClick={() => login()}>Entrar</button>
			</main>
			<Footer />
		</div>
	)
}

export default Home;