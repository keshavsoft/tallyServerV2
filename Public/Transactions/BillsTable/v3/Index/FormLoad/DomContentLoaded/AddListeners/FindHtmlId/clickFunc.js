import buildTable from "./BuildTable/index.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    // console.log("inCurrentTarget : ", inCurrentTarget);
    applyActive({ inCurrentTarget });
    // inCurrentTarget.classList.add("active");

    const pk = prompt("Enter PK");

    if (pk === null || pk.trim() === "") return;

    buildTable(pk).then();
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

export { clickFuncToRun };