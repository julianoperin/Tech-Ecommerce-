import React, { useState } from "react";

// Strapi function
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";

// Handle user
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  //setup user context

  //state values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {};

  const handleSubmit = async (e) => {};

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}

        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        {/* register link */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
