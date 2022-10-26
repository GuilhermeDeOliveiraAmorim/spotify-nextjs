import axios from "axios";
import { useEffect, useState } from "react";
import IList from "../../../interfaces/IList";
import Item from "./item";

export default function List(props: IList) {
	const { period } = props;

	const OAUTH_TOKEN = "BQD_5QP9D8-qK-zxOeHpxsfUP82aJxzMdfxomVE70UcN0ia9hbrxNBx0e1KvWESWURFcxPXfb3DpC5URfi-0qEwZHRiKXlCUghgxtv4nW4lfrVEF7hKgpVGuO3h-FQnV76toy-gEQDrgVypcX7ylL0hn_xPkZNYJG399Pd3fFBgCb4CUeW6N";

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
		<div id={`list-${period}`} className="gap-2">
			<ul className="gap-2">
				{tracks.map((track) => (
					<Item
						id={track.id}
						key={track.id}
						name={track.name}
						album={track.album.images[2].url}
						albumImg={track.album.images[2].url}
						albumName={track.album.name}
						artists={track.artists}
						duration_ms={track.duration_ms}
						external_urls={track.external_urls.spotify}
					/>
				))}
			</ul>
		</div>
	);
}
