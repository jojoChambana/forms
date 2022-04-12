import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { CampusAddress } from "../components/HelperFunctions";
import RadioButtons from "./RadioButtons";

export default function DepartmentCampus({ formType }) {
    const [radioChanged, setRadioChanged] = useState(false); // needed to force re-render
    const { getValues } = useFormContext();

    return (
        <>
            <CampusAddress
                campusLocation={getValues("campusLocation")}
                formType={formType}
            />
            <RadioButtons
                variableName="campusLocation"
                required={true}
                values={["Urbana-Champaign", "Chicago", "Springfield"]}
                radioChangedFlag={radioChanged}
                setRadioChangedFlag={setRadioChanged}
            />
        </>
    );
}
