import { Loader } from '@googlemaps/js-api-loader';
import { createNodes } from './elementTag.js'
import { getValueCase } from './conexion.js'
import css from "./app.css";
import a1 from "./geojson/1.geojson";

const apiOptions = {
    apiKey: "AIzaSyBCAZSVpKKwsSht8cCXGYftuXgrsh_8uaU"
}
const loader = new Loader(apiOptions);

const gMapsExec = loader.load().then(() => {
    createNodes();
    setMaps();
})
  
const setMaps = () => {
  const mapOptions = {
    center: new google.maps.LatLng(23.361846, -102.177053),
    zoom: 5,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,  //deshabilita funciones de control como tipo de mapa o stretwiew
    disableDoubleClickZoom: true,
    draggable:true, //inhabilita el poder arrastrar el mapa con el raton
    scrollwheel:true, // hacer zoom con el scroll del raton
    draggableCursor: 'hand'
  };
  const mapDiv = document.getElementById('map');
  let idCase = document.getElementById('idCase');
  displayMap(mapOptions,mapDiv,idCase);
  addEventSelect(mapOptions,mapDiv,idCase);
}

const displayMap = async (mapOptions,mapDiv, idCase) => {
    const map = new google.maps.Map(mapDiv, mapOptions);
    const valuesCase = await getValueCase(idCase.value);
    addColorMap(valuesCase, map);
    return map;
}


const addColorMap = async (valuesCase, map) =>  {
    try {
      valuesCase.forEach(function(currentValue, index, array){
        let year = currentValue['anio'];
        let idState = currentValue['idestado'];
        let stateName = currentValue['estado'];
        let caseD = currentValue['delito'];
        let quantity = currentValue['cantidad'];
        let color = currentValue['color'];
        let valueForState = stateName + "Total de delitos "+ quantity;
        getGeoJson(idState, color,valueForState, map);
       });
    } catch (error) {
      throw new Error("Algo salio mal")
    }
  }

  function getGeoJson(idState,fillcolor,nomestado, map){
    var dataLayer = new google.maps.Data({map: map});
    dataLayer.loadGeoJson(`./geojson/${idState}.geojson`);
    dataLayer.setStyle({
         fillOpacity: 0.9,
         fillColor: fillcolor,
         strokeWeight: 0.5,
         strokeColor: 'black'
    });

    var infowindow = new google.maps.InfoWindow;
    dataLayer.addListener('mouseover', function(event) {
        this.overrideStyle(event.feature,{strokeWeight: 1,fillColor: fillcolor,fillOpacity: 0.6,});
        infowindow.setContent(nomestado);
        infowindow.setPosition(event.latLng);
        infowindow.open(map,this);
    });
    dataLayer.addListener('mouseout', function(event) {
            this.revertStyle(); //revertir lo hecho por las demas acciones
            infowindow.close();
    });
    
}
 
const addEventSelect =  (mapOptions, mapDiv, idSelectCase) => {
  idSelectCase.addEventListener("change",async() => {
        const valuesCase = await getValueCase(idSelectCase.value);
        displayMap(mapOptions,mapDiv, idSelectCase)
    })
}
 
