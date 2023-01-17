import React from "react";
import AsideRight from "./AsideRight";
import Aside from "./Aside";
import HomeCenter from "./HomeCenter";

const MainHome = () => {
  return (
    <>
      <section className="flex w-[100%] h-screen justify-center bg-[#F3F5F7] ">
        <Aside />
        <HomeCenter/>
        <AsideRight/>
      </section>
    </>
  );
};

export default MainHome;
