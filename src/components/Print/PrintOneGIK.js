import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../HelperFunctions";
export default function PrintOneGIK({ oneGiftInKind, index }) {
    return (
        <>
            <TableRow key={"giftInKind" + index}>
                <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "50%", fontWeight: "bold" }}
                >
                    {oneGiftInKind.descriptionOfGift}
                </TableCell>
                <TableCell style={{ width: "123px" }}>
                    {formatAmount(oneGiftInKind.giftValue)}
                </TableCell>
            </TableRow>
        </>
    );
}

{
    /* <div className="row tableIsh" key={"giftInKind" + index}>
<div className="col">
    <span className="normal">
        {oneGiftInKind.descriptionOfGift}
    </span>
</div>
<div className="col">
    <span className="normal">
        {formatAmount(oneGiftInKind.giftValue)}
    </span>
</div>
</div> */
}
