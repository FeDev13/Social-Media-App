import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import MapsView from "../maps/MapsView";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Upload } from "../Upload";

const userPost = () => {
  const { user } = useContext(AuthContext);
  /* const [open, setOpen] = useState(false); */
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);
  const [id, setId] = useState(null);
  const [profile, setProfile] = useState(null);
  const desc = useRef();

  const fetchData = async () => {
    const data = await JSON.parse(
      localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    setId(data);
    const res = await axios.get(`http://localhost:5050/users/${data}`);

    setProfile(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const submitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: id,
      desc: desc.current.value,
      user: profile,
    };

    //imagen
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("http://localhost:5050/upload", data);
      } catch (err) {}
    }
    //video
     if (video) {
      const fileName = new Date().getTime() + video.name;
      const storage = getStorage(app);
      const StorageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(StorageRef, video);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const uploadVideo = {
              userId: id,
              desc: desc.current.value,
              video: downloadURL,
            };
            try {
              axios.post("http://localhost:5050/posts/", uploadVideo);
              window.location.reload();
            } catch (err) {}
          });
        }
      );
    }
    //texto
    else
      try {
        await axios.post("http://localhost:5050/posts/", newPost);
        window.location.reload();
      } catch (err) {}
  };

  return (
    <div className="  h-full w-full rounded-lg shadow-lg py-3 bg-white dark:text-white dark:bg-[#16181C] ">
      <div className=" h-full flex flex-col gap-y-12  rounded-lg py-5  items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Share your thoughts"
          className="rounded-lg flex justify-center m-auto py-5 bg-transparent w-[90%]  text-2xl outline-none  "
          required
          ref={desc}
        />

        <div className=" flex  w-[90%]  ">
          <div className=" flex w-full items-center gap-10  ">
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 plus cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <input
                className=" hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            {/* <svg //mapa
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="w-6 h-6 mx-8 plus"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <path
                fill-rule="evenodd"
                d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                clip-rule="evenodd"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 plus"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>

            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 plus cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                className=" hidden"
                type="file"
                id="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                /*   onClick={() => setOpen(true)} */
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              onClick={submitPost}
              /*  onKeyDown={handleKey} */
              type="button"
              id="btn"
              className=" rounded-xl px-5 py-3 bg-black text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md
      transition
      duration-150
      ease-in-out
      hover:shadow-lg focus:shadow-lg
      focus:outline-none  focus:ring-0 
      active:shadow-lg sm:w-min
      md:w-1/2
      lg:w-auto
      "
            >
              Share
            </button>
          </div>
        </div>

        {/* modal */}
        <div
          class="modal fade fixed top-0 left-0 hidden  h-full w-full  overflow-y-auto overflow-x-hidden outline-none z-50"
          id="exampleModal"
          tabindex="100"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="flex h-full w-full items-center justify-center bg-slate-500 bg-opacity-40 ">
            <div class="modal-dialog pointer-events-none relative w-[50%]">
              <div class="modal-content pointer-events-auto relative flex w-full flex-col rounded-lg border-none  dark:bg-[#16181C] bg-clip-padding text-current shadow-lg outline-none">
                <div class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                  <h5
                    class="text-xl font-medium leading-normal text-white"
                    id="exampleModalLabel"
                  >
                    You are here
                  </h5>
                  <button
                    type="button"
                    class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body relative p-4">
                  <div className="relative flex w-[100%] gap-5 p-[2%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <MapsView />
                  </div>
                </div>

                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                  <button
                    type="button"
                    class="rounded
        bg-purple-600
        px-6
        py-2.5
        text-xs
        font-medium
        uppercase
        leading-tight
        text-white
        shadow-md
        transition duration-150
        ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700
        focus:shadow-lg focus:outline-none
        focus:ring-0
        active:bg-purple-800
        active:shadow-lg"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {open && <Upload setOpen={setOpen} />} */}
    </div>
  );
};

export default userPost;
