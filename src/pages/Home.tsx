import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/features/userSlice";

const Home = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.state) {
      navigate("/login");
    }
    console.log(user.state);
  }, []);

  return <div>Home</div>;
};

export default Home;
