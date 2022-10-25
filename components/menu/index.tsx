import Link from "next/link";
import React from "react";
import IMenu from "../../interfaces/IMenu";

export default function Menu(props: IMenu) {

    const { menuItens } = props;

    return (
        <div className="flex gap-2">
            {menuItens.map(item =>
                <Link href={`/${item.path}`} key={item.name}>
                    <button className="text-text-base bg-background-tinted-highlight p-2 rounded-lg hover:bg-text-subdued hover:text-background-base">
                        {item.name}
                    </button>
                </Link>
            )}
        </div>
    )
}