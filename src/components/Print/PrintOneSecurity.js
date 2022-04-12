import { TableCell, TableRow } from "@mui/material";

const PrintOneSecWireSecurity = ({ oneSecurity, index }) => {
    return (
        <>
            <TableRow key={"security" + index}>
                <TableCell>
                    {/* {formatAmount3(oneSecurity.shares)} */}
                    {oneSecurity.shares}
                </TableCell>
                <TableCell>{oneSecurity.name}</TableCell>
                <TableCell>{oneSecurity.symbol}</TableCell>
            </TableRow>
        </>
    );
};
export default PrintOneSecWireSecurity;
