import attachDataListChange from "./Input/attachDataListChange.js";
import createInput from "./Input/createInput.js";
import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";
import attachCurrentRowFocus from "./Input/attachCurrentRowFocus.js";

export const buildDataListInput = ({
    inLabel = "",
    inName = "",
    inList = "",
    inSource = "",
    inValue = "",
    inDataListSource,
    inDataStore,
    inOnChange
} = {}) => {
    const wrapper = createWrapper();
    const label = createLabel({ labelText: inLabel });
    const input = createInput({
        name: inName,
        list: inList,
        source: inSource,
        value: inValue,
        dataListSource: inDataListSource
    });

    attachCurrentRowFocus({ input });

    attachDataListChange({
        input,
        dataListSource: inDataListSource,
        dataStore: inDataStore,
        onChange: inOnChange
    });

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};

export default buildDataListInput;
