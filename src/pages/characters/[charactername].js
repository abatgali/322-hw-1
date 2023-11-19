import React from "react";
import { useRouter } from "next/router";

import crypto from "crypto";

export default function CharacterDetails() {
  const [info, setInfo] = React.useState({ loading: true });
  const router = useRouter();
  // let publicKey = '6e96d23a55c7bd5016fe3047c2dcf46c';

  React.useEffect(() => {
    async function loadCharacter() {
      // Your keys
      const publicKey = "6e96d23a55c7bd5016fe3047c2dcf46c";
      const privateKey = "63a02191a90950370eda7f76941bf0bfc42ba64e";

      // Create a timestamp
      const ts = new Date().getTime();

      // Create the hash
      const preHash = ts + privateKey + publicKey;
      const hash = crypto.createHash("md5").update(preHash).digest("hex");

      console.log(router.query)

      // Now you can use `ts` and `hash` in your API request
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?name=${router.query.name}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
      );

      const data = await res.json();
      setInfo(data);
    }
    loadCharacter();
  }, [router.query.name]);
  console.log(info);
  return (
    <div className="text-center p-24 ">
      <h1> Name: {router.query.name}</h1>
    </div>
  );
}
