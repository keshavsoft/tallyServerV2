export const callKSTable = async (config) => {
    if (window?.KSVertical?.initCreate) {
        window.KSVertical.initCreate(config).then(fromPromise => {
            ksTable1 = fromPromise
        });
    };
};

export const callKSTable1 = async (config) => {
    if (window?.KSVertical?.initCreate) {
        return window.KSVertical.initCreate(config);
    };
};