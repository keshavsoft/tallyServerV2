// import { buildBody } from "../../BuildBodyVersions/V4/start.js";
// import { buildBody } from "../../BuildBodyVersions/V5/start.js";

import buildBody from "../../BuildBodyVersions/V6/start.js";

// import updateFooter from "../../BuildFooterVersions/ForSummary/V8/UpdateFooter/V5/start.js";

import setFocus from "../../../../SetFocus/V4/index.js";

const startFunc = async ({
    inDataStore,
    inServices,
    inEndPoints,
    inTableBody,
    inVisibleColumnsConfig,
    inShowSerial,
    inShowActions,
    inTableFooter
}) => {
    try {
        // debugger;
        const dataFromFetch = await inServices.actions.getData({
            inEndPoint: inEndPoints.read
        });
        console.log("dataFromFetch : ", dataFromFetch);

        inDataStore.setData(dataFromFetch);

        const dataToShow = inDataStore.getData();

        buildBody({
            inData: dataToShow, inDataStore,
            inTableBody, inServices,
            inVisibleColumnsConfig,
            inShowSerial, inShowActions,
            inEndPoints
        });

        setFocus({ inContainerEl: inTableFooter });
        // updateFooter({
        //     inTableFooter, inShowFooterRows: true,
        //     inShowTotals: true, inData: dataToShow,
        //     inVisibleColumnsConfig,
        // });
        clearValues({ inTableFooter });
    } catch (err) {
        console.error(err);
        return;
    };
};

const clearValues = ({ inTableFooter }) => {
    const footerInputs = inTableFooter.querySelectorAll("input");

    for (const th of footerInputs) {
        th.value = "";
    };

};

export default startFunc;