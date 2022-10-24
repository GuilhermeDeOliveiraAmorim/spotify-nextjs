function Table() {
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
    <div className="flex justify-start w-full">
      <table className="w-full text-text-base">
        <thead className="bg-background-base text-text-base">
          <tr>
            <th className="text-left p-2">Ranking</th>
            <th className="text-left p-2">Cover</th>
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Artist</th>
            <th className="text-left p-2">Album</th>
            <th className="text-left p-2">Time</th>
            <th className="text-left p-2">Ver</th>
          </tr>
        </thead>
        <tbody className="bg-text-subdued">
          {tracks.map((track) => (
            <tr
              className="bg-background-elevated-highlight hover:bg-text-subdued"
              key={track.id}
            >
              <td className="p-2">{track.ranking}</td>
              <td className="p-2">
                <img
                  src={track.itemImgUrl}
                  className="rounded-lg h-10 w-h-10"
                />
              </td>
              <td className="p-2">{track.title}</td>
              <td className="p-2">{track.artist}</td>
              <td className="p-2">{track.album}</td>
              <td className="p-2">{track.time}</td>
              <td className="p-2">
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ir
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
