import { TextField } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator={true}
            // isNumericString
        />
    );
}

function App() {
    const [values, setValues] = React.useState(0);

    const handleChange = (event) => {
        setValues(parseInt(event.target.value));
    };

    return (
        <div className="App">
            <TextField
                value={values.toFixed(2)}
                onChange={handleChange}
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
        </div>
    );
}
export default App;
