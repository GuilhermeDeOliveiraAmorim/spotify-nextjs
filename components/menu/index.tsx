import Link from "next/link";
import React from "react";
import { IMenu } from "./IMenu";

function Menu(props: IMenu) {

    const { menuItens } = props;

    return (
        <div className="flex gap-2">
            {menuItens.map(item =>
                <Link href={`/${item.path}`}>
                    <button className="text-text-base bg-background-tinted-highlight p-2 rounded-lg hover:bg-text-subdued">
                        {item.name}
                    </button>
                </Link>
            )}
        </div>
    )
}

export { Menu };