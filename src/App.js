
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "./components/UI/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cash from "./Pages/Cash";
import Check from "./Pages/Check";
import GiftInKind from "./Pages/GiftInKind";
import Securities from "./Pages/Securities";
import Trust from "./Pages/Trust";
import Wire from "./Pages/Wire";
import CashPrint from "./Pages/CashPrint";
import CheckPrint from "./Pages/CashPrint";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);
  const [checkValues, setCheckValues] = useState({});
  const [cashValues, setCashValues] = useState({});
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/cash"
            element={
              <Cash formValues={cashValues} setFormValues={setCashValues} />
            }
          />
          <Route
            path="/cashprint"
            element={<CashPrint formValues={cashValues} />}
          />
          <Route
            path="/check"
            element={
              <Check formValues={checkValues} setFormValues={setCheckValues} />
            }
          />
          <Route
            path="/checkprint"
            element={<CheckPrint formValues={checkValues} />}
          />
          <Route path="/gift-in-kind" element={<GiftInKind />} />

          <Route path="/securities" element={<Securities />} />
          <Route path="/wire" element={<Wire />} />
          <Route path="/trust" element={<Trust />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;