import React from "react";
import AsideRight from "./AsideRight";
import Aside from "./Aside";
import HomeCenter from "./HomeCenter";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
const MainHome = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const asyncFn = async () => {
      if (!localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
          )
        );
      }
    };
    asyncFn();
  }, []);
  return (
    <>
      <section className="flex w-[100%] justify-center h-[100%] my-20 ">
        <Aside />
        <HomeCenter/>
        <AsideRight/>
      </section>
    </>
  );
};

export default MainHome;
