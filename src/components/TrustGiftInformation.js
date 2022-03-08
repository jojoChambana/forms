import {
    RadioGroup,
    Radio,
    Checkbox,
    FormControlLabel,
    FormLabel,
    FormControl,
    Button,
    Container,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Security from "./Security";
import TrustWire from "./TrustWire";
import TrustCheck from "./TrustCheck";
import TrustGIK from "./TrustGIK";
import TrustDepartmentInformation from "./TrustDepartmentInformation";
import DonorInformation from "./DonorInformation";
import SpousePartnerInformation from "./SpousePartnerInformation";
import TrustIRADistribution from "./TrustIRADistribution";
import TrustReceiptTo from "./TrustReceiptTo";
import TrustOtherInformation from "./TrustOtherInformation";
import { SubmitButton } from "../components/HelperFunctions";

export default function TrustGiftInformation({
    onSubmit,
    showAnonymousDonorCheckBox,
}) {
    const { getValues, setValue, handleSubmit } = useFormContext();

    // we use this to trigger a render operation when a checkbox is checked.  Used in the handleChange events for the checkboxes
    const [aCheckboxChanged, setaCheckboxChanged] = useState(false);
    const [nonDeferredSelected, setNonDeferredSelected] = useState(false);
    const [otherTrustTypeSelected, setOtherTrustTypeSelected] = useState(false);

    // const logIt = () => {
    //     console.log("iraDistribution", getValues("iraDistribution"));
    //     console.log(
    //         "receiptToTrustServices",
    //         getValues("receiptToTrustServices")
    //     );
    //     console.log(
    //         "receiptToDevelopmentPrograms",
    //         getValues("receiptToDevelopmentPrograms")
    //     );
    //     console.log(
    //         "receiptToPlannedGiving",
    //         getValues("receiptToPlannedGiving")
    //     );
    //     console.log("trustGIK", getValues("trustGIK"));
    // };

    function NonDeferredSelected() {
        return getValues("trustType") === "Deferred Gift Only";
    }

    function OtherTrustTypeSelected() {
        return (
            getValues("trustType") !== "Deferred Gift Only" &&
            getValues("trustType") !== ""
        );
    }

    return (
        <Container className="pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <RadioGroup
                            row
                            aria-labelledby="trustType"
                            value={getValues("trustType")}
                            onChange={(event) => {
                                setValue("trustType", event.target.value); // set the rect hook array element appropriately
                                setaCheckboxChanged(!aCheckboxChanged); // this will trigger a re-render of the page to hide/show elements
                            }}
                            name="trustType"
                        >
                            <FormControlLabel
                                value="Outright"
                                control={<Radio />}
                                label="Outright"
                            />
                            <FormControlLabel
                                value="Estate"
                                control={<Radio />}
                                label="Estate"
                            />
                            <FormControlLabel
                                value="Life Income"
                                control={<Radio />}
                                label="Life Income"
                            />
                            <FormControlLabel
                                value="Life Insurance"
                                control={<Radio />}
                                label="Life Insurance"
                            />
                            <FormControlLabel
                                value="Deferred Gift Only"
                                control={<Radio />}
                                label="Deferred Gift Only"
                            />
                        </RadioGroup>
                    </Col>
                </Row>
                {OtherTrustTypeSelected() && (
                    <>
                        <TrustDepartmentInformation
                            trustType={getValues("trustType")}
                        />
                        <DonorInformation showAnonymousDonorCheckBox={false} />
                        {getValues("trustType") !== "Estate" && (
                            <SpousePartnerInformation />
                        )}
                        {getValues("trustType") === "Outright" && (
                            <TrustIRADistribution />
                        )}

                        <TrustReceiptTo trustType={getValues("trustType")} />
                        <Security alwaysShowSecurtityDeleteButtons={true} />
                        <TrustWire />
                        <TrustCheck />
                        <TrustGIK />
                        <TrustOtherInformation />
                    </>
                )}
                {/* <Button onClick={logIt}>Console Log Values</Button> */}
                <SubmitButton />
            </form>
        </Container>
    );
}
