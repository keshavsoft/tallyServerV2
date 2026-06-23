export const callKSTable = async (config) => {
    if (window?.KSTableComp?.initShowTable) {
        window.KSTableComp.initShowTable(config).then(fromPromise => {
            ksTable2 = fromPromise
        });
    };
};