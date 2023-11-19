import { useRouter } from "next/router";
import { Card, Image } from "semantic-ui-react";
import crypto from "crypto";
import React from "react";

export default function Heroes() {
  const router = useRouter();
  const [info, setInfo] = React.useState({ loading: true });
  // let publicKey = '6e96d23a55c7bd5016fe3047c2dcf46c';

  React.useEffect(() => {
    async function loadCharacter() {
      // my keys
      const publicKey = "6e96d23a55c7bd5016fe3047c2dcf46c";
      const privateKey = "63a02191a90950370eda7f76941bf0bfc42ba64e";

      // Create a timestamp
      const ts = new Date().getTime();

      // Create the hash
      const preHash = ts + privateKey + publicKey;
      const hash = crypto.createHash("md5").update(preHash).digest("hex");

      // console.log(router.query.name);

      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${router.query.name}&apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=1`
      );

      const data = await res.json();
      setInfo(data.data.results[0]);
    }
    loadCharacter();
  }, [router.query.name]);
  return (
    <>
    <div className=" sm:p-5 my-10 ">
      <div class="ui three column grid">
        <div class="column">
          <div class="ui segment">
            <Image
              src={
                info && info.thumbnail
                  ? info.thumbnail.path + "." + info.thumbnail.extension
                  : "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image matching the search term"
            />
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <Image
              src={
                info && info.thumbnail
                  ? info.thumbnail.path + "." + info.thumbnail.extension
                  : "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image matching the search term"
            />
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <Image
              src={
                info && info.thumbnail
                  ? info.thumbnail.path + "." + info.thumbnail.extension
                  : "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image matching the search term"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
