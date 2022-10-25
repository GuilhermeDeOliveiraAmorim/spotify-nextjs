import { MdAudiotrack } from "react-icons/md";
import IItem from "../../../../../interfaces/IItem";

export default function Item(props: IItem) {
	const { artist, title, album, itemImgUrl, ranking, time, spotifyUrl } = props;

	return (
		<li className="flex items-center w-full hover:bg-background-tinted-base p-1 gap-1 sm:p-2 sm:gap-2 lg:p-2 lg:gap-2 rounded-lg">
			<span className="text-text-subdued">{ranking}</span>
			<img src={itemImgUrl} className="rounded-lg" />
			<div className="flex flex-1 flex-col justify-between h-full">
				<span className="text-text-base text-sm sm:text-base lg:text-base">{title}</span>
				<span className="text-text-subdued text-sm sm:text-base lg:text-base">{artist}</span>
			</div>
			<span className="flex-1 text-text-base text-right text-sm sm:text-base lg:text-base">{album}</span>
			<span className="flex-1 text-text-base text-center text-sm sm:text-base lg:text-base">{time}</span>
			<a
				href={spotifyUrl}
				target="_blank"
				rel="noreferrer"
				className="text-text-base text-right"
			>
				<MdAudiotrack />
			</a>
		</li>
	);
}
