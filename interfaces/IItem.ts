import IAlbum from "./IAlbum";
import IArtist from "./IArtist";

export default interface IItem {
    album: IAlbum;
    albumName: string;
    albumImg: string;
    artists: IArtist[];
    duration_ms: number;
    external_urls: string;
    id: string;
    name: string;
}
