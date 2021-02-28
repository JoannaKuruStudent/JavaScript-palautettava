const path = require('path')
const express = require('express')

const app = express()

const polku = path.join(__dirname, './public')

app.use(express.static(polku))

const tuotteetJson = [{"id": 1, "tuote": "Pilli", "hinta": 1},
{"id": 2, "tuote": "Pulla", "hinta": 2},
{"id": 3, "tuote": "Pallo", "hinta": 8},
{"id": 4, "tuote": "Polla", "hinta": 1000000}]

app.get('/tuotteet', (req, res) => res.json(tuotteetJson))


// - - - - - - - - - - - - - - - - -


// var munObj, munJSON, i, j, k=0, x = "";

// munJSON = '{"kaikkiTuotteet":[{"tuote":"Pilli","hinta":"1"},'+
// '{"tuote":"Pulla","hinta":"2"},'+
// '{"tuote":"Pallo","hinta":"8",'+
// '{"tuote":"Polla","hinta":"10000000",';

// munObj = JSON.parse(munJSON);

// function haeTuotteetTaulukkoon() { 

//     x = "<table><tr><th>Tuote</th><th>Hinta</th>";
//     for (i in munObj.kaikkiTuotteet) { 
//         x += "<tr><td>" + munObj.kaikkiTuotteet[i].tuote + "</td>";
//         x += "<td>" + munObj.kaikkiTuotteet[i].hinta + "</td>";
//     }
//     x += "</table>";
    
//     document.getElementById("tuotteetTaulukossa").innerHTML = x;     
// };

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })


// - - - - - - - - - Muita koodivaihtoehtoja talteen


//     var tuoteObj, tuoteJSON, i, j, k=0, x = "";
//     tuoteJSON = '{"prods":[{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},'+
//     '{"prodCode":"12346","prodName":"Myssy","buyPrice":"15.50","sellPrice":"23.35","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"22321","prodName":"Huivi","buyPrice":"9.99","sellPrice":"11.29","vendorLink":"http://www.kiteentekstiilitehdas.fi/tuotteet/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' + 
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"},' +
//     '{"prodCode":"12345","prodName":"Sukka","buyPrice":"10.50","sellPrice":"21","vendorLink":"https://helsinginvillasukkatehdas.fi/"}' + 
//     ']}';

//     tuoteObj = JSON.parse(tuoteJSON);

//     function vieTuotteetTaulukkoon() { 
//         x = "<table class='fixed_header'><thead><tr><th>Tuotekoodi</th><th>Tuotteen nimi</th><th>Ostohinta</th><th>Myyntihinta</th><th>Kate%</th></tr></thead><tbody>";
//         for (i in tuoteObj.prods) {
//             x += "<tr><td>" + tuoteObj.prods[i].prodCode + "</td>";
//             x += "<td>" + tuoteObj.prods[i].prodName + "</td>";
//             x += "<td>" + tuoteObj.prods[i].buyPrice + "</td>";
//             x += "<td>" + tuoteObj.prods[i].sellPrice + "</td>";
//             x += "<td>" + eval(tuoteObj.prods[i].buyPrice/tuoteObj.prods[i].sellPrice*100) + "</td></tr>";
//         }
//         x += "</tbody></table>";
//         document.getElementById("tuotteet").innerHTML = x;     
//     };

//     function tarkistaTuoteLinkki(tuoteLinkki) {
//         //alert("funktion sisältä: "+tuoteLinkki);
//         let result="0";
//         var linkit = document.getElementsByClassName("tuotelinkit");
//         //alert("linkkejä:" + linkit.length); 
//         for (var i=0; i < linkit.length; i++) {  
//            // alert("tuoteLinkki="+tuoteLinkki+"linkit[i].innerText="+linkit[i].innerHTML);
//             if (tuoteLinkki == linkit[i].innerText) {
//                 result = "1";
//             } 
//         }
//         //alert(result);
//         return result;
//     };

//     function luoTuoteLinkit() {
//         for (k in tuoteObj.prods) {
//             //alert(tuoteObj.prods[k].vendorLink);
//             var oliEnnestään = tarkistaTuoteLinkki(tuoteObj.prods[k].vendorLink);
//             //alert(oliEnnestään);
//             if (oliEnnestään=="0") {
//                 let otsikkoElementti = document.createElement("h3");
//                 let ahrefLinkki = document.createElement("a");
//                 ahrefLinkki.className="tuotelinkit"; 
//                 ahrefLinkki.href=tuoteObj.prods[k].vendorLink;
//                 ahrefLinkki.target="_blank";  
//                 let linkkidata = document.createTextNode(tuoteObj.prods[k].vendorLink); 
//                 ahrefLinkki.appendChild(linkkidata);
//                 otsikkoElementti.appendChild(ahrefLinkki); 
//                 document.getElementById("toimittajalinkit").appendChild(otsikkoElementti);
//                 alert(ahrefLinkki.outerHTML);
//             }
//         }
//     }