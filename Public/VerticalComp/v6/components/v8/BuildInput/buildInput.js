import attachInputEvents from "./attachInputEvents.js";

export const buildInput = ({
    inLabel = "",
    inName = "",
    inType = "text"
} = {}) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center space-x-4 w-1/2";

    const label = document.createElement("label");
    label.className = "w-36 text-sm font-medium";
    label.textContent = inLabel;

    const input = document.createElement("input");
    input.type = inType;
    input.name = inName;
    input.className = "flex-1 border rounded px-3 py-2";

    attachInputEvents({
        inInput: input,
        inOnKeyDown: localOptions.inOnKeyDown,
        inOnKeyDownType: localOptions.inOnKeyDownType,
        inOnChangeFunc: localOptions.inOnChangeFunc,
        inOnChangeType: localOptions.inOnChangeType
    });

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};
