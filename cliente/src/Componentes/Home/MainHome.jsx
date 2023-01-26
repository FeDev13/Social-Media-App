import React from "react";
import AsideRight from "./AsideRight";
import Aside from "./Aside";
import { HomeCenter } from "./HomeCenter";
import Card from "../Profile/Card";

const MainHome = () => {
  return (
    <>
      <section className="my-20 flex h-[100%] w-[100%] justify-center">
        <Aside />
        <HomeCenter />
        <AsideRight />
      </section>
    </>
  );
};

export default MainHome;
