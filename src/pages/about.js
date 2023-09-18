import React from "react";
import Aboutpages from "./about/aboutpages";
import MetaHead from "@/components/MetaHead";

function about() {
  return (
    <>
    <MetaHead
      title="About | smarteye.id"
    />
      <div>
        <Aboutpages />
      </div>
    </>
  );
}

export default about;
