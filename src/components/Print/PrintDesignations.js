import { ListGroup } from "react-bootstrap";
import PrintOneDesignation from "./PrintOneDesignation";

const PrintDesignations = ({ formValues }) => {
    return (
        <>
            <ListGroup>
                {formValues.designation.map((item, index, key) => {
                    return (
                        <>
                            <PrintOneDesignation
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
export default PrintDesignations;
