import getInputOptions from "./getInputOptions.js";
import applyParentCellStyle from "./applyParentCellStyle.js";
import createTextInput from "./createTextInput.js";
import applyDataList from "./applyDataList.js";

import renderInput from "./renderInput.js";

class KsTableFooterInputCore extends HTMLElement {
    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        applyParentCellStyle({
            inElement: this,
            inRightAlign: localOptions.inRightAlign,
            inWidth: localOptions.inWidth
        });

        const localInput =
            createTextInput(localOptions);
        // console.log("localInput------- : ", localInput, localOptions);

        applyDataList({
            inInput: localInput,
            inDataListFillName: localOptions.inDataListFillName
        });

        renderInput({
            inElement: this,
            inInput: localInput
        });

    }
}

if (!customElements.get("ks-table-footer-input")) {
    customElements.define("ks-table-footer-input", KsTableFooterInputCore);
};

console.log("KsTableFooterInputCore component loaded to DOM");

export default KsTableFooterInputCore;
