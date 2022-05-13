import { Button, Grid, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function ShowFillButton() {
    return window.location.hostname !== "transmittal.uif.uillinois.edu";
}
export function formatAmount(amount) {
    return parseNum(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}

export function parseNum(num) {
    if (typeof num === "string") {
        num = num.replace("$", "").replace(",", "");
    }
    let newValue = parseFloat(num);
    if (isNaN(newValue)) {
        newValue = 0.0;
    }

    return newValue;
}

export function formatAmount2(amount) {
    if (isNaN(amount)) {
        amount = 0;
    } else {
        amount = parseFloat(amount);
        if (Math.floor(amount / 100) !== amount) {
            amount = amount.tofixed(2);
        }
    }
    return amount;
}

export function formatAmount3(amount) {
    if (isNaN(amount)) {
        amount = 0;
    } else {
        amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calcFinalTotals(
    designationArray,
    setValue,
    ignoreNonGiftChecked = false
) {
    let giftTotal = 0;
    let nonGiftTotal = 0;
    for (var d in designationArray) {
        giftTotal += parseNum(designationArray[d].designationGiftAmount);
        if (ignoreNonGiftChecked || designationArray[d].nonGiftPortionChecked) {
            nonGiftTotal += parseNum(
                designationArray[d].designationNonGiftAmount
            );
        }
    }

    setValue("giftTotal", formatAmount(giftTotal));
    setValue("nonGiftTotal", formatAmount(nonGiftTotal));
    setValue("overallTotal", formatAmount(giftTotal + nonGiftTotal));
}

export function calcGIKTotals(gikArray, setValue) {
    let gikTotal = 0;
    for (var d in gikArray) {
        gikTotal += parseNum(gikArray[d].giftValue);
    }

    setValue("gikTotal", formatAmount(gikTotal));
}

export function newDesignation() {
    return {
        newDesignationRequestedChecked: false, // DesignationInformaiton.js

        nonGiftPortionChecked: false, // DesignationInformaiton.js
        departmentContactEmail: "", // DesignationInformaiton.js
        departmentContact: "", // DesignationInformaiton.js
        tedDesignationId: "", // DesignationInformaiton.js
        tedDesignationTitle: "", // DesignationInformaiton.js
        designationGiftAmount: "", // DesignationInformaiton.js
        designationNonGiftAmount: "", // DesignationInformaiton.js
        designationTotalAmount: 0, // DesignationInformaiton.js
        pledgeRevenueId: "", // DesignationInformaiton.js
        designationAdditionalComments: "", // DesignationInformaiton.js

        associatedOpportunityChecked: false, // GiftAssociatedOpportunity
        tedHouseholdId: "", // GiftAssociatedOpportunity
        tedHouseholdName: "", // GiftAssociatedOpportunity
        tedPlanName: "", // GiftAssociatedOpportunity
        tedOpportunityAmount: "", // GiftAssociatedOpportunity
        actualAskDate: "", // GiftAssociatedOpportunity
        primaryPlanManager: "", // GiftAssociatedOpportunity
    };
}

export function newSecurity() {
    return {
        shares: "",
        name: "",
        symbol: "",
    };
}

export function newTrustWire() {
    return {
        bankName: "",
        totalValue: 0,
    };
}

export function newTrustCheck() {
    return {
        checkNumbers: "",
        checkTotal: 0,
    };
}
export function newGiftInKind() {
    return {
        descriptionOfGift: "",
        giftValue: 0,
    };
}
export function newTrustBeneficiary() {
    return {
        lastName: "",
        firstName: "",
        tedConstituentID: "",
        dateOfBirth: "",
    };
}
export function newFormValues() {
    return {
        formType: "",
        contactFullName: "", // ContactInformation.js
        contactPhone: "", // ContactInformation.js
        contactEmail: "", // ContactInformation.js
        collegeName: "", // ContactInformation.js

        campusLocation: "Urbana-Champaign", // DepartmentCampus.js
        designationAdditionalComments: "", //DesignationInformation.js
        newDesignationRequestedChecked: "", //DesignationInformation.js
        departmentContactEmail: "", //DesignationInformation.js
        departmentContact: "", //DesignationInformation.js
        tedDesignationId: "", //DesignationInformation.js
        tedDesignationTitle: "", //DesignationInformation.js
        totalDesignationAmount: "", //DesignationInformation.js
        newDonorCheckBox: false, // NewDonor.js
        newDonorAddressCheckBox: false, // DonorInfoCheckBoxes.js
        donorForeignAddressCheckbox: false, //ForeignCheckbox.js,

        donorDomesticAddressCity: "", // DomesticAddress.js
        donorDomesticAddress: "", // DomesticAddress.js
        donorDomesticAddressState: "", // DomesticAddress.js
        donorDomesticAddressZipCode: "", // DomesticAddress.js

        donorDomesticAddressNewAddress: false,

        donorForeignAddressCity: "",
        donorForeignAddress: "",
        donorForeignAddressProvinceRegion: "",
        donorForeignAddressCountry: "",
        donorForeignAddressPostalCode: "",

        donorUnknownCheckBox: false, // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js
        associatedOpportunityChecked: "", // GiftAssociatedOpportunity.js
        tedHouseholdId: "", // GiftAssociatedOpportunity.js
        tedHouseholdName: "", // GiftAssociatedOpportunity.js
        tedPlanName: "", // GiftAssociatedOpportunity.js
        tedOpportunityAmount: "", // GiftAssociatedOpportunity.js
        actualAskDate: "", // GiftAssociatedOpportunity.js
        primaryPlanManager: "", // GiftAssociatedOpportunity.js

        giftAssociatedWithPledge: "", // GiftAssociatedPledge.js    ????????????????
        pledgeRevenueId: "", // GiftAssociatedPledge.js
        giftAmount: 0,

        tributeChecked: false, // GiftTribute.js
        giftTribute: "In Memory Of", // GiftTribute.js
        tedTributeConstituentId: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js

        inMemoryNewAddress: false, // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        departmentName: "", // NameEmail.js
        donationDate: "", // NameEmail.js
        preparedBy: "", // NameEmail.js
        unitReferenceNumber: "", // NameEmail.js
        sourceCode: "", // NameEmail.js

        giftInKind: [{ ...newGiftInKind() }], // giftInKind.js
        designation: [{ ...newDesignation() }],
        descriptionOfGift: "",
        giftValue: "",
        nonGiftPortionChecked: "", // NonGiftPortion.js
        nonGiftTedId: "", // NonGiftPortion.js
        giftTedAmount: "", // NonGiftPortion.js
        nonGiftTedAmount: "", // NonGiftPortion.js

        NonGiftAmount: 0, // NonGiftPortion.js

        publicityCode: "No Restrictions", // publicityDropDown.js

        tedDonorUnknown: "", // TedOrgDonor.js

        totalDonationAmount: "", // TotalDonationAmount.js

        giftTotals: "", // TransmittalTotals.js
        nonGiftTotals: "", // TransmittalTotals.js
        totaldonations: "", // TransmittalTotals.js

        tributeForeignAddressCheckbox: false,

        giftTotal: 0, // TransmittalTotals.js
        nonGiftTotal: 0, // TransmittalTotals.js
        overallTotal: 0, // TransmittalTotals.js
        gikTotal: 0, // TransmittalTotals.js

        notifyIndividualOrFamily: "Do Not Send a Notification",
        tedTributeAcknowledgedFirstName: "",
        tedTributeAcknowledgedLastName: "",
        acknowledgeeDomesticAddress: "",
        acknowledgeeDomesticAddressCity: "",
        acknowledgeeDomesticAddressState: "",
        acknowledgeeDomesticAddressZipCode: "",
        acknowledgeeForeignAddress: "",
        acknowledgeeForeignAddressCity: "",
        acknowledgeeForeignAddressProvinceRegion: "",
        acknowledgeeForeignAddressCountry: "",
        acknowledgeeForeignAddressPostalCode: "",

        notifyIndividualOrFamilyEmail: "",
        tedTributeAcknowledgedPhone: "",

        trustWire: [{ ...newTrustWire() }], // Trust.js
    };
}

export function newSecWireFormValues() {
    return {
        formType: "",
        dateOfGift: "", // UIFonlyContactInformation.js
        preparedBy: "", // UIFonlyContactInformation.js
        datePrepared: "", // UIFonlyContactInformation.js
        doNotProcessUntilContactedByTrustServices: false, // UIFonlyContactInformation.js
        sourceCode: "", // UIFonlyContactInformation.js
        // contactFullName: "", // ContactInformation.js
        // contactPhone: "", // ContactInformation.js
        // contactEmail: "", // ContactInformation.js
        // collegeName: "", // ContactInformation.js

        campusLocation: "Urbana-Champaign", // DepartmentCampus.js
        designationAdditionalComments: "", //DesignationInformation.js
        newDesignationRequestedChecked: "", //DesignationInformation.js
        departmentContactEmail: "", //DesignationInformation.js
        departmentContact: "", //DesignationInformation.js
        tedDesignationId: "", //DesignationInformation.js
        tedDesignationTitle: "", //DesignationInformation.js
        totalDesignationAmount: "", //DesignationInformation.js
        newDonorCheckBox: false, // DonorInfoCheckBoxes.js
        newDonorAddressCheckBox: false, // DonorInfoCheckBoxes.js
        donorForeignAddressCheckbox: false, //ForeignCheckbox.js,

        donorDomesticAddressCity: "", // DomesticAddress.js
        donorDomesticAddress: "", // DomesticAddress.js
        donorDomesticAddressState: "", // DomesticAddress.js
        donorDomesticAddressZipCode: "", // DomesticAddress.js

        donorDomesticAddressNewAddress: false,

        donorForeignAddressCity: "",
        donorForeignAddress: "",
        donorForeignAddressProvinceRegion: "",
        donorForeignAddressCountry: "",
        donorForeignAddressPostalCode: "",

        donorUnknownCheckBox: false, // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js
        associatedOpportunityChecked: "", // GiftAssociatedOpportunity.js
        tedHouseholdId: "", // GiftAssociatedOpportunity.js
        tedHouseholdName: "", // GiftAssociatedOpportunity.js
        tedPlanName: "", // GiftAssociatedOpportunity.js
        tedOpportunityAmount: "", // GiftAssociatedOpportunity.js
        actualAskDate: "", // GiftAssociatedOpportunity.js
        primaryPlanManager: "", // GiftAssociatedOpportunity.js

        giftAssociatedWithPledge: "", // GiftAssociatedPledge.js    ????????????????
        pledgeRevenueId: "", // GiftAssociatedPledge.js
        giftAmount: 0,

        tributeChecked: false, // GiftTribute.js
        giftTribute: "In Memory Of", // GiftTribute.js
        tedTributeConstituentId: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js
        inMemoryNewAddress: false, // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        // departmentName: "", // NameEmail.js
        // donationDate: "", // NameEmail.js
        // preparedBy: "", // NameEmail.js
        // unitReferenceNumber: "", // NameEmail.js
        // sourceCode: "", // NameEmail.js

        designation: [{ ...newDesignation() }],
        nonGiftPortionChecked: "", // NonGiftPortion.js
        nonGiftTedId: "", // NonGiftPortion.js
        giftTedAmount: "", // NonGiftPortion.js
        nonGiftTedAmount: "", // NonGiftPortion.js

        NonGiftAmount: 0, // NonGiftPortion.js

        publicityCode: "No Restrictions", // publicityDropDown.js

        tedDonorUnknown: "", // TedOrgDonor.js

        totalDonationAmount: "", // TotalDonationAmount.js

        giftTotals: "", // TransmittalTotals.js
        nonGiftTotals: "", // TransmittalTotals.js
        totaldonations: "", // TransmittalTotals.js

        tributeForeignAddressCheckbox: false,

        giftTotal: 0, // TransmittalTotals.js
        nonGiftTotal: 0, // TransmittalTotals.js
        overallTotal: 0, // TransmittalTotals.js
        gikTotal: 0, // TransmittalTotals.js

        notifyIndividualOrFamily: "Do Not Send a Notification",
        tedTributeAcknowledgedFirstName: "",
        tedTributeAcknowledgedLastName: "",
        acknowledgeeDomesticAddress: "",
        acknowledgeeDomesticAddressCity: "",
        acknowledgeeDomesticAddressState: "",
        acknowledgeeDomesticAddressZipCode: "",
        acknowledgeeForeignAddress: "",
        acknowledgeeForeignAddressCity: "",
        acknowledgeeForeignAddressProvinceRegion: "",
        acknowledgeeForeignAddressCountry: "",
        acknowledgeeForeignAddressPostalCode: "",

        notifyIndividualOrFamilyEmail: "",
        tedTributeAcknowledgedPhone: "",
        seeAttachedSecuritiesListCheckbox: false,
        security: [{ ...newSecurity() }],
        generalComments: "",
    };
}

export function newTrustDeferredFormValues() {
    return {
        donorUnknownCheckBox: false, // DonorInformation.js
        newDonorCheckBox: false, // DonorInformation.js
        newDonorAddressCheckBox: false, // DonorInformation.js
        donorForeignAddressCheckbox: false, // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        donorPhone: "", // DonorInformation.js
        donorDOB: "", // DonorInformation.js

        tributeChecked: false, // GiftTribute.js
        giftTribute: "In Memory Of", // GiftTribute.js
        tedTributeConstituentId: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js
        inMemoryNewAddress: false, // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        donorDomesticAddressCity: "", // DomesticAddress.js
        donorDomesticAddress: "", // DomesticAddress.js
        donorDomesticAddressState: "", // DomesticAddress.js
        donorDomesticAddressZipCode: "", // DomesticAddress.js

        donorDomesticAddressNewAddress: false,

        donorForeignAddressCity: "",
        donorForeignAddress: "",
        donorForeignAddressProvinceRegion: "",
        donorForeignAddressCountry: "",
        donorForeignAddressPostalCode: "",

        spousePartnerTedConstituentId: "", // SpousePartnerInformation.js
        spousePartnerOrganizationDonorName: "", // SpousePartnerInformation.js
        spousePartnerPhone: "", // SpousePartnerInformation.js
        spousePartnerDOB: "", // SpousePartnerInformation.js

        trustCommitmentType: "Irrevocable Held by UIF", // TrustTypeOfCommitment.js
        heldByUIFChoice: "", // TrustTypeOfCommitment.js
        heldByOthersChoice: "", // TrustTypeOfCommitment.js
        revocableChoice: "", // TrustTypeOfCommitment.js

        dateOfCommitment: "", // TrustDeferredGiftInformation.js
        estimatedDollarValue: "", // TrustDeferredGiftInformation.js
        newTotalIfIncreaseDecrease: "", // TrustDeferredGiftInformation.js
        estateReviewDate: "", // TrustDeferredGiftInformation.js
        expectedMaturityYear: "", // TrustDeferredGiftInformation.js
        increaseDecreasePrior: "No", // TrustDeferredGiftInformation.js
        jointLifeGift: "No", // TrustDeferredGiftInformation.js
        eventualDesignationOfPG: "", // TrustDeferredGiftInformation.js
        endowment: "No", // TrustDeferredGiftInformation.js
        fundAgreement: "", // TrustDeferredGiftInformation.js
        documentation: "", // TrustDeferredGiftInformation.js
        basisForDeterminingValue: "", // TrustDeferredGiftInformation.js
        planOpportunity: "", // TrustDeferredGiftInformation.js
        responsiblePerson: "", // TrustDeferredGiftInformation.js
        trustName: "", // TrustDeferredGiftInformation.js
        lifeIncomeDesignation: "", // TrustDeferredGiftInformation.js

        trustBeneficiary: [{ ...newTrustBeneficiary() }], // TrustBeneficiary.js
    };
}

export function newTrustFormValues() {
    return {
        trustType: "", // TrustDataEntry.js
        dateOfGift: "", // UIFonlyContactInformation.js
        preparedBy: "", // UIFonlyContactInformation.js
        datePrepared: "", // UIFonlyContactInformation.js
        doNotProcessUntilContactedByTrustServices: false, // UIFonlyContactInformation.js
        sourceCode: "", // UIFonlyContactInformation.js

        tributeChecked: false, // GiftTribute.js
        giftTribute: "In Memory Of", // GiftTribute.js
        tedTributeConstituentId: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js
        inMemoryNewAddress: false, // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        newDonorCheckBox: false, // DonorInformation.js
        newDonorAddressCheckBox: false, // DonorInformation.js
        donorUnknownCheckBox: false, // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js

        donorForeignAddressCheckbox: false, //Address.js,

        donorDomesticAddressCity: "", // Address.js
        donorDomesticAddress: "", // Address.js
        donorDomesticAddressState: "", // Address.js
        donorDomesticAddressZipCode: "", // Address.js

        donorDomesticAddressNewAddress: false,

        donorForeignAddressCity: "", // Address.js
        donorForeignAddress: "", // Address.js
        donorForeignAddressProvinceRegion: "", // Address.js
        donorForeignAddressCountry: "", // Address.js
        donorForeignAddressPostalCode: "", // Address.js

        doNotAddSpousePartnerToReceipt: false, // SpousePartnerInformation.js
        doNotGiveSpousePartnerCredit: false, // SpousePartnerInformation.js
        spousePartnerTedConstituentId: "", // SpousePartnerInformation.js
        spousePartnerOrganizationDonorName: "", // SpousePartnerInformation.js

        iraDistribution: "No", // TrustIRADIstribution.js.
        receiptToTrustServices: false, // TrustReceiptTo.js
        receiptToDevelopmentPrograms: false, // TrustReceiptTo.js
        receiptToPlannedGiving: false, // TrustReceiptTo.js
        receiptToOther: "", // TrustReceiptTo.js
        noReceiptNecessary: false, // TrustDataEntry.js

        bankNumber: "25", // TrustBankNumber.js
        security: [], // Security.js
        trustWire: [], // TrustWire.js
        trustCheck: [], // TrustCheck.js
        giftInKind: [], // giftInKind.js
        designation: [{ ...newDesignation() }], // DesignationInformation.js
        otherInformation: "", // TrustOtherInformation.js
        is8283Required: "No", // TrustOtherInformation.js

        is8283RadioButtons: "Gift Admin",
        giftAdmincheckbox: "",
        trustcheckbox: "",

        isGiftPlanned: "No",
        applicationType: "Planned Gift",
    };
}

export function SharedFillForm(setValue) {
    setValue("contactFullName", "Thomas Jones");
    setValue("contactPhone", "(555)-867-5309");
    setValue("contactEmail", "tjones@gmail.com");
    setValue("collegeName", "Fine Arts");
    setValue("departmentName", "English");
    setValue("donationDate", "02-10-2022");
    setValue("preparedBy", "Ted Logan");
    setValue("unitReferenceNumber", "");
    setValue("datePrepared", "04-26-2022");
    // setValue("sourceCode", "14028472984");

    setValue("donorDomesticAddressNewDonor", false);
    setValue("donorDomesticAddressNewAddress", false);
    setValue("tedConstituentId", "4567788");
    setValue("organizationDonorName", "The Jones family");

    setValue("donorDomesticAddress", "2112 S. Rush St.");
    setValue("donorDomesticAddressCity", "Chicago");
    setValue("donorDomesticAddressState", "IL");
    setValue("donorDomesticAddressZipCode", "61111");

    setValue("donorForeignAddressCheckbox", false);
    setValue("newDonorCheckBox", false);
    setValue("donorForeignAddress", "1234 Main St.");
    setValue("donorForeignAddressCity", "Berlin");
    setValue("donorForeignAddressProvinceRegion", "Bavaria");
    setValue("donorForeignAddressCountry", "Germany");
    setValue("donorForeignAddressPostalCode", 80331);

    setValue("publicityCode", "No Restrictions");

    setValue("designation.0.tedDesignationId", "68137");
    setValue("designation.0.tedDesignationTitle", "The first designation");
    setValue("designation.0.designationGiftAmount", 3000);

    setValue("giftInKind.0.descriptionOfGift", "A car");
    setValue("giftInKind.0.giftValue", "3000");

    setValue("designation.0.designationNonGiftAmount", 0);
    setValue("designation.0.designationTotalAmount", 3000);

    setValue(
        "designation.0.designationAdditionalComments",
        "This is a designation additional comment"
    );

    setValue("security.0.shares", "400");
    setValue("security.0.name", "Apple");
    setValue("security.0.symbol", "APPL");

    setValue("generalComments", "An additional comment for Securities");
}

export function SecurtityWireFillForm(setValue) {
    setValue("sourceCode", "14028472984");

    setValue("dateOfGift", "3-22-2021");
    setValue("preparedBy", "Tony Danza");
    setValue("datePrepared", "3-21-2021");

    setValue("donorDomesticAddressNewDonor", false);
    setValue("donorDomesticAddressNewAddress", false);
    setValue("tedConstituentId", "4567788");
    setValue("organizationDonorName", "The Jones family");

    setValue("donorDomesticAddress", "2112 S. Rush St.");
    setValue("donorDomesticAddressCity", "Chicago");
    setValue("donorDomesticAddressState", "IL");
    setValue("donorDomesticAddressZipCode", "61111");

    setValue("donorForeignAddressCheckbox", false);
    setValue("newDonorCheckBox", false);
    setValue("donorForeignAddress", "1234 Main St.");
    setValue("donorForeignAddressCity", "Berlin");
    setValue("donorForeignAddressProvinceRegion", "Bavaria");
    setValue("donorForeignAddressCountry", "Germany");
    setValue("donorForeignAddressPostalCode", 80331);

    setValue("publicityCode", "No Restrictions");

    setValue("designation.0.tedDesignationId", "68137");
    setValue("designation.0.tedDesignationTitle", "The first designation");
    setValue("designation.0.designationGiftAmount", 3000);

    // setValue("giftInKind.0.descriptionOfGift", "");
    // setValue("giftInKind.0.giftValue", "");

    setValue("designation.0.designationNonGiftAmount", 0);
    setValue("designation.0.designationTotalAmount", 3000);

    setValue(
        "designation.0.designationAdditionalComments",
        "This is a designation additional comment"
    );

    setValue("security.0.shares", "400");
    setValue("security.0.name", "Apple");
    setValue("security.0.symbol", "APPL");

    setValue("generalComments", "An additional comment for Securities");
}

export function FillCashCheckGIKForm(setValue) {
    setValue("donorUnknown", false);

    setValue("donorUnknownCheckbox", false);

    setValue("tributeChecked", false);

    setValue("giftTribute", "In Memory Of");

    setValue("deceasedFullName", "Dan Doe");

    setValue("tributeForeignAddressCheckbox", false);
    setValue("inMemoryNewAddress", false);

    setValue("honoreeFullName", "Tom Thumb");

    //  setValue("inMemoryNewAddress", "3215 Tandy");

    setValue("inHonorTedID", "679856");
    setValue("honoreeFullName", "");

    setValue("tributeDomesticAddress", "123 Main Street");
    setValue("tributeDomesticAddressCity", "Burlington");
    setValue("tributeDomesticAddressState", "IA");
    setValue("tributeDomesticAddressZipCode", "42153");

    setValue("tributeForeignAddress", "37 Appleton Rd");
    setValue("tributeForeignAddressCity", "Calgary");
    setValue("tributeForeignAddressProvinceRegion", "AB");
    setValue("tributeForeignAddressCountry", "Canada");
    setValue("tributeForeignAddressPostalCode", "T2G");

    setValue("designationPhoneNumber", "(555)-867-5309");
    setValue("designationEmail", "jdandy@gardenhills.com");

    setValue("designation.0.newDesignationRequestedChecked", false);
    setValue("NonGiftCheckbox.0", false);

    setValue("designation.0.pledgeRevenueId", "9739185");

    setValue("designation.0.departmentContactEmail", "info@designation1.com");
    setValue("designation.0.departmentContact", "John Doe");

    setValue("OpportunityCheckbox.0", false);

    setValue("designation.0.tedHouseholdId", "657954");
    setValue("designation.0.tedHouseholdName", "The Doe Household");
    setValue("designation.0.tedPlanName", "The Doe Plan");
    setValue("designation.0.tedOpportunityAmount", 22000);
    setValue("designation.0.actualAskDate", "01-22-2022");
    setValue("designation.0.primaryPlanManager", "Tom Smith");
    setValue(
        "designation.0.designationAdditionalComments",
        "This is a designation additional comment"
    );

    setValue("tedTributeAcknowledgedFirstName", "David");
    setValue("tedTributeAcknowledgedLastName", "Long");
    setValue("acknowledgeeDomesticAddress", "123 Fourth Ave");
    setValue("acknowledgeeDomesticAddressCity", "Pittsburgh");
    setValue("acknowledgeeDomesticAddressState", "PA");
    setValue("acknowledgeeDomesticAddressZipCode", "32857");
    setValue("acknowledgeeForeignAddress", "6409 S. Archer Blvd");
    setValue("acknowledgeeForeignAddressCity", "Alvina");
    setValue("acknowledgeeForeignAddressProvinceRegion", "AB");
    setValue("acknowledgeeForeignAddressCountry", "CA");
    setValue("acknowledgeeForeignAddressPostalCode", "C5008");

    setValue("notifyIndividualOrFamilyEmail", "thejonesfamily@gmail.com");
    setValue("tedTributeAcknowledgedPhone", "(604)-555-5555");
}

export function FillTrustDeferredForm(setValue) {
    setValue("donorPhone", "312-555-1212");
    setValue("donorDOB", "1-1-1990");
    setValue("donorDomesticAddressNewDonor", false);
    setValue("donorDomesticAddressNewAddress", false);
    setValue("tedConstituentId", "4567788");
    setValue("organizationDonorName", "Bob Jones");

    setValue("donorDomesticAddress", "2112 S. Rush St.");
    setValue("donorDomesticAddressCity", "Chicago");
    setValue("donorDomesticAddressState", "IL");
    setValue("donorDomesticAddressZipCode", "61111");

    setValue("donorForeignAddressCheckbox", false);
    setValue("newDonorCheckBox", false);
    setValue("donorForeignAddress", "1234 Main St.");
    setValue("donorForeignAddressCity", "Berlin");
    setValue("donorForeignAddressProvinceRegion", "Bavaria");
    setValue("donorForeignAddressCountry", "Germany");
    setValue("donorForeignAddressPostalCode", 80331);

    setValue("publicityCode", "No Restrictions");

    setValue("spousePartnerTedConstituentId", "3542354");
    setValue("spousePartnerOrganizationDonorName", "Susan Jones");
    setValue("spousePartnerPhone", "312-444-3345");
    setValue("spousePartnerDOB", "2-1-1989");
    setValue("trustCommitmentType", "Irrevocable Held by UIF");
    setValue("heldByUIFChoice", "Charitable remainder annuity trust");
    setValue("heldByOthersChoice", "Charitable gift annuity");
    setValue("revocableChoice", "Retirement Plan");
    setValue("dateOfCommitment", "3-1-2022");
    setValue("estimatedDollarValue", "10000");
    setValue("newTotalIfIncreaseDecrease", "20000");
    setValue("estateReviewDate", "1-1-2022");
    setValue("expectedMaturityYear", "2042");
    setValue("increaseDecreasePrior", "Yes");
    setValue("jointLifeGift", "Yes");
    setValue("eventualDesignationOfPG", "Eventual Designation Text");
    setValue("endowment", "No");
    setValue("fundAgreement", "UIF existing");
    setValue("documentation", "Documentation Text");
    setValue("basisForDeterminingValue", "Basis for Determining Value Text");
    setValue("planOpportunity", "Plan/Opportunity text");
    setValue("responsiblePerson", "Responsible PErson Text");
    setValue("trustName", "Trust Name Text");
    setValue("lifeIncomeDesignation", "Life Income Designation Text");

    setValue("trustBeneficiary.0.lastName", "Smith");
    setValue("trustBeneficiary.0.firstName", "Frank");
    setValue("trustBeneficiary.0.tedConstituentID", "543435435");
    setValue("trustBeneficiary.0.dateOfBirth", "3-1-2010");
}

export function FillTrustForm(setValue) {
    setValue("dateOfGift", "3-22-2021");
    setValue("preparedBy", "Tony Danza");
    setValue("datePrepared", "3-21-2021");
    setValue("newDonorCheckBox", false);
    setValue("newDonorAddressCheckBox", false);
    setValue("organizationDonorName", "Bob Dobbs");
    setValue("tedConstituentId", "8675309");
    setValue("donorDomesticAddress", "11000 Lower Wacker Drive");
    setValue("donorDomesticAddressCity", "Chicago");
    setValue("donorDomesticAddressState", "IL");
    setValue("donorDomesticAddressZipCode", "61111");

    setValue("donorForeignAddressCheckbox", false);
    setValue("donorForeignAddress", "1234 Main St.");
    setValue("donorForeignAddressCity", "Berlin");
    setValue("donorForeignAddressProvinceRegion", "Bavaria");
    setValue("donorForeignAddressCountry", "Germany");
    setValue("donorForeignAddressPostalCode", 80331);

    setValue("publicityCode", "Anonymous");

    setValue("doNotAddSpousePartnerToReceipt", false);
    setValue("doNotGiveSpousePartnerCredit", false);
    setValue("spousePartnerOrganizationDonorName", "The Hen House");
    setValue("spousePartnerTedConstituentId", "35944651");
    // setValue("iraDistribution", "No");

    setValue("receiptToTrustServices", false);
    setValue("receiptToPlannedGiving", false);
    setValue("receiptToDevelopmentPrograms", false);
    // setValue("receiptToOther", "John Townsend");

    setValue("trustWire.0.bankName", "PNC");
    setValue("trustWire.0.totalValue", "3000");

    setValue("trustCheck.0.checkNumbers", "564532487");
    setValue("trustCheck.0.checkTotal", "5000");

    setValue("otherInformation", "None");

    setValue("designation.0.associatedOpportunityChecked", true);

    setValue("designation.0.tedHouseholdId", "342309842309");
    setValue("designation.0.tedHouseholdName", "The Thompson Family");
    setValue("designation.0.tedPlanName", "T-Plan");
    setValue("designation.0.tedOpportunityAmount", "1000");
    setValue("designation.0.actualAskDate", "3-19-2021");
    setValue("designation.0.primaryPlanManager", "Daniel Peters");

    setValue("designation.0.newDesignationRequestedChecked", false);
    setValue("designation.0.nonGiftPortionChecked", false);

    setValue("designation.0.departmentContactEmail", "email@department.com");
    setValue("designation.0.departmentContact", "William Smith");
    setValue("designation.0.pledgeRevenueId", "4095683454");

    setValue("doNotProcessUntilContactedByTrustServices", false);

    setValue("noReceiptNecessary", false);

    setValue("designation.0.newDesignationRequestedChecked", false);
    setValue("designation.0.nonGiftPortionChecked", false);

    setValue("designation.0.associatedOpportunityChecked", false);

    setValue("is8283Required", "Yes");
    setValue("giftAdmincheckbox", "");
    setValue("trustcheckbox", "");

    setValue("trustCheck.0.checkNumbers", "8675309");
    setValue("trustCheck.0.checkTotal", "8000");
}

function get_date_format(myDate) {
    const addZeroIfNeeded = (num) => {
        return num < 10 ? "0" + num : num.toString();
    };

    let month = myDate.getMonth() + 1;
    month = addZeroIfNeeded(month);
    let day = addZeroIfNeeded(myDate.getDate());

    let year = myDate.getFullYear();
    let hours = addZeroIfNeeded(myDate.getHours());
    let convertHours = hours % 12;
    let mins = addZeroIfNeeded(myDate.getMinutes());
    let ampm = hours >= 12 ? "pm" : "am";
    // let secs = addZeroIfNeeded(myDate.getSeconds());

    return `${month}-${day}-${year} - ${convertHours}:${mins} ${ampm}`;
}
export function SubmitButton() {
    function setTimeStamp() {
        function updateTime() {
            // get the current date
            let currentDate = new Date();
            // convert it to "short time" format
            let t = get_date_format(currentDate);
            // get the DOM element
            let root = document.querySelector("#timestamp");
            // print the formatted date
            if (!(root === null)) {
                root.textContent = t;
            }
        }

        function init() {
            window.setInterval(updateTime);
        }
        init();
    }
    return (
        <Button
            value={{ className: "addButtonIcon" }}
            variant="contained"
            type="submit"
            onClick={setTimeStamp}
        >
            Print Preview
        </Button>
    );
}

export function UrbanaAddress({ headerLine }) {
    return (
        <Typography variant="subtitle2" component="div" className="mb-2">
            {headerLine}
            <br />
            University of Illinois Urbana-Champaign
            <br />
            Cash Receipts
            <br />
            Harker Hall - M/C 386
            <br />
            1305 West Green Street
            <br />
            Urbana, IL 61801
        </Typography>
    );
}

export function CheckAddress({ headerLine }) {
    return (
        <Typography variant="subtitle2" component="div">
            {headerLine}
            <br />
            University of Illinois Foundation
            <br />
            P.O. Box 734500
            <br />
            Chicago, IL 60673-4500
        </Typography>
    );
}

export function ChicagoAddress({ headerLine }) {
    return (
        <Typography variant="subtitle2" component="div" className="mb-2">
            {headerLine}
            <br />
            University of Illinois Chicago - OVCA
            <br />
            SCE 750 S Halsted St. Rm. 550, M/C 100
            <br />
            Chicago, IL 60607
        </Typography>
    );
}

export function SpringfieldAddress({ headerLine }) {
    return (
        <Typography variant="subtitle2" component="div" className="mb-2">
            {headerLine}
            <br />
            University of Illinois Springfield
            <br />
            Business and Stewardship
            <br />
            One University Plaza - PAC591
            <br />
            Springfield, IL 62703
        </Typography>
    );
}

export function SplitLocation() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <>
            <div className="navLinks">
                <div className={splitLocation[1] === "cash" ? "active" : ""}>
                    <h1>Cash Gift Transmittal Form</h1>
                </div>

                <div
                    className={splitLocation[1] === "cashprint" ? "active" : ""}
                >
                    <h1>Cash Gift Transmittal</h1>
                </div>

                <div className={splitLocation[1] === "check" ? "active" : ""}>
                    <h1>Check Gift Transmittal Form</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "checkprint" ? "active" : ""
                    }
                >
                    <h1>Check Gift Transmittal</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "giftinkind" ? "active" : ""
                    }
                >
                    <h1>Gift in Kind Transmittal Form</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "giftinkindprint" ? "active" : ""
                    }
                >
                    <h1>Gift in Kind Transmittal</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "securities" ? "active" : ""
                    }
                >
                    <h1>
                        Securities Gift Transmittal Form{" "}
                        <span>*(UIF Only)</span>
                    </h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "securitiesprint" ? "active" : ""
                    }
                >
                    <h1>
                        Securities Gift Transmittal <span>*(UIF Only)</span>
                    </h1>
                </div>

                <div className={splitLocation[1] === "wire" ? "active" : ""}>
                    <h1>
                        Wire Transmittal Form <span>*(UIF Only)</span>
                    </h1>
                </div>

                <div
                    className={splitLocation[1] === "wireprint" ? "active" : ""}
                >
                    <h1>
                        Wire Transmittal <span>*(UIF Only)</span>
                    </h1>
                </div>

                <div className={splitLocation[1] === "trust" ? "active" : ""}>
                    <h1>Trust Gift Transmittal Form</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "trustprint" ? "active" : ""
                    }
                >
                    <h1>Trust Gift Transmittal</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "trustdeferred" ? "active" : ""
                    }
                >
                    <h1>Trust Deferred Gift Transmittal Form</h1>
                </div>

                <div
                    className={
                        splitLocation[1] === "trustdeferredprint"
                            ? "active"
                            : ""
                    }
                >
                    <h1>Trust Deferred Gift Transmittal</h1>
                </div>
            </div>
        </>
    );
}

// export function GetFormType(formType) {
//     return formType;
// }

export function PrintCampusAddressSwap({ campusLocation, formType }) {
    return (
        <Row className="headerPrint">
            <style>
                {`@media print {.headerPrint{display: block; .addr{display:flex; justify-content:flex-end !important}}}`}
            </style>

            <Row>
                <div className="d-flex col hdrCol ">
                    <img
                        src={process.env.PUBLIC_URL + "/logo.svg"}
                        alt="U of I Foundation Logo"
                        className="logo"
                    />
                </div>
                <Col className="verticalCenter">
                    <Typography
                        variant="h6"
                        className="printHeader"
                        component="h1"
                    >
                        <SplitLocation />
                    </Typography>
                </Col>
                <Col>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <CampusAddress
                            campusLocation={campusLocation}
                            formType={formType}
                        />
                    </Grid>
                </Col>
            </Row>
        </Row>
    );
}

export function PrintCampusAddressSwapNoHeaderAddress({
    campusLocation,
    formType,
}) {
    return (
        <Row className="headerPrint">
            <style>
                {`@media print {.headerPrint{display: block; padding-top:2em !important; .d-flex{display:flex !important}; .addr{display:flex; justify-content:flex-end !important}}}`}
            </style>

            <Row>
                <div className="d-flex col hdrCol">
                    <img
                        src={process.env.PUBLIC_URL + "/logo.svg"}
                        alt="U of I Foundation Logo"
                        className="logo"
                    />
                </div>
                <Col className="verticalCenter">
                    <Typography
                        variant="h6"
                        className="printHeader"
                        component="h1"
                    >
                        <SplitLocation />
                    </Typography>
                </Col>
            </Row>
        </Row>
    );
}

export function CampusAddress({ campusLocation, formType }) {
    var headerLine = "Mail this Transmittal and Gift to:";
    if (formType === "Cash")
        headerLine = "Hand-deliver this Transmittal and Cash to:";
    return formType === "Check" ? (
        <CheckAddress headerLine={headerLine} />
    ) : (
        <>
            {campusLocation === "Urbana-Champaign" ? (
                <UrbanaAddress headerLine={headerLine} />
            ) : campusLocation === "Chicago" ? (
                <ChicagoAddress headerLine={headerLine} />
            ) : campusLocation === "Springfield" ? (
                <SpringfieldAddress headerLine={headerLine} />
            ) : null}
        </>
    );
}
