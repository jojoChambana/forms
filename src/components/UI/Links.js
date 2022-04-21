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
            <Link href="/cash" underline="none">
                Cash
            </Link>
            <Link href="/check" underline="none">
                Check
            </Link>
            <Link href="/giftinkind" underline="none">
                Gift in Kind
            </Link>
            <Link href="/securities" underline="none">
                Securities
            </Link>
            <Link href="/wire" underline="none">
                Wire
            </Link>
            {/* <Link href="/trust" underline="none">
                Trust
            </Link>
            <Link href="/trustdeferred" underline="none">
                Trust Deferred
            </Link> */}
        </Box>
    );
};

export default Links;
