const start = () => {
    const body = document.querySelector("body");
    body.innerHTML = "";
  
    const div = document.createElement("div")
    div.className = "main"
    body.append(div)
  
    

    const select = document.createElement("p")
        select.innerHTML = "Your turn start"
        select.className = "select"
        div.append(select);

        const divContent = document.createElement("div")
    divContent.className = "gameContent"
    div.append(divContent)

    const arrWin = [[1,2,3] , [1,4,7] ,[1,5,9] , [2,5,8] , [3,6,9] , [3,5,7] , [4,5,6] , [7,8,9]]
    const arrX = []
    const arrO = []
    let status = "draw"
    for(let x =1 ; x <=9 ; x++ ){
        const choose = document.createElement("div")
        choose.innerHTML = ""
        choose.className = "choose"
        choose.id = `${x}`
        
        choose.addEventListener("click",function(){
            if (status != "Win" && status != "Loser" && document.getElementById(x).innerHTML == ""){
            choose.innerHTML = "X"
            switch (x){
                case 1 :
                    arrX.push(1)
                    if (arrX.length != 5 ){
                    const arr= [3 , 5 , 7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;


                case 2 :
                    arrX.push(2)
                    if (arrX.length != 5 ){
                    const arr= [1 , 3 , 5 ,  7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [ 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                    }
                break;

                case 3 :
                    arrX.push(3)
                    if (arrX.length != 5 ){

                    const arr= [1 , 5 , 7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;

                case 4 :
                    arrX.push(4)
                    if (arrX.length != 5 )
                {
                    const arr= [1 , 3 , 5 ,  7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [ 2 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;



            case 5 :
                arrX.push(5)
                if (arrX.length != 5 )
                {
                    const arr= [1 , 3 , 7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                };
                break;

                case 6 :
                    arrX.push(6)
                    if (arrX.length != 5 )
                    {
                    const arr= [1 , 3 ,5 , 7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4  ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;

                case 7 :
                    arrX.push(7)
                    if (arrX.length != 5 )
                    {
                    const arr= [1 , 3 , 5 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;

                case 8 :
                    arrX.push(8)
                    if (arrX.length != 5 )
                {
                    const arr= [1 , 3 ,5 , 7 , 9]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4  ,6]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                };
                break;

                case 9 :
                    arrX.push(9)
                    if (arrX.length != 5 )
                {
                    const arr= [1 , 3 , 5 , 7]
                    for ( let z =0 ; z < arr.length ; z++){
                        if (document.getElementById(arr[z]).innerHTML != ""){
                            arr.splice(z , 1)
                            z--
                        }
                    }
                    if (arr.length == 0 ){
                        const arr2 = [2 , 4 , 6 ,8]
                        for ( let z =0 ; z < arr2.length ; z++){
                            if (document.getElementById(arr2[z]).innerHTML != ""){
                                arr2.splice(z , 1)
                                z--
                            }
                    }
                    computerTurn = arr2[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    
                }else{
                    computerTurn = arr[Math.floor(Math.random() * arr.length)]
                    arrO.push(computerTurn)
                    document.getElementById(computerTurn).innerHTML = "O"
                    }
                }
                break;
                
            }


            console.log(arrX)
            setTimeout(()=>{
                console.log(arrO)
            },1000)


                for ( let x = 0 ; x < arrWin.length ; x++){
                    let sum = 0 ;
                    for(let z = 0 ; z<arrX.length ; z++ ){
                        if (arrWin[x].includes(arrX[z])){
                            sum++ ;
                        }
                    }
                    if (sum == 3 ){
                        status = "Win"
                        const playAgain = document.createElement("button")
                        playAgain.innerHTML = "Play Again"
                        playAgain.className = "btn"
                        playAgain.addEventListener("click" , start)
                        div.append(playAgain);
                        return (
                        select.innerHTML = "You are win")
                    }
                }

                for ( let x = 0 ; x < arrWin.length ; x++){
                    let sum = 0 ;
                    for(let z = 0 ; z<arrO.length ; z++ ){
                        if (arrWin[x].includes(arrO[z])){
                            sum++ ;
                        }
                    }
                    if (sum == 3 ){
                        status = "Loser"
                        const playAgain = document.createElement("button")
                        playAgain.innerHTML = "Play Again"
                        playAgain.className = "btn"
                        playAgain.addEventListener("click" , start)
                        div.append(playAgain);
                        return (
                        select.innerHTML = "You are loose")
                    }
                }

            }
        }
        )

            
        divContent.append(choose);
        if (x ==3 || x ==6 || x == 9 ){
            choose.style.borderRightStyle="none"
        }
        if (x > 6 ){
            choose.style.borderBottomStyle="none"
        }
    }
    

}