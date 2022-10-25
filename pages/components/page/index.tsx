import { Menu } from "../menu";
import { IPage } from "./IPage";
import { Table } from "./table";

function Page(props: IPage) {
	const { pageTitle } = props;

	const menuItens = [
		{ path: "day", name: "Day" },
		{ path: "week", name: "Week" },
		{ path: "month", name: "Month" },
		{ path: "", name: "Home" }
	]

	return (
		<div className="flex flex-col h-screen gap-2">
			<div className="flex bg-background-base justify-between items-center w-full p-2">
				<h2 className="text-text-base font-black text-xl">{pageTitle}</h2>
				<Menu menuItens={menuItens} />
			</div>
			<div className="flex justify-start w-full">
				<Table />
			</div>
		</div>
	);
}

export { Page };
