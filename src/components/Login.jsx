import React, { useState } from "react";
import "../stylesheets/Form.css";
import Header from "./common/Header";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { API_URL } from "../store/apiurl";
const URL = `${API_URL}/api/v1/auth/admin-login`;

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // alert("Login Successful")
        toast.success("Login Successful");
        const data = await response.json();
        storeTokenInLS(data.token);
        localStorage.setItem("center_data", JSON.stringify(data.center));
        console.log("center_data"+JSON.stringify(data.center));
        navigate('/dashboard');
        setUser({ email: "", password: "" });
      } else {
        alert("Invalid credentials")
      }
    } catch (error) {
      alert("Server Error")
      toast.error("Invalid credentials");
      setErrors({ ...errors, login: error.message }); // Set login error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="profile-setting">
        <div className="login-form">
          <form className="row form-row" onSubmit={handleSubmit}>
            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  ID <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="ID"
                  className="text-input-field"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
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
                  name="password"
                  value={user.password}
                  type="password"
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn my-3" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
