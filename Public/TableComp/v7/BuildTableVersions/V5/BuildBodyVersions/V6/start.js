import { buildRow } from "./buildRow.js";

const buildBody = ({ inVisibleColumnsConfig, inTableBody, inData
}) => {

    const dataToShow = inData;
    const tableBody = inTableBody;

    const oldShowActions = tableBody.getAttribute("ks-showActions");
    const oldShowSerial = tableBody.getAttribute("ks-showSerial");

    tableBody.innerHTML = '';
    // tableBody.setAttribute("ks-showActions", inShowActions);

    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial: oldShowSerial === "true",
            inShowActions: oldShowActions === "true"
        });

        tableBody.appendChild(row);
    });
};

export default buildBody;