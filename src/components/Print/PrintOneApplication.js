import { TableCell, TableRow } from "@mui/material";

const PrintOneApplication = ({ oneApplication, index }) => {
    return (
        <TableRow key={"application" + index}>
            <TableCell>{oneApplication.applicationDate}</TableCell>
            <TableCell>{oneApplication.planGiftType}</TableCell>
            <TableCell>{oneApplication.planGiftAmount}</TableCell>
        </TableRow>
    );
};
export default PrintOneApplication;
