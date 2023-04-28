import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // const state = {
  //   user,
  //   setUser,
  // };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        navigate("/chats");
      }
    });
  }, [user, navigate]);

  const value = { user };

  return (
    <authContext.Provider value={value}>
      {!loading && props.children}
    </authContext.Provider>
  );
};
