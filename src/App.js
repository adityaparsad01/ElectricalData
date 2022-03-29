import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";

import "./styles.css";
import Daily from "./components/Daily";
const URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AXjL3ZQa0ZZtMpSXrtDAnAkxvYoATyHSqJr9KBDIrkybMJLFBCWcOLLOTu-ullOs_JEjdAmZ8WPKoXU6jq3qkIaFzqiXQc18m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ21V1NUU0_OsSwvhQhx4Qw23rcqH3eKr4nISsW4YhSgFXQ4LL6yxDQ1DXMQ33DdET7krIAkGKXM_DZ311fdNuN8p8mgrYHajdz9Jw9Md8uu&lib=MFmzoUSVZXoxjywCQd35CSKsJ1pxaJPgw";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        setData(response.data[0].jsonArray);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Daily data={data} />
    </div>
  );
}
