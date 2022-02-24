import { ListGroup } from "react-bootstrap";
import PrintOneSecWireDesignation from "./PrintOneSecWireDesignation";

const PrintSecWireDesignations = ({ formValues }) => {
    return (
        <>
            <ListGroup>
                {formValues.designation.map((item, index) => {
                    return (
                        <>
                            <PrintOneSecWireDesignation
                                oneDesignation={item}
                                index={index}
                                key={"oneDesig" + index}
                            />
                        </>
                    );
                })}
            </ListGroup>
        </>
    );
};
export default PrintSecWireDesignations;
