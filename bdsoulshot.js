
let cardSelect = document.querySelector('.cardSelect');
let ssSearch = document.querySelector('.ssSearch');
// let selectSoulshot = document.querySelector('.selectSoulshot');
// selectSoulshot.remove()

let priceSS = document.querySelector('.priceSS')//стоимость предметов
let priceCryst = document.querySelector('.priceCryst');
let priceSo = document.querySelector('.priceSo')
let priceCraf = document.querySelector('.priceCraf');


// let priceSpirteOre = localStorage.setItem('pricSpiritOre', 440 )

let priceSpirteOre = localStorage.getItem('pricSpiritOre')==null ? 440 : localStorage.getItem('pricSpiritOre')
let priceSoulOre = localStorage.getItem('pricSoultOre')==null ? 275 : localStorage.getItem('pricSoultOre')
let cryD = localStorage.getItem('priceCryD')==null? 600 :localStorage.getItem('priceCryD')
let cryC = localStorage.getItem('priceCryC')==null? 3000:localStorage.getItem('priceCryC')
let cryB = localStorage.getItem('priceCryB')==null? 14000:localStorage.getItem('priceCryB')
let cryA = localStorage.getItem('priceCryA')==null? 10000 :localStorage.getItem('priceCryA')
let cryS = localStorage.getItem('priceCryS')==null? 9000 :localStorage.getItem('priceCryS')
priceCraf.value = localStorage.getItem('priceCraft')==null? 0 :localStorage.getItem('priceCraft')

let priceSosok
function obnvitPriceSS(){
 priceSosok = {
    ssd:localStorage.getItem('priceSSD')==null?11:localStorage.getItem('priceSSD'),
    bssd:localStorage.getItem('priceBSSD')==null?56:localStorage.getItem('priceBSSD'),
    ssc:localStorage.getItem('priceSSC')==null?16:localStorage.getItem('priceSSC'),
    bssc:localStorage.getItem('priceBSSC')==null?150:localStorage.getItem('priceBSSC'),
    ssb:localStorage.getItem('priceSSB')==null?80:localStorage.getItem('priceSSB'),
    bssb:localStorage.getItem('priceBSSB')==null?500:localStorage.getItem('priceBSSB'),
    ssa:localStorage.getItem('priceSSA')==null?70:localStorage.getItem('priceSSA'),
    bssa:localStorage.getItem('priceBSSA')==null?450:localStorage.getItem('priceBSSA'),
    sss:localStorage.getItem('priceSSS')==null?70:localStorage.getItem('priceSSS'),
    bsss:localStorage.getItem('priceBSSS')==null?350:localStorage.getItem('priceBSSS'),

}
}

let createTeg = function (teg, clas, tex) {       //создание классов
    let elem = document.createElement(teg)
    elem.classList.add(clas)
    if (tex) {
        elem.textContent = tex
    }
    return elem
}
let bdSS
function bsSSon(){
    obnvitPriceSS()
    priceSpirteOre = localStorage.getItem('pricSpiritOre')==null ? 440 : localStorage.getItem('pricSpiritOre')
    priceSoulOre = localStorage.getItem('pricSoultOre')==null ? 275 : localStorage.getItem('pricSoultOre')
bdSS = [
    { name: ['ssd', 'ссд', 'ыыд'], grade: 'D', mp:72, price: priceSosok.ssd, spirit:'Soul Ore'  , title: 'SSD', count: 468, cry: 3, so: 9, priceSo:priceSoulOre, priceCr: cryD, urlIcon: '../pict/d.png',  urlIconCryst:'../pict/Dx.jpg',href: 'ssd.html' },
    { name: ['bssd', 'бссд', 'иыыв'], grade: 'D', mp:60, price: priceSosok.bssd, spirit: 'Spirit Ore', title: 'BSSD', count: 100, cry: 2, so: 8, priceSo:priceSpirteOre, priceCr: cryD, urlIcon: '../pict/bssd.jpg', urlIconCryst:'../pict/Dx.jpg', href: 'bssd.html' },
    { name: ['ssc', 'ссц'], grade: 'C',     mp:84, price: priceSosok.ssc, spirit: 'Soul Ore' , title: 'SSC', count: 952, cry: 2, so: 15,  priceSo:priceSoulOre, priceCr:cryC, urlIcon: '../pict/ssc.jpg', urlIconCryst:'../pict/Cx.jpg',href: 'ssc.html'},
    { name: ['bssc', 'бссц'], grade: 'C',   mp:120, price: priceSosok.bssc, spirit: 'Spirit Ore', title: 'BSSC', count: 200, cry: 2, so: 30, priceSo:priceSpirteOre, priceCr: cryC, urlIcon: '../pict/bssc.png', urlIconCryst:'../pict/Cx.jpg',href: 'bssc.html'},
    { name: ['ssb', 'ссб'], grade: 'B',     mp:100, price: priceSosok.ssb, spirit: 'Soul Ore' , title: 'SSB', count: 450, cry: 1, so: 54,  priceSo:priceSoulOre, priceCr:cryB, urlIcon: '../pict/ssb.jpg', urlIconCryst:'../pict/Bx.jpg',href: 'ssb.html'},
    { name: ['bssb', 'бссб'], grade: 'B',   mp:180, price: priceSosok.bssb, spirit: 'Spirit Ore', title: 'BSSB', count: 100, cry: 2, so: 16, priceSo:priceSpirteOre, priceCr: cryB, urlIcon: '../pict/bssb.jpg', urlIconCryst:'../pict/Bx.jpg',href: 'bssb.html'},
    { name: ['ssa', 'сса'], grade: 'A',     mp:120, price: priceSosok.ssa, spirit: 'Soul Ore' , title: 'SSA', count: 300, cry: 1, so: 36,  priceSo:priceSoulOre, priceCr:cryA, urlIcon: '../pict/ssa.jpg', urlIconCryst:'../pict/Ax.jpg',href: 'ssa.html'},
    { name: ['bssa', 'бсса'], grade: 'A',   mp:240, price: priceSosok.bssa, spirit: 'Spirit Ore', title: 'BSSA', count: 200, cry: 2, so: 70, priceSo:priceSpirteOre, priceCr: cryA, urlIcon: '../pict/bssa.jpg', urlIconCryst:'../pict/Ax.jpg',href: 'bssa.html'},
    { name: ['sss', 'ссс'], grade: 'S',     mp:150, price: priceSosok.ssa, spirit: 'Soul Ore' , title: 'SSS', count: 350, cry: 1, so: 40,  priceSo:priceSoulOre, priceCr:cryS, urlIcon: '../pict/sss.jpg', urlIconCryst:'../pict/Sx.jpg',href: 'sss.html'},
    { name: ['bsss', 'бссс'], grade: 'S',   mp:300, price: priceSosok.bssa, spirit: 'Spirit Ore', title: 'BSSS', count: 200, cry: 2, so: 50, priceSo:priceSpirteOre, priceCr: cryS, urlIcon: '../pict/bsss.jpg', urlIconCryst:'../pict/Sx.jpg',href: 'bsss.html'},

]
}
obnvitPriceSS()
bsSSon()

let closedTablice = false
ssSearch.oninput = function () {
    let selectSoulshot = document.querySelector('.selectSoulshot');
    selectSoulshot.remove()

    closedTablice = true
    let tabl = createTeg('div', 'selectSoulshot')
    cardSelect.appendChild(tabl);
    let selectSoulshot1 = document.querySelector('.selectSoulshot');
    selectSoulshot1.style.display = 'block'


    bdSS.forEach(ele => {
        ele.name.forEach(ele2 => {

            let sss = ssSearch.value
            if (ele2.indexOf(sss.toLowerCase()) >= 0 && ssSearch.value.length > 0) {

                
                
                let silkaA = createTeg('a', 'soulSelectD', ele.title)
            
                silkaA.href = ele.href
                tabl.appendChild(silkaA)
                

            } else if (ssSearch.value === '' ) {
                selectSoulshot1.style.display = 'none'
                selectSoulshot.remove()
            }
       
        });
    })
            let soulSelectD = document.querySelectorAll('.soulSelectD');
        

            if(soulSelectD.length == 0){
                selectSoulshot1.style.display = 'none'
                selectSoulshot.remove()

            }

    // if(ssSearch.value == )
}
ssSearch.onclick = function(){
    let selectSoulshot = document.querySelector('.selectSoulshot');
    selectSoulshot.remove()


    let tabl = createTeg('div', 'selectSoulshot')
    cardSelect.appendChild(tabl);
    let selectSoulshot1 = document.querySelector('.selectSoulshot');
    selectSoulshot1.style.display = 'block'
    bdSS.forEach(ele => {
        ele.name.forEach(ele2 => {
       

            if (ele2.indexOf(ssSearch.value) >= 0 && ssSearch.value.length > 0) {

                selectSoulshot1.style.display = 'block'

              
               
                let silkaA = createTeg('a', 'soulSelectD', ele.title)
            
                silkaA.href = ele.href
                tabl.appendChild(silkaA)
                  setTimeout(function(){
                     closedTablice = true
                },100)

            }  else if (ssSearch.value === '' ) {
                selectSoulshot1.style.display = 'none'
                selectSoulshot.remove()
            }
       





        });
    })
}

     window.onclick = function(){
        if(closedTablice){
            closedTablice=false
        let selectSoulshot1 = document.querySelector('.selectSoulshot');
            selectSoulshot1.style.display = 'none'
                
        }
    }