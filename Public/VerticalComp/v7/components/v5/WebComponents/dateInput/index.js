import { buildDateInput } from "../../BuildDateInput/buildDateInput.js";

class DateInput extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        const { wrapper } = buildDateInput({
            inLabel: this.getAttribute("label") || "InvoiceDate",
            inName: this.getAttribute("name") || "InvoiceDate"
        });

        this.appendChild(wrapper);
    }
}

customElements.define("date-input", DateInput);

export default DateInput;
