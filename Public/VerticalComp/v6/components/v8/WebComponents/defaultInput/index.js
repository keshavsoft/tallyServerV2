import buildDefaultInput from "../../BuildDefaultInput/index.js";

class KsDataListInput extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        const { wrapper } = buildDefaultInput({
            inLabel: this.getAttribute("label") || "",
            inName: this.getAttribute("ksName") || "",
            inValue: this.getAttribute("ksInValue") || "",
            inDataListSource: this.getAttribute("ksDataListSource") || "",
            inDataStore: this.dataStore,
            inOnChange: value => this.onChange?.(value),
            inDataListFillName: this.getAttribute("ksDataListFillName")
        });

        this.appendChild(wrapper);
    }
}

customElements.define("ks-input", KsDataListInput);

export default KsDataListInput;
