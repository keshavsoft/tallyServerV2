import classFromInputCore from "../inputCore/index.js";

class KsTableFooterInputCore extends classFromInputCore {
    connectedCallback() {
        super.connectedCallback();
    }
};

if (!customElements.get("ks-table-footer-input")) {
    customElements.define("ks-table-footer-input", KsTableFooterInputCore);
};

console.log("KsTableFooterInputCore component loaded to DOM");

export default KsTableFooterInputCore;
