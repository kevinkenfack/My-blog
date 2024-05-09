import React from 'react';

export default function Banner(): JSX.Element {
  return (
    <div className="flex justify-center space-x-1 bg-zinc-100 p-2 text-xs dark:bg-zinc-900 md:text-sm lg:text-base">
      <span className="text-zinc-800 dark:text-zinc-200">
        Vous pouvez visiter mon portfolio
      </span>
      <a
        href="https://kevinkenfack.com"
        target="_blank"
        className="text-green-500 underline dark:text-green-300"
      >
        ici
      </a>
      .
    </div>
  );
}
