import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Ranking from '../components/ranking';

const Home: NextPage = () => {
	const OAUTH_TOKEN = "BQDvaC3HLcoiGu5BjIAbqpPt_NGaT2fzGvImhxC9CgyNzTwm4N1jdisVPnuNoBPLJrllKlZ_AcY6mwBg6JxpivNXNOQx-F-ztBv0p13leQx34v8tWgTso2TEKfS2vrqYjnYlWWIhTOPWcCNSqEWtgcp2wVslIqn1mpOa8PHeoD50dlzECArX";

	const [tracks, setTracks] = useState([]);

	async function getTopTracks() {

		const data = await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=5&offset=5", {
			headers: {
				Authorization: `Bearer ${OAUTH_TOKEN}`
			},
		});

		setTracks(data.data.items);
	};

	useEffect(() => {
		getTopTracks();
	}, [])


	console.log(tracks);

	return (
		<div className="flex flex-col h-screen justify-between bg-spotify-green overflow-auto">
			<Header />
			<main className="flex flex-col sm:flex-row lg:flex-row gap-2 p-2">
				<Ranking
					period="day"
					title="Day Ranking"
					urlImg="https://mosaic.scdn.co/300/ab67616d0000b27338e1ac1f00e0eada50b0e5b6ab67616d0000b2735512578259c721cb16808461ab67616d0000b273b944f430d0489ae7c6a1fd02ab67616d0000b273d46dec4689741b1400c3df95"
				/>
			</main>
			<Footer />
		</div>
	)
}

export default Home;
