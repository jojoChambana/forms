import React, { useState } from "react";
import { Header } from "./components/UI/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cash from "./Pages/Cash";
import Check from "./Pages/Check";
import GiftInKind from "./Pages/GiftInKind";
import SecWireDataEntry from "./components/SecWireDataEntry";
import SecWirePrint from "./components/Print/SecWirePrint";
import Trust from "./Pages/Trust";
import TrustDeferred from "./Pages/TrustDeferred";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    newFormValues,
    newSecWireFormValues,
    newTrustFormValues,
    newTrustDeferredFormValues,
} from "./components/HelperFunctions";
import CashCheckGIKPrint from "./components/Print/CashCheckGIKPrint";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import TrustPrint from "./components/Print/TrustPrint";

const theme = createTheme({
    typography: {
        fontFamily: ["Gotham SSm A", "Gotham SSm B"].join(","),
    },
    palette: {
        primary: {
            // light: "#757ce8",
            main: "#131f33",
            // dark: "#002884",
            // contrastText: "#fff",
        },
        secondary: {
            // light: "#ff7961",
            main: "#cccccc",
            // dark: "#ba000d",
            // contrastText: "#000",
        },
    },
});

function App() {
    // Initializing the form variables for each type of form
    const [cashValues, setCashValues] = useState(newFormValues());
    const [checkValues, setCheckValues] = useState(newFormValues());
    const [giftInKindValues, setGiftInKindValues] = useState(newFormValues());
    const [trustValues, setTrustValues] = useState(newTrustFormValues());
    const [trustDeferredValues, setTrustDeferredValues] = useState(
        newTrustDeferredFormValues()
    );
    const [securitiesValues, setSecuritiesValues] = useState(
        newSecWireFormValues()
    );
    const [wireValues, setWireValues] = useState(newSecWireFormValues());
    //const [trustValues, setTrustValues] = useState(newFormValues());
    //    console.table(wireValues);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/transmittal/" element={<Home />} />
                    <Route
                        exact
                        path="/transmittal/cash"
                        element={
                            <Cash
                                formValues={cashValues}
                                setFormValues={setCashValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/transmittal/cashprint"
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
                        path="/transmittal/check"
                        element={
                            <Check
                                formValues={checkValues}
                                setFormValues={setCheckValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/transmittal/checkprint"
                        element={
                            <CashCheckGIKPrint
                                formValues={checkValues}
                                returnUrl={"/transmittal/check"}
                                formType={"Check"}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/transmittal/giftinkind"
                        element={
                            <GiftInKind
                                formValues={giftInKindValues}
                                setFormValues={setGiftInKindValues}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/transmittal/giftinkindprint"
                        element={
                            <CashCheckGIKPrint
                                formValues={giftInKindValues}
                                returnUrl={"/transmittal/giftinkind"}
                                formType={"Gift in Kind"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/securities"
                        element={
                            <SecWireDataEntry
                                formValues={securitiesValues}
                                setFormValues={setSecuritiesValues}
                                showSecurities={true}
                                submitURL={"/transmittal/securitiesprint"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/securitiesprint"
                        element={
                            <SecWirePrint
                                formValues={securitiesValues}
                                printSecurities={true}
                                returnUrl={"/transmittal/securities"}
                                title={"Securities"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/wire"
                        element={
                            <SecWireDataEntry
                                formValues={wireValues}
                                setFormValues={setWireValues}
                                showSecurities={false}
                                submitURL={"/transmittal/wireprint"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/wireprint"
                        element={
                            <SecWirePrint
                                formValues={wireValues}
                                printSecurities={false}
                                returnUrl={"/transmittal/wire"}
                                title={"Wire"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/trust"
                        element={
                            <Trust
                                formValues={trustValues}
                                setFormValues={setTrustValues}
                                submitURL={"/transmittal/trustprint"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/trustprint"
                        element={
                            <TrustPrint
                                formValues={trustValues}
                                showSecurities={false}
                                returnUrl={"/transmittal/trust"}
                                title={"Trust"}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/trustdeferred"
                        element={
                            <TrustDeferred
                                formValues={trustDeferredValues}
                                setFormValues={setTrustDeferredValues}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/transmittal/trustdeferredprint"
                        element={
                            <TrustPrint
                                formValues={trustValues}
                                showSecurities={false}
                                returnUrl={"/transmittal/trustdeferred"}
                                title={"Trust"}
                            />
                        }
                    />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
