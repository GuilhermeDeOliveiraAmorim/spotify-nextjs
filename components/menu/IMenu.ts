interface IItemMenu {
    path: string | Element;
    name: string;
}

export interface IMenu {
    menuItens: IItemMenu[];
}
