const url = "https://api.adviceslip.com/advice";

async function getapi(url){
    const response = await fetch(url);

    let data = await response.json();
    const advice = '"'+data.slip.advice+'"';
    const id ="ADVICE #" + data.slip.id.toString();
    
    document.getElementById("id").innerHTML=id;
    document.getElementById("advice").innerHTML=advice;
}   

getapi(url);