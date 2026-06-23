import getInputOptions from "./getInputOptions.js";
import applyParentCellStyle from "./applyParentCellStyle.js";
import createTextInput from "./createTextInput.js";
import applyDataList from "./applyDataList.js";

import renderInput from "./renderInput.js";
import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

class KsTableFooterInputCore extends HTMLElement {
    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        this.localOptions = localOptions;

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


        attachEnterKeyEvent(localInput);
        
        localInput.addEventListener("keydown1", (event) => {
            if (event.key !== "Enter") return;

            event.preventDefault();

            const currentInput = event.currentTarget;

            const tr = currentInput.closest("tr");

            const inputs = [...tr.querySelectorAll("input")];

            const currentIndex = inputs.indexOf(currentInput);

            const nextInput = inputs[currentIndex + 1];

            if (nextInput) {
                nextInput.focus();
                nextInput.select();
            }
        });

        renderInput({
            inElement: this,
            inInput: localInput
        });

    }
}

export default KsTableFooterInputCore;
