import { Box, Link } from "@mui/material";
import React from "react";

const Links = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                p: 1,
                m: 1,
            }}
        >
            <Link href="/transmittal/cash" underline="none">
                Cash
            </Link>
            <Link href="/transmittal/check" underline="none">
                Check
            </Link>
            <Link href="/transmittal/giftinkind" underline="none">
                Gift in Kind
            </Link>
            <Link href="/transmittal/securities" underline="none">
                Securities
            </Link>
            <Link href="/transmittal/wire" underline="none">
                Wire
            </Link>
            <Link href="/transmittal/trust" underline="none">
                Trust
            </Link>
            <Link href="/transmittal/trustdeferred" underline="none">
                Trust Deferred
            </Link>
        </Box>
    );
};

export default Links;
