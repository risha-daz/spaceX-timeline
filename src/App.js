import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import TimelineList from "./components/TimelineList";
import axios from "axios";
const App = () => {
  const [launches, setLaunches] = useState(null);
  useEffect(() => {
    getLaunches();

    //eslint-disable-next-line
  }, []);
  const getLaunches = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3/launches");
    setLaunches(res.data);
  };
  return (
    <div className='App'>
      <Navbar />
      <TimelineList launches={launches} />
    </div>
  );
};

export default App;
