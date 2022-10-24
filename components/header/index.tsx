import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center bg-background-base p-2 text-text-base">
      <h1>My Song Ranking</h1>
      <div className="flex justify-between items-center gap-6">
        <h2 className="hidden sm:block lg:block">Guilherme Amorim</h2>
        <img
          src="https://avatars.githubusercontent.com/u/5620529?v=4"
          className="rounded-full h-10"
        />
      </div>
    </header>
  );
}

export { Header };
