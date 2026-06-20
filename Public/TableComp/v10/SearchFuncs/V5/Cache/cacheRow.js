// /TableSearch/Cache/cacheRow.js

import cacheCell from "./cacheCell.js";

const cacheRow = (row) => {
    console.log("  row.textContent : ", row.textContent);

    row.dataset.searchText =
        row.textContent.toLowerCase();

    row._cells =
        [...row.children];

    row._cells.forEach(cacheCell);

};

export default cacheRow;