let krug = document.querySelector('.krug');
let poloska = document.querySelector('.poloska');
let ranger = document.querySelector('.ranger');


let bdSosok = document.querySelector('.bdSosok').textContent;
let indexSS = bdSS[bdSosok].count //индекс
let indexCry = bdSS[bdSosok].cry
let indexSo = bdSS[bdSosok].so


let ingGrade = document.querySelectorAll('.ingGrade')

ingGrade.forEach(grade1 => {
    grade1.textContent = bdSS[bdSosok].grade;
})


let ingCount = document.querySelector('.ingCount').textContent = bdSS[bdSosok].cry;
let ingSo = document.querySelector('.ingSo').textContent = bdSS[bdSosok].spirit;
let ingSoCount = document.querySelector('.ingSoCount').textContent = bdSS[bdSosok].so;
let IngcountSs = document.querySelector('.IngcountSs').textContent = bdSS[bdSosok].count;
let IngcountMp = document.querySelector('.IngcountMp').textContent = bdSS[bdSosok].mp;





let offOn = false
let offOn2 = false



priceSS.value = bdSS[bdSosok].price;
priceSo.value = bdSS[bdSosok].priceSo;
priceCryst.value = bdSS[bdSosok].priceCr;

let picterIcon = document.querySelectorAll('.picterIcon'); //Иконки
let nameTitl = document.querySelectorAll('.nameTitl') //имя спирита оре
picterIcon[0].src = bdSS[bdSosok].urlIcon
picterIcon[1].src = bdSS[bdSosok].urlIconCryst
if (bdSS[bdSosok].spirit == 'Soul Ore') {
    picterIcon[2].src = '../pict/So.jpg'

    nameTitl[2].textContent = bdSS[bdSosok].spirit
    nameTitl[0].textContent = 'Soulshot'
} else {
    picterIcon[2].src = '../pict/spitit.jpg'
    nameTitl[2].textContent = bdSS[bdSosok].spirit
    nameTitl[0].textContent = 'Blessed'
}





let getSoulshot = document.querySelector('.getSoulshot'); //инпут цены ингридент
let textCryst = document.querySelector('.textCryst'); //конечная цена предметов
let textSo = document.querySelector('.textSo');
let textAden = document.querySelector('.textAden');

getSoulshot.value = bdSS[bdSosok].count

textCryst.textContent = bdSS[bdSosok].cry
textSo.textContent = bdSS[bdSosok].so
textAden.textContent = (bdSS[bdSosok].priceCr * bdSS[bdSosok].cry) + (bdSS[bdSosok].priceSo * bdSS[bdSosok].so)

const ikonSols = document.querySelector('.ikonSols')
ikonSols.style.backgroundImage = "url('" + bdSS[bdSosok].urlIcon + "')"


function returnPriceCry() {
    if (bdSS[bdSosok].grade == 'D') {
        localStorage.setItem('priceCryD', priceCryst.value)
    } else if (bdSS[bdSosok].grade == 'C') {
        localStorage.setItem('priceCryC', priceCryst.value)
    }
    else if (bdSS[bdSosok].grade == 'B') {
        localStorage.setItem('priceCryB', priceCryst.value)
    } else if (bdSS[bdSosok].grade == 'A') {
        localStorage.setItem('priceCryA', priceCryst.value)
    } else if (bdSS[bdSosok].grade == 'S') {
        localStorage.setItem('priceCryS', priceCryst.value)
    }

}

function priceSSosoLocal() {
    if (bdSS[bdSosok].title == 'SSD') {
       localStorage.setItem('priceSSD', priceSS.value)
    } else if (bdSS[bdSosok].title == 'BSSD') {
        localStorage.setItem('priceBSSD', priceSS.value)
    } else if (bdSS[bdSosok].title == 'SSC') {
        localStorage.setItem('priceSSC', priceSS.value)
    } else if (bdSS[bdSosok].title == 'BSSC') {
        localStorage.setItem('priceBSSC', priceSS.value)
    } else if (bdSS[bdSosok].title == 'SSB') {
        localStorage.setItem('priceSSB', priceSS.value)
    } else if (bdSS[bdSosok].title == 'BSSB') {
        localStorage.setItem('priceBSSB', priceSS.value)
    } else if (bdSS[bdSosok].title == 'SSA') {
        localStorage.setItem('priceSSA', priceSS.value)
    } else if (bdSS[bdSosok].title == 'BSSA') {
        localStorage.setItem('priceBSSA', priceSS.value)
    } else if (bdSS[bdSosok].title == 'SSS') {
        localStorage.setItem('priceSSS', priceSS.value)
    } else if (bdSS[bdSosok].title == 'BSSS') {
        localStorage.setItem('priceBSSS', priceSS.value)
    }
}

priceSS.oninput = function () {

    profitCard3()
    priceSSosoLocal()
    seePrivbilSsd()

}
getSoulshot.oninput = function () {
    priceGet()
    profitCard3()
    seePrivbilSsd()
}
priceCryst.oninput = function () {
    priceGet()
    profitCard3()

    returnPriceCry() // ввыводит стоимость кристала
    seePrivbilSsd()
}
priceSo.oninput = function () {
    priceGet()
    profitCard3()


    if (bdSS[bdSosok].spirit == 'Soul Ore') {

        localStorage.setItem('pricSoultOre', priceSo.value)
    } else {
        localStorage.setItem('pricSpiritOre', priceSo.value)

    }

    seePrivbilSsd()


}
priceCraf.oninput = function () {
    priceGet()
    profitCard3()
    seePrivbilSsd()
    localStorage.setItem('priceCraft',priceCraf.value);
}
function seePrivbilSsd() {
    
    card4pribl.forEach((ele, inde) => {//показывает прибыль других сосок при томже мп
     
        ele.textContent = priblDrugihSSD(inde)
    })
}

function priceGet() {            //выводи цену
    let getSs = Math.ceil(+getSoulshot.value / indexSS);
    textCryst.textContent = indexCry * getSs
    textSo.textContent = indexSo * getSs
    textAden.textContent = ((indexSo * getSs * +priceSo.value) + (indexCry * getSs * +priceCryst.value) + (getSs * priceCraf.value)).toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." });
}


// Добовляет список при такомже затрачченом мп

let card4fonSSD = document.querySelector('.card4fonSSD');
let containerSosok = document.querySelector('.containerSosok');
for (let i = 0; i < bdSS.length - 1; i++) {
    let r11 = card4fonSSD.cloneNode(true)
    containerSosok.appendChild(r11)
}

krug.addEventListener('mousedown', function () {
    offOn = true
    startRang()
})
function startRang() {
    window.addEventListener('mousemove', function (evt) {
        if (offOn) {
            let shiftX = evt.clientX - ranger.getBoundingClientRect().left - 10;
            if (shiftX > 30 && shiftX < 440) {
                krug.style.left = shiftX + 'px'

                let celSs = Math.floor(shiftX - 30)

                getSoulshot.value = celSs * indexSS
                priceGet()

            }
        }
    })
}
window.addEventListener('mouseup', function () {
    offOn = false

})

let profSouls = document.querySelector('.profSouls')
let dirtProfit = document.querySelector('.dirtProfit')
let clearProfit = document.querySelector('.clearProfit')
let zatratProfit = document.querySelector('.zatratProfit')


let randomProfSouls = localStorage.getItem('countSSD') == null ? bdSS[bdSosok].count : localStorage.getItem('countSSD')
profSouls.value = Math.round(randomProfSouls/bdSS[bdSosok].count)*bdSS[bdSosok].count
// profSouls.value = bdSS[bdSosok].count
let prdir1 = +priceSS.value * +profSouls.value //вся сумма
let prdir2 = +((indexSo * +priceSo.value) + (indexCry * +priceCryst.value) + (+priceCraf.value)) * (+profSouls.value / bdSS[bdSosok].count)
dirtProfit.textContent = prdir1.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." });
zatratProfit.textContent = prdir2.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." });
let pri1pri2 = prdir1 - prdir2
clearProfit.textContent = pri1pri2.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." });

let countSSlocal =  localStorage.getItem('countSSD') == null ? bdSS[bdSosok].count : localStorage.getItem('countSSD')
function profitCard3() {
    
    
    let getSs = Math.ceil(+profSouls.value / indexSS);
    let dp = +priceSS.value * +profSouls.value
    profSouls.value = Math.ceil(+profSouls.value / indexSS) * indexSS;
    dirtProfit.textContent = dp.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: '.' });
    let str = dp - ((indexSo * getSs * +priceSo.value) + (indexCry * getSs * +priceCryst.value) + (getSs * priceCraf.value))
    str = str.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." });

    zatratProfit.textContent = ((indexSo * getSs * +priceSo.value) + (indexCry * getSs * +priceCryst.value) + (getSs * priceCraf.value)).toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." })

    clearProfit.textContent = str;
    localStorage.setItem('countSSD', profSouls.value)
}

let krug2 = document.querySelector('.krug2');
let poloska2 = document.querySelector('.poloska2');
let ranger2 = document.querySelector('.ranger2');
let card4pribl = document.querySelectorAll('.card4pribl');
let picterIconCard4 = document.querySelectorAll('.picterIconCard4');
let card4priceSS = document.querySelectorAll('.card4priceSS');
profSouls.onchange = function () {
    profitCard3()
    
    card4pribl.forEach((ele, inde) => {//показывает прибыль других сосок при томже мп

        ele.textContent = priblDrugihSSD(inde)
    })
}





picterIconCard4.forEach((ele, indx) => {
    card4priceSS[indx].textContent = bdSS[indx].price
    card4pribl[indx].textContent = priblDrugihSSD(indx)
    ele.src = bdSS[indx].urlIcon
})





krug2.addEventListener('mousedown', function () {
    offOn2 = true
    startRang2()
})
krug2.style.left = localStorage.getItem('krug') ? localStorage.getItem('krug') : '34px'
function startRang2() {
    window.addEventListener('mousemove', function (evt) {
        if (offOn2) {
            let shiftX = Math.round(evt.clientX - ranger2.getBoundingClientRect().left - 10)

            if (shiftX > 31 && shiftX < 1020) {

                krug2.style.left = shiftX + 'px'
                localStorage.setItem('krug', shiftX + 'px')
                let prozd = (shiftX - 32) * indexSS
                profSouls.value = prozd

                localStorage.setItem('countSSD', prozd)
                localStorage.setItem('countSSD', prozd)
                profitCard3()
            }
            card4pribl.forEach((ele, inde) => {//показывает прибыль других сосок при томже мп

                ele.textContent = priblDrugihSSD(inde)
            })


        }
    })

}
window.addEventListener('mouseup', function () {
    offOn2 = false
})




function priblDrugihSSD(index) {      //функция прибыль с других сосок

    bsSSon()
 
    let countMp = profSouls.value / bdSS[bdSosok].count
    let skolkoMPpotracheno = countMp * bdSS[bdSosok].mp
    let stokaBudetSS = Math.round(skolkoMPpotracheno / bdSS[index].mp)
    let priceKrafta = ((bdSS[index].cry * bdSS[index].priceCr) + (bdSS[index].so * bdSS[index].priceSo) + (+priceCraf.value)) * stokaBudetSS
    let clearPrice = ((stokaBudetSS * bdSS[index].count) * bdSS[index].price) - priceKrafta

    return clearPrice.toLocaleString('ru-RU', { maximumFractionDigits: 0, useGrouping: true, groupingSeparator: "." })

}

