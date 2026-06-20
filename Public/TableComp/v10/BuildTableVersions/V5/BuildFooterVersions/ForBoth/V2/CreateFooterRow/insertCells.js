import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow,
    inShowDataList, onChangeFunc, inVisibleColumnsConfig }) => {

    const defaultRow = inDefaultRow;
    // debugger;
    inVisibleColumnsConfig.forEach(loopColumn => {
        const defaultValue = defaultRow ? defaultRow[loopColumn.columnName] : "";
        // console.log("loopColumn: ", loopColumn);

        const createdFooterCell = createFooterCell({
            key: loopColumn.columnName,
            inDefaultValue: defaultValue,
            onChangeFunc,
            showDataList: inShowDataList,
            inColumnsConfig: options.inColumnsConfig,
            inTdClass: loopColumn?.cellConfig?.tdClass,
            inAllowOnChange: loopColumn.allowOnChange,
            inOnChangeType: loopColumn.onChangeType,
            inOnKeyDown: loopColumn?.onKeyDown,
            inOnKeyDownType: loopColumn?.onKeyDownType,
            inDefaultRow: defaultRow,
            inType: loopColumn.type,
            inRightAlign: loopColumn?.cellConfig?.rightAlign,
            inWidth: loopColumn?.cellConfig?.width
        });

        tr.appendChild(createdFooterCell);
    });

};

export { startFunc };
