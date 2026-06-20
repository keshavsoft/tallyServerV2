// /TableSearch/Filter/filterRow.js

const filterRow = ({
    row,
    searchValue
}) => {
    console.log("row : ", row);

    const matched =
        row.dataset.searchText.includes(searchValue);

    row.style.display =
        matched
            ? ""
            : "none";

};

export default filterRow;