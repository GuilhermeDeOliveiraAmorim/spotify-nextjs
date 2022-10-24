import { IList } from "./IList";
import { Item } from "./item";

function List(props: IList) {
  const { period } = props;

  const tracks = [
    {
      id: 1,
      ranking: 1,
      itemImgUrl:
        "https://i.scdn.co/image/ab67616d00004851b7f847187cfc3e5050420278",
      title: "Ontem ao Luar",
      artist: "Rubel",
      album: "Ontem ao Luar",
      time: "04:23",
      spotifyUrl: "string",
    },
    {
      id: 2,
      ranking: 2,
      itemImgUrl:
        "https://i.scdn.co/image/ab67616d00004851eabb288490733f35809d5a3e",
      title: "Ontem ao Luar",
      artist: "Moons",
      album: "Moons",
      time: "04:23",
      spotifyUrl: "string",
    },
    {
      id: 3,
      ranking: 3,
      itemImgUrl:
        "https://i.scdn.co/image/ab67616d000048515abd8a958fb9197ce5ff46c0",
      title: "Be Here Now",
      artist: "Gustavo Bertoni",
      album: "Where Light Pours In",
      time: "04:23",
      spotifyUrl: "string",
    },
    {
      id: 4,
      ranking: 4,
      itemImgUrl:
        "https://i.scdn.co/image/ab67616d000048510f79af98814bfacf5a01ca2b",
      title: "Pra Sonhar",
      artist: "Marcelo Jeneci, Laura Lavieri",
      album: "Feito Pra Acabar",
      time: "04:23",
      spotifyUrl: "string",
    },
    {
      id: 5,
      ranking: 5,
      itemImgUrl:
        "https://i.scdn.co/image/ab67616d00004851e714d4653a51c67917a73b19",
      title: "A Voz da Tela",
      artist: "Oswaldo Montenegro",
      album: "A Voz da Tela",
      time: "04:23",
      spotifyUrl: "string",
    },
  ];

  return (
    <div id={`list-${period}`} className="gap-2">
      <ul className="gap-2">
        {tracks.map((track) => (
          <Item
            key={track.id}
            title={track.title}
            itemImgUrl={track.itemImgUrl}
            ranking={track.ranking}
            artist={track.artist}
            album={track.album}
            time={track.time}
            spotifyUrl={track.spotifyUrl}
          />
        ))}
      </ul>
    </div>
  );
}

export { List };
