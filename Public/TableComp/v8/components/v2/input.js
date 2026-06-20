import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";

class KsTableFooterInput extends HTMLElement {
    connectedCallback() {
        const onKeyDown = this.ksOnKeyDown;
        const onKeyDownType = this.ksOnKeyDownType;
        const name = this.ksName || "";
        const className = this.ksClassName || "w-full border rounded px-2 py-1";

        const type = this.ksType;
        const placeholder = this.ksPlaceholder;
        const showDataList = this.ksShowDataList;
        const inColumnsConfig = this.ksInColumnsConfig;

        const input = document.createElement("input");

        input.type = type;
        input.placeholder = placeholder;
        input.name = name;
        input.setAttribute("class", className);

        const findColumn = inColumnsConfig.find(
            element => element.columnName === name
        );

        if (showDataList && findColumn?.tableFooterDataListShow) {
            input.setAttribute("list", `${name}List`);
            input.dataset.dataListSource =
                findColumn.dataListSource;
        }

        attachKeyDownEvent({
            input, inOnKeyDown: onKeyDown,
            inOnKeyDownType: onKeyDownType
        });

        this.appendChild(input);
    }
}

customElements.define("ks-table-footer-input", KsTableFooterInput);

export default {};
