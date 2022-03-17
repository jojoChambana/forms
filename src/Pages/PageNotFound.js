import { Box, Typography } from "@mui/material";
import Links from "../components/UI/Links";

export default function PageNotFound() {
    return (
        <>
            <Links />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    height: "80vh",
                    p: 1,
                    m: 1,
                }}
            >
                <div className="d-flex align-items-center">
                    <Typography>404 Page not found.</Typography>
                </div>
            </Box>
        </>
    );
}
