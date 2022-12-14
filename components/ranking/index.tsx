import Link from "next/link";
import Head from "./head";
import IRanking from "../../interfaces/IRanking";
import List from "./list";

export default function Ranking(props: IRanking) {
	const { period, title, urlImg } = props;

	return (
		<div
			id={period}
			className="flex-1 flex-col justify-between w-full bg-background-highlight rounded-xl p-1"
		>
			<Head period={period} title={title} urlImg={urlImg} />
			<hr className="text-text-subdued text-sm mt-2 mb-2" />
			<List period={period} />
			<div id={`show-more-${period}`} className="mt-2">
				<Link href={period}>
					<button className="bg-spotify-green hover:bg-spotify-green-bright rounded-bl-lg rounded-br-lg w-full p-2">
						Ver mais
					</button>
				</Link>
			</div>
		</div>
	);
}
