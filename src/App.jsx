import React from "react";
import { useState } from "react";
import Preloader from "./components/Preloader";
import Home from "./Pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && <Home />}
    </>
  );
}
