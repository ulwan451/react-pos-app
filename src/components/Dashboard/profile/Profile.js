import React from "react";
import "./Profile.scss";
import Input from "../../Input/Input";
import Buttons from "../../Register/ButtonLoading";

const Profile = ({
  content,
  nameUser,
  nameEmail,
  namePass,
  nameUsername,
  valueUser,
  valueEmail,
  valuePass,
  valueUsername,
  onChange,
  updateUser,
  updatePrivate,
  emailUser,
  namaUser,
  loading,
  role,
  avatar
}) => {
  return (
    <div className={content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <p className="text-secondary">OVERVIEW</p>
      <h3 className="text-dark" style={{ position: "relative", top: "-15px" }}>
        User Profile
      </h3>
      <div className="row ml-1">
        <div className="col-md-4 border shadow mr-3">
          <div className="text-center mt-5">
            <img src={avatar} alt="" width="150" />
            <h4>{namaUser}</h4>
            <p
              style={{ fontSize: "20px", top: "-15px", position: "relative" }}
              className="text-secondary"
            >
              {emailUser}
            </p>
            <p>role: {role}</p>
            <button className="change btn btn-outline-primary py-1 px-3 mb-5 btn-sm">
              + Change
            </button>
          </div>
          <p className="text-dark">Deskription</p>
          <p
            className="text-secondary mt-2"
            style={{ fontSize: "14px", top: "-20px", position: "relative" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
            quidem, commodi soluta qui quae minima obcaecati quod dolorum sint
            alias, possimus illum assumenda eligendi cumque?
          </p>
        </div>
        <div className="col-md-7 border shadow">
          <p className="p-3">Account Details</p>
          <div className="row">
            <div className="col-md-6 ">
              <Input
                type="text"
                label="Name"
                name={nameUser}
                value={valueUser}
                onChange={onChange}
              />
            </div>
            <div className="col-md-6 ">
              <Input
                type="email"
                label="Email"
                name={nameEmail}
                value={valueEmail}
                onChange={onChange}
              />
            </div>
          </div>

          <Buttons
            className="btn btn-primary btn-sm float-right"
            onClick={updateUser}
            loading={loading}
            title="Update User"
          />
          <div className="row mt-5">
            <div className="col-md-12 ">
              <Input
                type="text"
                label="Username"
                name={nameUsername}
                value={valueUsername}
                onChange={onChange}
              />
            </div>
            <div className="col-md-12 ">
              <Input
                type="password"
                label="Password"
                name={namePass}
                value={valuePass}
                onChange={onChange}
              />
            </div>
          </div>

          <Buttons
            className="btn btn-primary btn-sm float-right"
            onClick={updatePrivate}
            loading={loading}
            title="  Update Privacy"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
