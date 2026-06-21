// import "../WebComponents/v2/nav/index.js";

export const buildNav = ({ inTitle = {}, inUiClasses = {} }) => {
    const nav = document.createElement("ks-nav");

    nav.setAttribute("ks-title", inTitle.text || "");
    nav.setAttribute("ks-title-id", inTitle.htmlId || "");
    nav.setAttribute("ks-ul-class", inUiClasses?.ulClass || "");

    return nav;
};
