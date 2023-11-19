import { Cormorant } from "next/font/google";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { Menu, Input, Button } from "semantic-ui-react";
import Link from "next/link";
import React from "react";

const font = Cormorant({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [characterSearch, setCharacterSearch] = React.useState("");

  function updateSearch(e, { value }) {
    setCharacterSearch(value);
  }
  return (
    <>
      <main className={`${font.className}`}>
        <Menu>
          <Menu.Item as={Link} href='/'>Home</Menu.Item>
          <Menu.Item>
            <Input placeholder='Eg:Wolverine...' onChange={updateSearch} name='characterSearch' value={characterSearch}/>
            <Button as={Link} href={`/character/${characterSearch}`}>Search</Button>
          </Menu.Item>
        </Menu>
        <Component {...pageProps} />
      </main>
    </>
  );
}
