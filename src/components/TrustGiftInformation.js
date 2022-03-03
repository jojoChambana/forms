import {
    RadioGroup,
    Radio,
    Checkbox,
    FormControlLabel,
    FormLabel,
    FormControl,
    Button,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import Security from "./Security";
import TrustWire from "./TrustWire";
import TrustCheck from "./TrustCheck";
import TrustGIK from "./TrustGIK";

export default function TrustGiftInformation({
    onSubmit,
    showAnonymousDonorCheckBox,
}) {
    const { control, getValues } = useFormContext();

    const logIt = () => {
        console.log("iraDistribution", getValues("iraDistribution"));
        console.log(
            "receiptToTrustServices",
            getValues("receiptToTrustServices")
        );
        console.log(
            "receiptToDevelopmentPrograms",
            getValues("receiptToDevelopmentPrograms")
        );
        console.log(
            "receiptToPlannedGiving",
            getValues("receiptToPlannedGiving")
        );
        console.log("gik", getValues("trustGIK"));
    };

    return (
        <>
            <Row>
                <Col>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            IRA Distribution
                        </FormLabel>
                        <Controller
                            rules={{ required: true }}
                            control={control}
                            name="iraDistribution"
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio />}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormLabel component="legend">Receipt To: </FormLabel>
                </Col>

                {/* Trust Services Checkbox*/}
                <Col>
                    <FormControl component="fieldset">
                        <Controller
                            rules={{ required: true }}
                            control={control}
                            name="receiptToTrustServices"
                            render={({ field }) => (
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                />
                            )}
                        />
                    </FormControl>
                    <FormLabel component="legend">Trust Services</FormLabel>
                </Col>

                {/* Development Programs Checkbox*/}
                <Col>
                    <FormControl component="fieldset">
                        <Controller
                            rules={{ required: true }}
                            control={control}
                            name="receiptToDevelopmentPrograms"
                            render={({ field }) => (
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                />
                            )}
                        />
                    </FormControl>
                    <FormLabel component="legend">
                        Development Programs
                    </FormLabel>
                </Col>

                {/* Planned Giving Checkbox*/}
                <Col>
                    <FormControl component="fieldset">
                        <Controller
                            rules={{ required: true }}
                            control={control}
                            name="receiptToPlannedGiving"
                            render={({ field }) => (
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                />
                            )}
                        />
                    </FormControl>
                    <FormLabel component="legend">Planned Giving</FormLabel>
                </Col>
            </Row>
            <Security />
            <TrustWire />
            <TrustCheck />
            <TrustGIK />
            <Button onClick={logIt}>Console Log Values</Button>
        </>
    );
}
