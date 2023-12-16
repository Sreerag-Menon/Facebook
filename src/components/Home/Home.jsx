import React, { useEffect, useState } from "react";
import Stories from "./Story/Stories";
import Messagecenter from "./Message/Messagecenter";

import Posts from "./Post/Posts";

function Home() {
  return (
    <div className="flex flex-1 p-[50px_160px]   items-center flex-col">
      <Stories />
      <Messagecenter />
      <Posts />
    </div>
  );
}

export default Home;
