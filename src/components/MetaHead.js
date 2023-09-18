import React from "react";
import Head from "next/head";

function MetaHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.png" />
      <meta
        name="description"
        content="Jasa Virtual Reality & Augmented Reality"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta
        property="og:title"
        content="Jasa Virtual Reality & Augmented Reality by smarteye.id"
      />
      <meta property="og:url" content={props.url} />
      <meta
        property="og:description"
        content="Wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality."
      />
      <meta property="og:image" content="/images/homepage.png" />
      <meta property="og:type" content="article" />
      <meta
        name="twitter:card"
        content="Wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality."
      />
      <meta name="twitter:site" content="smarteye.id" />
      <meta name="twitter:creator" content="smarteye.id" />
      <meta property="whatsapp:number" content="smarteye.id"/>
      <meta property="instagram:username" content="smarteyeid"/>
      <meta property="discord:server" content="smarteye.id" />
    </Head>
  );
}

export default MetaHead;
