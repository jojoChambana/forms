
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
import { dateRangePickerDayClasses } from "@mui/lab";

function App() {
    const methods = useForm();
    var today = new Date();
    // let date = (today.getMonth() + 1) + '-' + (today.getDate() + 1) + '-' + today.getFullYear();
    // const onSubmit = data => console.log(data);
    const theDate = new Date().toLocaleString();
    const [checkValues, setCheckValues] = useState({

    });
    const [cashValues, setCashValues] = useState({
        foreignDonor: "", // Address.js

        contactFullName: "", // ContactInformation.js
        contactPhone: "", // ContactInformation.js
        contactEmail: "", // ContactInformation.js
        collegeName: "", // ContactInformation.js

        campusLocation: "", // DepartmentCampus.js

        designationAdditionalComments: "", //DesignationInformation.js
        newDesignationRequested: "", //DesignationInformation.js
        departmentContactEmail: "", //DesignationInformation.js
        departmentContact: "", //DesignationInformation.js
        tedDesignationId: "", //DesignationInformation.js
        tedDesignationTitle: "", //DesignationInformation.js
        totalDesignationAmount: "", //DesignationInformation.js

        address: "",  // DomesticAddress.js
        city: "", // DomesticAddress.js
        state: "", // DomesticAddress.js
        zipCode: "", // DomesticAddress.js
        newDonor: "", // DomesticAddress.js
        newAddress: "", // DomesticAddress.js

        donorUnknown: "", // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js

        provinceRegion: "", // ForeignAddress.js,
        country: "", // ForeignAddress.js,
        postalCode: "", // ForeignAddress.js,

        foreignaddress: "", //ForeignAddressCheckbox.js,

        associatedOpportunity: "", // GiftAssociatedOpportunity.js
        tedHouseholdId: "", // GiftAssociatedOpportunity.js
        tedHouseholdName: "", // GiftAssociatedOpportunity.js
        tedPlanName: "", // GiftAssociatedOpportunity.js
        tedOpportunityAmount: "", // GiftAssociatedOpportunity.js
        actualAskDate: "", // GiftAssociatedOpportunity.js
        primaryPlanManager: "", // GiftAssociatedOpportunity.js

        giftAssociatedWithPledge: "", // GiftAccociatedPledge.js
        pledgeRevenueId: "", // GiftAccociatedPledge.js

        giftAmount: 0,


        tribute: "", // GiftTribute.js
        giftTribute: "", // GiftTribute.js
        tedconstituentID: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js
        inMemoryNewAddress: "", // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        departmentName: "", // NameEmail.js
        // donationDate: date, // NameEmail.js
        preparedBy: "", // NameEmail.js
        unitReferenceNumber: "", // NameEmail.js

        newDonorCheckBox: "", // NewDonor.js

        nonGiftPortion: "", // NonGiftPortion.js
        nonGiftTedId: "", // NonGiftPortion.js
        giftTedAmount: "", // NonGiftPortion.js
        nonGiftTedAmount: "", // NonGiftPortion.js

        tedConstituentD: "", // NonGiftPortion.js
        nonGiftAmount: 0, // NonGiftPortion.js

        publicityCode: "", // publicityDropDown.js

        tedDonorUnknown: "", // TedOrgDonor.js
        tedConstituentID: "", // TedOrgDonor.js
        organizationDonorNawne: "", // TedOrgDonor.js

        totalDonationAmount: 0, // TotalDonationAmount.js

        giftTotals: "", // TransmittalTotals.js
        nonGiftTotals: "", // TransmittalTotals.js
        totaldonations: "", // TransmittalTotals.js

        // 62 field or checkboxes on Cash alone!!!!!

    });
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact path="/cash"
                        element={
                            <Cash formValues={cashValues} setFormValues={setCashValues} />
                        }
                    />
                    <Route
                        exact path="/cashprint"
                        element={<CashPrint formValues={cashValues} />}
                    />
                    <Route
                        exact path="/check"
                        element={
                            <Check formValues={checkValues} setFormValues={setCheckValues} />
                        }
                    />
                    <Route
                        exact path="/checkprint"
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