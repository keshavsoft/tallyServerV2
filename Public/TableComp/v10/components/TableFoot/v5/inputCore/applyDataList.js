const applyDataList = ({
    inInput,
    inName,
    inDataListSource, inDataListFillName
}) => {
    if (!inDataListSource) return;

    inInput.setAttribute("list", `${inName}List`);

    inInput.dataset.dataListSource = inDataListSource;

    if (inDataListFillName) inInput.dataset.dataListFillName = inDataListFillName;
};

export default applyDataList;
