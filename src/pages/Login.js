import React, { useState } from "react";

// Strapi function

// Handle user
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  //setup user context

  //state values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("default");
  const [isMember, setMember] = useState(true);

  let isEmpty = false;

  const toggleMember = () => {};

  const handleSubmit = async (e) => {};

  return <h1>hello from login page</h1>;
};

export default Login;
