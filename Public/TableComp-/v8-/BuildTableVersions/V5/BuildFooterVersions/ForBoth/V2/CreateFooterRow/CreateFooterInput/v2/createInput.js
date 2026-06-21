// import { createInputComponent } from "../../../../../../../../components/v2/input.js";

const createInput = ({
    type = "text",
    key,
    className,
    inOnKeyDown, inColumnsConfig,
    inOnKeyDownType, showDataList
} = {}) => {
    const input = document.createElement("ks-table-footer-input");

    input.ksType = type;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksOnKeyDown = inOnKeyDown;
    input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    // console.log("1111111111 : ", input, inOnKeyDown, inOnKeyDownType);
    return input;
};

// const createInput = ({ key }) => {
//     return createInputComponent({
//         type: "text",
//         placeholder: key,
//         name: key,
//         className: "w-full px-2 py-1 border rounded text-md"
//     });
// };

export default createInput;
