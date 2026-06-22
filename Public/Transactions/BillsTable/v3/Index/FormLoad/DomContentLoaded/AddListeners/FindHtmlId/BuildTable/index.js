import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

const startFunc = async (pk) => {
    const config = await getKSTableConfig();

    config.endPoints.read = config.endPoints.read.replace("<pk>", pk);

    config.endPoints.findFromParams = config.endPoints.findFromParams.replace("<pk>", pk);

    await callKSTable(config);
};

export default startFunc;