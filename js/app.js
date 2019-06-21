document.addEventListener("DOMContentLoaded", function () {

var domobjgBtn = document.getElementById("gBtn");
var domobjgTp1 = document.getElementById("tp1");
var domobjmCon = document.getElementById("mCon");
// console.log(domobjmCon);

const tpart1_content = ["Main","Project","Brown","Smart",
                        "First","Last","Start","The_best",
                        "Undefined", "New", "Old", "Pure",
                        "Nice","Initial","Vital","Major",
                        "Top","Core","Central","Prime",
                        "Principal","Quick","Active","Dynamic",
                        "Basic","Generic","Specific","Fast"];

const mainContainer_bc = ["#8DD5F2", "#F2BE22", "#F29727", "#F2B694",
                          "#EF0818", "#02DBC5", "#F59F03", "#F45C04",
                          "#BF9E80", "#42DB00", "#EAFF00", "#9DD943",
                          "#ABD904", "#F28627", "#00E816", "#F29BBB",
                          "#F29F05", "#F28705", "#FF5919", "#F23C13"];

domobjgBtn.addEventListener('click' , pageLook);

function pageLook() {

    event.preventDefault();

    let random_tp1con_idx = Math.floor(Math.random() * (tpart1_content.length - 1 + 1)) + 1;
    let random_tp1con = tpart1_content[random_tp1con_idx-1];
    domobjgTp1.innerText = random_tp1con;
    // console.log(tpart1_content.length, random_tp1con_idx-1);

    let random_mConbc_idx = Math.floor(Math.random() * (mainContainer_bc.length - 1 + 1)) + 1;
    let random_mConbc = mainContainer_bc[random_mConbc_idx];
    domobjmCon.style.backgroundColor = random_mConbc;

}



});    