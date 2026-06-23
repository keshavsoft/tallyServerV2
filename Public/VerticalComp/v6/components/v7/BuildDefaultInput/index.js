import createInput from "./Input/createInput.js";
import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";

export const startFunc = ({
    inLabel = "",
    inName = "",
    inValue = "",
    inDataListFillName
} = {}) => {
    const wrapper = createWrapper();
    const label = createLabel({ labelText: inLabel });

    const input = createInput({
        name: inName,
        value: inValue,
        inDataListFillName
    });

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};

export default startFunc;
