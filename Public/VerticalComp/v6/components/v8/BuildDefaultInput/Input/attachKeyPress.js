import executeKeyDownType from "./ExecuteKeyDownType/v1/start.js";

const attachDataListChange = ({
    input,
    dataListSource,
    dataStore,
    onChange, inOnKeyDownType
}) => {
    input.addEventListener("keydown", event => {

        const value = event.target.value;

        if (event.key === "Enter") {
            // console.log(`Key pressed: ${event.key}`, value, inOnKeyDownType);
            executeKeyDownType({ currentInput: input, inOnKeyDownType });
        };
        // onKeyDown
        //         onChange?.(value);

        //         applyDataListSelection({
        //             dataListSource,
        //             dataStore,
        //             inputValue: value,
        //             currentInput: input
        //         });
    });
};

export default attachDataListChange;
