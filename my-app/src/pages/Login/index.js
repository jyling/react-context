import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users";

export const Login = ({setGlobalUser}) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigation = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(u => user.email == u.email);
    if (!foundUser || foundUser?.password !== user.password) {
      alert("email or password is incorrect");
      return;
    }
    setGlobalUser(foundUser);
    navigation("/")
  };

  const updateState = (type, value) => {
    const oldUser = { ...user };
    oldUser[type] = value;
    setUser(oldUser);
  };


  return (
    <>
      <h2>Welcome to the Login Page!</h2>
      <form onSubmit={onSubmit}>
        <div className="d-flex justify-content-center">
          <div className="w-50 ">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(val) => updateState("email", val.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Very Secure Password"
                onChange={(val) => updateState("password", val.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-block">Login</button>
        </div>
          </div>

        </div>
      </form>
    </>
  );
}