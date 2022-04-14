import { FormControl } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";

function PhoneField({ register }) {
    const [phoneCode] = React.useState("");

    return (
        <FormControl name="phone">
            <MuiPhoneNumber
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                placeholder="Phone"
                required
                {...register("contactPhone")}
                label="Phone"
                className="maxWidth"
                // {...register("contactPhone")}
                variant="outlined"
                value={phoneCode}
                defaultCountry={"us"}
            />
        </FormControl>
    );
}

export default PhoneField;
