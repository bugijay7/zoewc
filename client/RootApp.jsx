import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "../client/src/App.jsx";

export default function RootApp() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 100,
    });
  }, []);

  return <App />;
}
