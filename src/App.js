import React, { useState } from "react";
import { Header } from "./components/UI/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cash from "./Pages/Cash";
import Check from "./Pages/Check";
import GiftInKind from "./Pages/GiftInKind";
import SecWireDataEntry from "./components/SecWireDataEntry";

import Trust from "./Pages/Trust";
import SecWirePrint from "./components/Print/SecWirePrint";
import TrustPrint from "./Pages/TrustPrint";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    newFormValues,
    newSecWireFormValues,
} from "./components/HelperFunctions";
import CashCheckGIKPrint from "./components/Print/CashCheckGIKPrint";

function App() {
    // Initializing the form variables for each type of form
    const [cashValues, setCashValues] = useState(newFormValues());
    const [checkValues, setCheckValues] = useState(newFormValues());
    const [giftInKindValues, setGiftInKindValues] = useState(newFormValues());
    const [securitiesValues, setSecuritiesValues] = useState(
        newSecWireFormValues()
    );
    const [wireValues, setWireValues] = useState(newSecWireFormValues());
    const [trustValues, setTrustValues] = useState(newFormValues());

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/cash"
                        element={
                            <Cash
                                formValues={cashValues}
                                setFormValues={setCashValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/cashprint"
                        element={
                            <CashCheckGIKPrint
                                formValues={cashValues}
                                returnUrl={"/cash"}
                                formType={"Cash"}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/check"
                        element={
                            <Check
                                formValues={checkValues}
                                setFormValues={setCheckValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/checkprint"
                        element={
                            <CashCheckGIKPrint
                                formValues={checkValues}
                                returnUrl={"/check"}
                                formType={"Check"}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/giftinkind"
                        element={
                            <GiftInKind
                                formValues={giftInKindValues}
                                setFormValues={setGiftInKindValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/giftinkindprint"
                        element={
                            <CashCheckGIKPrint
                                formValues={giftInKindValues}
                                returnUrl={"/giftinkind"}
                                formType={"Gift in Kind"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/securities"
                        element={
                            <SecWireDataEntry
                                formValues={securitiesValues}
                                setFormValues={setSecuritiesValues}
                                showSecurities={true}
                                submitURL={"/securitiesprint"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/securitiesprint"
                        element={
                            <SecWirePrint
                                formValues={securitiesValues}
                                printSecurities={true}
                                returnUrl={"/securities"}
                                title={"Securities"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/wire"
                        element={
                            <SecWireDataEntry
                                formValues={wireValues}
                                setFormValues={setWireValues}
                                showSecurities={false}
                                submitURL={"/wireprint"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/wireprint"
                        element={
                            <SecWirePrint
                                formValues={wireValues}
                                printSecurities={false}
                                returnUrl={"/wire"}
                                title={"Wire"}
                            />
                        }
                    />

                    {/* <Route
                        exact
                        path="/trust"
                        element={
                            <Trust
                                formValues={trustValues}
                                setFormValues={setTrustValues}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/trustprint"
                        element={<TrustPrint formValues={trustValues} />}
                    /> */}

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
