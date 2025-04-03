import "./styles.css";
import Map from "../Map";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [isDetail, setIsDetail] = useState([]);
  const [letitude, setLatitude] = useState("22.5726");
  const [longitude, setLongitude] = useState("88.3832");

  const Reactres = async () => {
    const URL = "https://ipapi.co/json/";
    const response = await axios.get(URL);
    setIsDetail(response.data);
    setLatitude(response.data.latitude);
    setLongitude(response.data.longitude);

    console.log(response);
  };
  useEffect(() => {
    Reactres();
  }, []);
  return (
    <>
      <h1 className="heading">IP address finder </h1>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        <div className="left">
          <h4>What is IPv4 Address </h4>
          <h1 id="ip">{isDetail.ip}</h1>
          <h4>Aproximate Location</h4>
          <p>
            {isDetail.city}, {isDetail.region}, {isDetail.country_name}
          </p>
          <h4>Internet Service Provider(ISP): </h4>
          <p>{isDetail.org}</p>
        </div>
        <Map letitude={letitude} longitude={longitude} />
      </div>
    </>
  );
}
