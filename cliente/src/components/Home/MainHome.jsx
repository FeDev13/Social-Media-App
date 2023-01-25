import React from "react";
import AsideRight from "./AsideRight";
import Aside from "./Aside";
import HomeCenter from "./HomeCenter";

const MainHome = () => {
  return (
    <>
      <section className="flex w-[100%] justify-center h-[100%] my-20">
        <Aside />
        <HomeCenter/>
        <AsideRight/>
      </section>
    </>
  );
};

export default MainHome;
