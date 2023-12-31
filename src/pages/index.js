import Heroes from "@/components/Heroes";
import Image from "next/image";
import { Card } from "semantic-ui-react";

export default function Home() {
  return (
    <main
      className={`flex h-auto flex-col items-center justify-between p-24 text-center`}
    >
      <h1 className="text-4xl text-center">
        <u className=" decoration-red-600">Marvel Characters</u>
      </h1>
      <p className="text-2xl text-center">
        Search for a character to see more details or scroll down to see some.
      </p>
      <Card>
        <Card.Header>I know it&apos;s DC but it looks nice</Card.Header>
        <Card.Content>
          <Image
            src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Marvel Characters"
            width={700}
            height={500}
          />
        </Card.Content>
      </Card>
      <Heroes />
    </main>
  );
}
