import { buildInput } from "../../BuildInput/buildInput.js";

class KsInput extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        const { wrapper } = buildInput({
            inLabel: this.getAttribute("label") || "",
            inName: this.getAttribute("name") || "",
            inType: this.getAttribute("type") || "text"
        });

        this.appendChild(wrapper);
    }
}

customElements.define("ks-input", KsInput);

export default KsInput;
