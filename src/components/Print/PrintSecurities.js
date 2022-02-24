import { ListGroup } from "react-bootstrap";
import PrintOneSecurity from "./PrintOneSecurity";

const PrintSecurities = ({ formValues }) => {
    return (
        <>
            <ListGroup>
                {formValues.security.map((item, index) => {
                    return (
                        <>
                            <PrintOneSecurity
                                oneSecurity={item}
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
export default PrintSecurities;
