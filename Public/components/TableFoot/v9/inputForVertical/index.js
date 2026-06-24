import classFromInputCore from "../inputCore/index.js";
import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";

class KsTableFooterInputCore extends classFromInputCore {
    connectedCallback() {
        super.connectedCallback();

        const wrapper = createWrapper({ inRowClass });
        const label = createLabel({ labelText: inLabel, inLabelClass });

        attachEnterKeyEvent(this);
    }
};

if (!customElements.get("ks-input")) {
    customElements.define("ks-input", KsTableFooterInputCore);
};

console.log("KsTableFooterInputCore component loaded to DOM");

export default KsTableFooterInputCore;
