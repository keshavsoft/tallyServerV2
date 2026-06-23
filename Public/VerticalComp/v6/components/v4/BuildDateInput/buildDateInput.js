export const buildDateInput = ({
    inLabel = "InvoiceDate",
    inName = "InvoiceDate"
} = {}) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center space-x-4 w-1/2";

    const label = document.createElement("label");
    label.className = "w-36 text-sm font-medium";
    label.textContent = inLabel;

    const input = document.createElement("input");
    input.type = "date";
    input.name = inName;
    input.className = "flex-1 border rounded px-3 py-2";

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};
