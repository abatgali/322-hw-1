import { Cormorant } from "next/font/google";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { Menu, Input, Button } from "semantic-ui-react";
import Link from "next/link";

const font = Cormorant({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${font.className}`}>
        <Menu>
          <Menu.Item as={Link} href='/'>Home</Menu.Item>
          <Menu.Item>
            <Input placeholder='Search...' />
            <Button as={Link} href='/characters/'>Search</Button>
          </Menu.Item>
        </Menu>
        <Component {...pageProps} />
      </main>
    </>
  );
}
