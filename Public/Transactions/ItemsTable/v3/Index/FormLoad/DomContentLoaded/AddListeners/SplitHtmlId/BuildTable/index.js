import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

const startFunc = async () => {
    const config = await getKSTableConfig();

    await callKSTable(config);

    let jVarLocalWithSerialHtmlId = document.getElementById('WithSerialHtmlId');

    jVarLocalWithSerialHtmlId.click();
};

export default startFunc;