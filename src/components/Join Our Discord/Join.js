import React from "react";
import "./Join.css";
import headerImg from "../../assets/the-metaverse-you-need-p-1080.46f9bbe57b88448c127d.png";
import HeaderImg2 from "../../assets/header-backoground-min-p-1080.907f9ed6de169f69a091.png";
const Join = () => {
  return (
    <div className="" id="join-rem">
      <div className="mx-auto px-14 container ">
        <div className="row gx-5">
          <div className="col-md-6">
            <img src={headerImg} alt="header img" className="w-100" />
            <button className="btn btn-lg nav-last-link float-md-start font-semibold py-3 px-6 mt-4 rounded">
              JOIN OUR DISCORD
            </button>
          </div>
          <div className="col-md-6">
            <img src={HeaderImg2} alt="" className="w-100" />
          </div>
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAByCAYAAABJGBHEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgB7ZlBbtswEEWHcffpsihQlEdQF91k4/oGzgmaGyQ3yBHsG/gIyg1sb7LpQrqBXRQosnO6bVGoM/bQUVSKHoZ0kADzAELSiPpfpjQjUQbo0DRNQQ0i6TvupKd/GWPCfUtpf3c2K4lJTN/oA58sLhFIFg8JZRP3CWYX95hEiZvi89m2c/3ttpaYbA8y5mBfp7vLA2NKFwieDQqLxc2ghD8Ag7ufP+7evf+wJBNa0jYksBf//fe8rm/rAQVzmXTFKTZwO1NNfOKPDFJM+sT/M3iKSUjcaxBjcki810BiIhEPGoRMpOKEAQE7QVNiKp/vjpKJiw0emVDyC8WjIZOiOMtbRRVFURRFURQ/OBG02C7gWKD4F2yNtP8JHJmjG7zp24GjMMeFhWMZIFNsb0FRXh9aKvbgKFyCP5Mt5DBARthOe/YtQFGejYMfpKg04GLIm0v8tLyAXKD4tNlR0TOa1+n/nfRHKYpc8af8YStmOXYNqbDQV0+cqulG+itCxc5iW3viFCPxU0g0WGPzfQB0f1J8hxRonHkobCvmrsEMcoBCE75z5nz3bHhdfBdJ8oDuojFv3uDQLEFRkslS7FiI6s6sXZM4toJUaKraKs8rTjpXvieQCj8DruHhrJtu+ZYQevGicV7zult+wky+hwh6SwWP8z03MqMqutgfaMwIBMTMMm9AUV4W/ICfdQsbl4uxVCf02rJ9c/Bk7sbtS4Jrz9ATt7zvo0Qn9AvozK0n7obsF6TA5bnyXIOSv4aJCBU7Eq54c8pLurgW2wivzRpSad1JVeuhY0FRXgaUBzxHdttjnnzMs9yq7Yxt1Z9JbCaHDPbFjpNt1jETFbvQawsVO3qjo9nkBa1zPFuxu2oemLTiVDYqyAEPR9GJXcZc5H+8E+Rv2MYmxgAAAABJRU5ErkJggg=="
          alt="Scroll Jumping Text"
          className="bouncing-element"
        />
      </div>
    </div>
  );
};

export default Join;
