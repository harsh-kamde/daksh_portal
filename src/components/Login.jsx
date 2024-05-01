import React, { useState } from "react";
import "../stylesheets/Form.css";
import Header from "./common/Header";

const Login = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formattedData = {
      ...user,
    };
    console.log(JSON.stringify(formattedData, null, 2));

    
  };

  return (
    <>
      <Header />

      <div className="profile-setting">
        <div className="login-form">
          <form className="row form-row" onSubmit={onSubmit}>
            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  ID <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="ID"
                  className="text-input-field"
                  value={user.id}
                  onChange={(e) => handleChange(e.target.value, "id")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Password"
                  className="text-input-field"
                  value={user.password}
                  type="password"
                  onChange={(e) => handleChange(e.target.value, "password")}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn my-3">
                {"Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
