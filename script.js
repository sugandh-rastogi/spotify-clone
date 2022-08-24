let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let myProgressBar=document.getElementById('myProgressBar');
let ind=document.getElementById(`${songIndex}`);
let songs=[
    
        {songName:"Stay with me",filePath:"songs/1.mp3",coverPath:"cover/1.jpg",dur:"3:12"},
        {songName:"Everytime",filePath:"songs/2.mp3",coverPath:"cover/2.jpg",dur:"3:09"},
        {songName:"Glass Bridge",filePath:"songs/3.mp3",coverPath:"cover/3.jpg",dur:"4:25"},
        {songName:"Beautiful",filePath:"songs/4.mp3",coverPath:"cover/4.jpg",dur:"3:50"},
        {songName:"Talk Love",filePath:"songs/5.mp3",coverPath:"cover/5.jpg",dur:"3:40"},
        {songName:"You're My Everything",filePath:"songs/2.mp3",coverPath:"cover/2.jpg",dur:"3:09"},
    
]
let audioElement= new Audio('songs/1.mp3');

songItem.forEach((element,i)=>{
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("forEach")[0].innerText=songs[i].songName;
        element.getElementsByClassName("timestamp")[0].innerText=songs[i].dur;
})

masterPlay.addEventListener('click',(e)=>{
        ind=document.getElementById(`${songIndex}`);
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       
         ind.classList.remove('fa-circle-play');
        ind.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        ind.classList.remove('fa-circle-pause');
        ind.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                element.classList.remove('fa-circle-pause');        
                element.classList.add('fa-circle-play');
                })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
                makeAllPlays();
                songIndex=parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioElement.src=`songs/${songIndex+1}.mp3`;
                audioElement.currentTime=0;
                audioElement.play();
                masterSongName.innerText=songs[songIndex].songName;
                gif.style.opacity=1;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
        
        })

        
})

document.getElementById('next').addEventListener('click',()=>{
        ind=document.getElementById(`${songIndex}`);
        ind.classList.add('fa-circle-play');
        ind.classList.remove('fa-circle-pause');
        if(songIndex>=6){
                songIndex=0;
        }
        else{
                songIndex+=1;
        }
        ind=document.getElementById(`${songIndex}`);
        ind.classList.remove('fa-circle-play');
        ind.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})

document.getElementById('previous').addEventListener('click',()=>{
        ind=document.getElementById(`${songIndex}`);
        ind.classList.add('fa-circle-play');
        ind.classList.remove('fa-circle-pause');
        if(songIndex<=0){
                songIndex=0;
        }
        else{
                songIndex-=1;
        }
        ind=document.getElementById(`${songIndex}`);
        ind.classList.remove('fa-circle-play');
        ind.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})