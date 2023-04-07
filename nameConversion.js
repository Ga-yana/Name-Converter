// let word=document.getElementById("text").value;

let convert=document.querySelector("#convert-btn");

function order(){
    let word=document.getElementsByTagName("input")[0].value
    let seperate=word.split(" ");
   if(word){
    // camel case
    let camel=document.querySelector(".cases_div .case_div p");
    let newWord=seperate[0];
    for(let i=1; i<seperate.length; i++){
      newWord=newWord+seperate[i][0].toUpperCase()+seperate[i].slice(1);
    } 
    camel.innerHTML=newWord;

    // pascal case
    let pascal=document.querySelector(".cases_div .case_div:nth-child(2) p");
    newWord=seperate[0][0].toUpperCase()+seperate[0].slice(1);
    for(let i=1; i<seperate.length; i++){
        newWord=newWord+seperate[i][0].toUpperCase()+seperate[i].slice(1)
    }
    pascal.innerHTML=newWord;

    // snake case
    let snake=document.querySelector(".cases_div .case_div:nth-child(3) p");
    newWord=seperate[0];
    for(let i=1; i<seperate.length; i++){
      newWord=newWord+"_"+seperate[i];
    }
    snake.innerHTML=newWord;

    // scream snak case
    let scream=document.querySelector(".cases_div .case_div:nth-child(4) p");
    newWord=seperate[0].toUpperCase();
    for(let i=1; i<seperate.length; i++){
        newWord=newWord+"_"+seperate[i].toUpperCase();
    }
    scream.innerHTML=newWord;

    // kebab case
    let kebab=document.querySelector(".cases_div .case_div:nth-child(5) p");
    newWord=seperate[0];
    for(let i=1; i<seperate.length; i++){
      newWord=newWord+"-"+seperate[i];
    }
    kebab.innerHTML=newWord;

    // scream kebab case
    let screamKebab=document.querySelector(".cases_div .case_div:nth-child(6) p");
    newWord=seperate[0].toUpperCase();
    for(let i=1; i<seperate.length; i++){
        newWord=newWord+"-"+seperate[i].toUpperCase();
    }
    screamKebab.innerHTML=newWord;
  } 
}

convert.addEventListener("click",order);