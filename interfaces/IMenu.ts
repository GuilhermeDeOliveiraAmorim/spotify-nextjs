interface IItemMenu {
    path: string | Element;
    name: string;
}

export default interface IMenu {
    menuItens: IItemMenu[];
}
