import React, { useEffect, useState } from "react";
import axios from "axios";

function Protected() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://autherntication-backend.vercel.app/protected",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessage(response.data.message);
      } catch (err) {
        setMessage("Access denied");
      }
    };
    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default Protected;
