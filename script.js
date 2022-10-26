const colors=["red","green","pink","rgba(35,23,12)","#f15025"]
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    
    // get random number between 0-3 colors[1]
    const randomnumber=getRandomNumber();
    console.log(randomnumber);
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];



});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);

}