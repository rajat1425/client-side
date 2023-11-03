import React from "react";
import logo from "../../images/logo.png";
import Avatar from "../../components/avatar/Avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { axiosClient } from "../../utils/axiosClient";
import { Key_Access_Token, deleteUser } from "../../utils/localStorage";
function Navbar() {
  const navigate = useNavigate();

  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  async function logout() {
    try {
      // dispatch(setLoading(true));
      await axiosClient.post("/auth/logout");
      deleteUser(Key_Access_Token);
      navigate("/login");
      // dispatch(setLoading(false));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // console.log(myProfile);
  return (
    <>
      <div class="bg-gradient-to-r from-deepBlue relative  to-blue-500 p-[.2rem]">
        <div class=" overflow-hidden  h-[70px]  flex justify-between items-center max-w-[1080px] mx-auto    p-3   ">
          <img
            src={logo}
            width="350px"
            class=" h-auto rounded-3xl cursor-pointer"
            alt=""
            onClick={() => navigate("/")}
          />
          <div class="flex flex-row space-x-5  justify-center items-center">
            <div
              class=" cursor-pointer"
              onClick={() => navigate(`/profile/${myProfile?._id}`)}
            >
              <Avatar width="50px" heigth="50px" src={myProfile?.avatar?.url} />
            </div>
            <button onClick={logout} class="group ">
              <AiOutlineLogout size={30} />
              <h2 class="absolute hidden top-12 group-hover:block">logout</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
