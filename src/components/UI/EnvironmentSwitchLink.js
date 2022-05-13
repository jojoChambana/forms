import { Link } from "@mui/material";
import { DevEnv, ShowFillButton } from "../HelperFunctions";

export default function EnvironmentSwitchLink() {
    return (
        <Link
            href={`https://transmittal${
                ShowFillButton() ? DevEnv : ""
            }.uif.uillinois.edu/`}
            target="_blank"
            rel="noopener"
        >
            here
        </Link>
    );
}
