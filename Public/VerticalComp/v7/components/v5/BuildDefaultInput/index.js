import createInput from "./Input/createInput.js";
import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";

import attachKeyPress from "./Input/attachKeyPress.js";

export const startFunc = ({
    inLabel = "",
    inName = "", inType,
    inValue = "", inOnKeyDownType,
    inDataListFillName, inAllowOnChange
} = {}) => {
    const wrapper = createWrapper();
    const label = createLabel({ labelText: inLabel });

    const input = createInput({
        name: inName,
        value: inValue,
        inDataListFillName, inType
    });

    if (inAllowOnChange) {
        attachKeyPress({ input, inOnKeyDownType })
    };

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};

export default startFunc;
