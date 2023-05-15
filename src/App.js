import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    getdata();
  }, []);

  const [userData, setUserData] = useState([]);

  async function getdata() {
    const res = await Axios.get(baseUrl);
    setUserData(res);
    console.log(res.data);
  }

  return (
    <div className="App">
      {userData.data?.map((element) => (
        <div key={element.id}>
          <div>
            <span>UserID: </span>
            {element.id}
          </div>
          <div>
            <span>Name: </span>
            {element.name}
          </div>
        </div>
      ))}
    </div>
  );
}
