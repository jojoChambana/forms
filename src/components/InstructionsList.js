import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Instructionslist = () => {
    return (
        <div className="indent-list">
            <List
                sx={{
                    listStylePosition: "outside",
                }}
                className="pt-0"
            >
                <ListItem
                    sx={{
                        listStyleType: "disc",
                        display: "list-item",
                    }}
                >
                    <ListItemText
                        primary="Fill out a separate transmittal based on
                    the type of gift"
                    />
                </ListItem>
                <ListItem
                    sx={{
                        listStyleType: "disc",
                        display: "list-item",
                    }}
                >
                    <ListItemText
                        primary="Include any and all documentation
                    associated with the gift(s)"
                    />
                </ListItem>
                <ListItem
                    sx={{
                        listStyleType: "disc",
                        display: "list-item",
                    }}
                >
                    <ListItemText primary="All transmittals are one donor per transmittal" />
                </ListItem>

                <ListItem
                    sx={{
                        listStyleType: "disc",
                        display: "list-item",
                    }}
                >
                    <ListItemText
                        primary='Please do not print from this page. Fill out the form and
                    click the "Print Preview" button.'
                    />
                </ListItem>

                <ListItem
                    sx={{
                        listStyleType: "disc",
                        display: "list-item",
                    }}
                >
                    <ListItemText primary="Required fields are marked with an *" />
                </ListItem>
            </List>
        </div>
    );
};

export default Instructionslist;
