let vid1={
    name:"butterfly",
    description:""
}
let vid2={
    name:"squirrel",
    description:""
}
let vid3={
    name:"monkey",
    description:""
}
let vid4={
    name:"kennar",
    description:"crazykennar"
}
let vid5={
    name:"united",
    description:"unitedpodcast"
}
let vid6={
    name:"mwikhali",
    description:"negotiationskills"
}
let vid7={
    name:"ununifu",
    description:"ubunifuclone"
}
let vid8={
    name:"latemonkey",
    description:""
}
let vid9={
    name:"cate",
    description:"cateblog"
}

 document.getElementById("btn").onclick=function (){
     let input =document.getElementById("input").value
     let inputVal = input.toLowerCase()
     if (inputVal===vid1.name || inputVal===vid1.description){
         butterfly.style.display="block"
         squrrel.style.display="none"
         monkey.style.display="none"
     }
 }
