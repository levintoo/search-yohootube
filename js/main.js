let video1 = document.getElementById("butterfly")
let video2 = document.getElementById("squirrel")
let video3 = document.getElementById("oldmonkey")
let video4 = document.getElementById("kennar")
let video5 = document.getElementById("united")
let video6 = document.getElementById("negotiation")
let video7 = document.getElementById("ubunifu")
let video8 = document.getElementById("tailmonkey")
let video9 = document.getElementById("cate")

let vidNull={
    name:"",
    description:""
}
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
    name:"oldmonkey",
    description:""
}
let vid9={
    name:"cate",
    description:"cateblog"
}

 document.getElementById("btn").onclick=function (){
     console.log("butterfly")
     let input =document.getElementById("input").value
     let inputVal = input.toLowerCase()
     if  (inputVal===vidNull.name || inputVal===vidNull.description){
        video1.style.display="block"
        video2.style.display="block"
        video3.style.display="block"
        video4.style.display="block"
        video5.style.display="block"
        video6.style.display="block"
        video7.style.display="block"
        video8.style.display="block"
        video9.style.display="block"
    }
    else if (inputVal===vid1.name || inputVal===vid1.description){
         video1.style.display="block"
         video2.style.display="none"
         video3.style.display="none"
         video4.style.display="none"
         video5.style.display="none"
         video6.style.display="none"
         video7.style.display="none"
         video8.style.display="none"
         video9.style.display="none"
     }else if (inputVal===vid2.name || inputVal===vid2.description){
        video1.style.display="none"
        video2.style.display="block"
        video3.style.display="none"
        video4.style.display="none"
        video5.style.display="none"
        video6.style.display="none"
        video7.style.display="none"
        video8.style.display="none"
        video9.style.display="none"
    }else if (inputVal===vid3.name || inputVal===vid3.description){
        video1.style.display="none"
        video2.style.display="none"
        video3.style.display="block"
        video4.style.display="none"
        video5.style.display="none"
        video6.style.display="none"
        video7.style.display="none"
        video8.style.display="none"
        video9.style.display="none"
    }else if (inputVal===vid4.name || inputVal===vid4.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="block"
    video5.style.display="none"
    video6.style.display="none"
    video7.style.display="none"
    video8.style.display="none"
    video9.style.display="none"
}
else if (inputVal===vid5.name || inputVal===vid5.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="none"
    video5.style.display="block"
    video6.style.display="none"
    video7.style.display="none"
    video8.style.display="none"
    video9.style.display="none"
}
else if (inputVal===vid6.name || inputVal===vid6.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="none"
    video5.style.display="none"
    video6.style.display="block"
    video7.style.display="none"
    video8.style.display="none"
    video9.style.display="none"
}else if (inputVal===vid7.name || inputVal===vid7.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="none"
    video5.style.display="none"
    video6.style.display="none"
    video7.style.display="block"
    video8.style.display="none"
    video9.style.display="none"
}else if (inputVal===vid8.name || inputVal===vid8.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="none"
    video5.style.display="none"
    video6.style.display="none"
    video7.style.display="none"
    video8.style.display="block"
    video9.style.display="none"
}else if (inputVal===vid9.name || inputVal===vid9.description){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="none"
    video4.style.display="none"
    video5.style.display="none"
    video6.style.display="none"
    video7.style.display="none"
    video8.style.display="none"
    video9.style.display="block"
}
else {
    alert(`results not found....try searching words like, "monkey","united"or"kennar"`)
    video1.style.display="block"
    video2.style.display="block"
    video3.style.display="block"
    video4.style.display="block"
    video5.style.display="block"
    video6.style.display="block"
    video7.style.display="block"
    video8.style.display="block"
    video9.style.display="block"
}
 }
