import { Button } from "@mui/material";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ButtonsBackPrint = (props) => {
    const navigate = useNavigate();
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    <>
        <Row>
            <Col className="d-flex col justify-content-center">
                <Button variant="contained" onClick={handlePrint}>
                    Print Document
                </Button>
            </Col>
            <Col>
                <Button
                    variant="contained"
                    className="buttonClass"
                    onClick={() => {
                        navigate(props.returnUrl);
                    }}
                >
                    Back
                </Button>
            </Col>
        </Row>
    </>;
};

export default ButtonsBackPrint;
