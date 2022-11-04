import miImagen from "./icon/escudogn.png"
const createNodes = () => {
    let sectionG = document.createElement("section");
    sectionG.classList.add("contenedor-graf-todo");
    document.body.appendChild(sectionG);
 
    let articleInd = document.createElement("article");
    articleInd.classList.add("indicators");
    sectionG.appendChild(articleInd);
    let divTableValues = document.createElement("div");
    divTableValues.classList.add("tableValues");
    articleInd.appendChild(divTableValues);
    divTableValues.innerHTML="<H3>Seleccione: </H3>";

    let selectCase = document.createElement("select");
    selectCase.id = "idCase";
    divTableValues.appendChild(selectCase);
    
    let optionH = document.createElement("option");
    optionH.value = "1";
    optionH.text = "HOMICIDIO"
    optionH.selected=true;
    selectCase.add(optionH);

    let optionS = document.createElement("option");
    optionS.value = "2";
    optionS.text = "SECUESTRO"
    selectCase.add(optionS);

    let optionR = document.createElement("option");
    optionR.value = "3";
    optionR.text = "ROBO"
    selectCase.add(optionR);
    
    let divColorsCode = document.createElement("div");
    divColorsCode.classList.add("colorsCode");
    articleInd.appendChild(divColorsCode); 
    divColorsCode.innerHTML="Indicadores";
 
    let articleMap = document.createElement("article");
    articleMap.classList.add("contentMap");
    sectionG.appendChild(articleMap);
 
    let divMapTitle = document.createElement("div");
    divMapTitle.classList.add("mapTitle");
    articleMap.appendChild(divMapTitle);
    divMapTitle.innerHTML="Total delitos 2019";
 
    let divMap = document.createElement("div");
    divMap.classList.add("map");
    divMap.id = "map";
    articleMap.appendChild(divMap);

    let navbarIcon = document.getElementById("navbarIcon");
    navbarIcon.src=`${miImagen}`
 }

 export { createNodes }
 