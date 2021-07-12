const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
//document.createElement() 
//node.appendChild()

function showResults(n){
    let node = document.createElement('div');
    let resNode = document.createTextNode(n);
    node.appendChild(resNode)
    node.style.marginBottom = '20px'
    document.body.appendChild(node)
}
function kata1() {
    // implemente o código do kata 1 aqui 
   let x = ''

   for(let i = 1; i <= 25; i++){
       if(i === 25){
        x += i 
       } else {
        x += i + ' , '
       }
    }
   showResults(x)

}
kata1()


function kata2() {
    // implemente o código do kata 2 aqui
    let x = ''

    for(let i = 25; i >= 1; i--){
        if(i === 1){
            x += i 
           } else {
            x += i + ' , '
           }
        }
       showResults(x)
    }
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let x = ''
    for(let i = 1; i <= 25; i++){
        if(i === 25){
         x += (i*-1)
        } else {
         x += (i*-1) + ' , '
        }
     }
       showResults(x)
}
kata3()


function kata4() {
    // implemente o código do kata 4 aqui
    let x = ''
    for(let i = 25; i >= 1; i--){
        if(i === 1){
         x += (i*-1)
        } else {
         x += (i*-1) + ' , '
        }
     }
     showResults(x)
}
kata4()
function kata5() {}   

function kata6() {
    // implemente o código do kata 6 aqui
    let x = ''
    for(let i = 3; i < 100; i++){
        if(i % 3 === 0){
            x += i + ' , '
        }
    }
    showResults(x)

}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    let x = ''
    for(let i = 7; i < 100; i++){
        if(i % 7 === 0){
            x += i + ' , '
        }
    }
    showResults(x)    

    
}
kata7()

function kata8() {
    // implemente o código do kata 8 aqu
}

function kata9() {
    // implemente o código do kata 9 aqui
    let x = ''

    for(let i = 5; i <= 100; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            x += i + ' , '
        }
    }
    showResults(x)
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    let x = []

    for(let i = 0; i < 20; i++){
        x.push(sampleArray[i])
    }
    
    showResults(x)
}
kata10()

function kata11() {
    let x = []

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            x.push(sampleArray[i]) + ' , '
        }
    }
        showResults(x)
   
}
kata11()
function kata12() {
    let x = []

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            x.push(sampleArray[i]) + ' , '
        }
    }
        showResults(x)
   
}
kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let x = []

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            x.push(sampleArray[i]) + ' , '
        }
    }
        showResults(x)
   
}
kata13()
function kata14() {
    // implemente o código do kata 14 aqui
    let x = []
    
    for(let i = 0; i < sampleArray.length; i++){
        x.push(sampleArray[i] ** 2) + ' , '
    }
    
    showResults(x)
}
kata14()
function kata15() {
    // implemente o código do kata 15 aqui
    let x = 0

    for(let i = 0; i < 20; i++){
        x += i
    }
    showResults(x)
}
kata15()
function kata16() {
    // implemente o código do kata 16 aqui
    let x = 0

    for(let i = 0; i < sampleArray.length; i++){
        x += sampleArray[i]
    }
    showResults(x)
}
kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let x = sampleArray[0]

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < x){
            x = sampleArray[i]
        }
    }
    showResults(x)
}
kata17()
function kata18() {
    // implemente o código do kata 18 aqui
    let x = sampleArray[0]

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > x){
            x = sampleArray[i]
        }
    }
    showResults(x)
}
kata18()
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    for(let i = 0; i < 20; i++){
    let rectangle = document.createElement('div')
    rectangle.setAttribute('style', 'width: 100px; height: 20px; background-color:gray; margin: 5px;')
    document.body.appendChild(rectangle);
    }
}
kataBonus1()
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
        for(let i = 0; i < sampleArray.length; i++){
            let rectangle = document.createElement('div')
            rectangle.setAttribute('style', 'height: 20px; background-color:gray; margin: 5px;')
            rectangle.style.width = sampleArray[i] + 'px'
            rectangle.style.marginBottom = '20px'
            document.body.appendChild(rectangle);
        }
}
kataBonus3()
function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
