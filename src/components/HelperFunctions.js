import { Button, Grid, Typography } from "@mui/material";
import { set } from "date-fns";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";

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
    //console.log(newValue);
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
            amount = amount.toFixed(2);
        }
    }
    return amount;
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

export function newFormValues() {
    return {
        contactFullName: "", // ContactInformation.js
        contactPhone: "", // ContactInformation.js
        contactEmail: "", // ContactInformation.js
        collegeName: "", // ContactInformation.js

        campusLocation: "Urbana", // DepartmentCampus.js
        designationAdditionalComments: "", //DesignationInformation.js
        newDesignationRequestedChecked: "", //DesignationInformation.js
        departmentContactEmail: "", //DesignationInformation.js
        departmentContact: "", //DesignationInformation.js
        tedDesignationId: "", //DesignationInformation.js
        tedDesignationTitle: "", //DesignationInformation.js
        totalDesignationAmount: "", //DesignationInformation.js
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

        donorUnknownCheckBox: "", // DonorInformation.js
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
        giftTribute: "In memory of", // GiftTribute.js
        tedTributeConstituentId: "", // GiftTribute.js
        deceasedFullName: "", // GiftTribute.js
        inMemoryNewAddress: "", // GiftTribute.js
        inHonorTedID: "", // GiftTribute.js
        honoreeFullName: "", // GiftTribute.js

        departmentName: "", // NameEmail.js
        donationDate: "", // NameEmail.js
        preparedBy: "", // NameEmail.js
        unitReferenceNumber: "", // NameEmail.js

        newDonorCheckBox: "", // NewDonor.js
        designation: [{ ...newDesignation() }],
        nonGiftPortionChecked: "", // NonGiftPortion.js
        nonGiftTedId: "", // NonGiftPortion.js
        giftTedAmount: "", // NonGiftPortion.js
        nonGiftTedAmount: "", // NonGiftPortion.js

        nonGiftAmount: 0, // NonGiftPortion.js

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

        notifyIndividualOrFamily: false,
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
    };
}

export function newSecWireFormValues() {
    return {
        foreignDonor: "", // Address.js

        contactFullName: "", // ContactInformation.js
        contactPhone: "", // ContactInformation.js
        contactEmail: "", // ContactInformation.js
        collegeName: "", // ContactInformation.js

        donorDomesticAddressCity: "", // DomesticAddress.js
        donorDomesticAddress: "", // DomesticAddress.js
        donorDomesticAddressState: "", // DomesticAddress.js
        donorDomesticAddressZipCode: "", // DomesticAddress.js
        donorDomesticAddressNewAddress: false,

        donorForeignAddressCity: "",
        donorForeignAddress: "",
        donorForeignAddressProvinceRegion: "",
        donorForeignAddressPostalCode: "",

        donorUnknownCheckBox: false, // DonorInformation.js
        tedConstituentId: "", // DonorInformation.js
        organizationDonorName: "", // DonorInformation.js

        departmentName: "", // NameEmail.js
        // donationDate: date, // NameEmail.js
        preparedBy: "", // NameEmail.js
        unitReferenceNumber: "", // NameEmail.js

        newDonorCheckBox: "", // NewDonor.js
        designation: [{ ...newDesignation() }],
        security: [{ ...newSecurity() }],

        publicityCode: "No Restrictions", // publicityDropDown.js

        // totalDonationAmount: "", // TotalDonationAmount.js

        giftTotal: 0, // TransmittalTotals.js
        nonGiftTotal: 0, // TransmittalTotals.js
        overallTotal: 0, // TransmittalTotals.js
    };
}

export function SharedFillForm(setValue) {
    setValue("campusLocation", "Chicago");

    setValue("contactFullName", "Thomas Jones");
    setValue("contactPhone", "(555)-867-5309");
    setValue("contactEmail", "tjones@gmail.com");
    setValue("collegeName", "Fine Arts");
    setValue("departmentName", "English");
    setValue("donationDate", "02-10-2022");
    setValue("preparedBy", "Ted Logan");
    setValue("unitReferenceNumber", "");

    setValue("donorDomesticAddressNewDonor", false);
    setValue("donorDomesticAddressNewAddress", false);
    setValue("tedConstituentId", "4567788");
    setValue("organizationDonorName", "The Jones family");

    setValue("donorDomesticAddress", "2112 S. Rush St.");
    setValue("donorDomesticAddressCity", "Chicago");
    setValue("donorDomesticAddressState", "IL");
    setValue("donorDomesticAddressZipCode", "61111");

    setValue("donorForeignAddressCheckbox", false);

    setValue("donorForeignAddress", "1234 Main St.");
    setValue("donorForeignAddressCity", "Berlin");
    setValue("donorForeignAddressProvinceRegion", "Bavaria");
    setValue("donorForeignAddressCountry", "Germany");
    setValue("donorForeignAddressPostalCode", 80331);

    setValue("publicityCode", "No Restrictions");

    setValue("designation.0.tedDesignationId", "68137");
    setValue("designation.0.tedDesignationTitle", "The first designation");
    setValue("designation.0.designationGiftAmount", 3000);

    setValue("designation.0.designationNonGiftAmount", 0);
    setValue("designation.0.designationTotalAmount", 3000);

    setValue(
        "designation.0.designationAdditionalComments",
        "This is a designation additional comment"
    );
}

export function FillCashCheckGIKForm(setValue) {
    setValue("donorUnknown", false);

    setValue("donorUnknownCheckbox", false);

    setValue("tributeChecked", false);

    setValue("giftTribute", "In memory of");

    setValue("deceasedFullName", "Dan Doe");

    setValue("tributeForeignAddressCheckbox", false);
    setValue("inMemoryNewAddress", false);

    setValue("inMemoryNewAddress", "3215 Tandy");

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
export function SubmitButton() {
    return (
        <IconContext.Provider>
            <Button
                value={{ className: "addButtonIcon" }}
                variant="contained"
                type="submit"
            >
                Submit
            </Button>
        </IconContext.Provider>
    );
}
export function UrbanaAddress(props) {
    return (
        <Typography variant="subtitle2" component="div">
            University of Illinois at Urbana-Champaign
            <br />
            Cash Receipts
            <br />
            Harker Hall - M/C 386
            <br />
            Urbana, IL 61801
        </Typography>
    );
}

export function ChicagoAddress(props) {
    return (
        <Typography variant="subtitle2" component="div">
            University of Illinois at Chicago - OVCA
            <br />
            SCE 750 S Halsted St. Rm. 550, M/C 100
            <br />
            Chicago, IL 60607
        </Typography>
    );
}

export function SpringfieldAddress(props) {
    return (
        <Typography variant="subtitle2" component="div">
            University of Illinois at Springfield
            <br />
            Business and Stewardship
            <br />
            One University Plaza - PAC591
            <br />
            Springfield, IL 62703
        </Typography>
    );
}

export function PrintCampusAddressSwap({ campusLocation }) {
    return (
        <Row className="headerPrint">
            <style>
                {`@media print {.headerPrint{display: block; padding-top:2em !important; .addr{display:flex; justify-content:flex-end !important}}}`}
            </style>

            <Row>
                <Col>
                    <img
                        src={process.env.PUBLIC_URL + "logo.svg"}
                        alt="U of I Foundation Logo"
                        className="logo"
                    />
                </Col>
                <Col>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        {campusLocation === "Urbana" ? (
                            <UrbanaAddress />
                        ) : campusLocation === "Chicago" ? (
                            <ChicagoAddress />
                        ) : campusLocation === "Springfield" ? (
                            <SpringfieldAddress />
                        ) : null}
                    </Grid>
                </Col>
            </Row>
        </Row>
    );
}
