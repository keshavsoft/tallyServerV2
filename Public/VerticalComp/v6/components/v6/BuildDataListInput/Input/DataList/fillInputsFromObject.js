const fillInputsFromObject = ({
    container,
    sourceObject,
    skipInput
}) => {
    Object.entries(sourceObject).forEach(([key, value]) => {
        const selector = `[data-data-list-fill-name="${CSS.escape(key)}"]`;
        const input = container.querySelector(selector);

        if (!input || input === skipInput) return;

        input.value = value ?? "";
    });
};

export default fillInputsFromObject;
