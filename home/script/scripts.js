let btn1=document.getElementById("one");
let btn2=document.getElementById("two");
let btn3=document.getElementById("three");

btn1.classList.add("btn2");

sliderIndex=1;

function setSlider(input,title,index){
    sliderIndex=index;
    let slideSelected=document.getElementById(`${input}`);
    let title_=document.querySelector(`.${title}`);

    
    let slide=[...document.querySelector('.slides').children];
    slide.forEach((element) =>{
        element.style.display="none";
    })

    btn1.classList.remove("btn2");
    btn2.classList.remove("btn2");
    btn3.classList.remove("btn2");
    
    slideSelected.classList.add("animate__fadeIn")
    slideSelected.style.display="block";
    title_.style.display="block";
    
}



setInterval(()=>{
    sliderIndex+=1;
    if(sliderIndex == 4){
        sliderIndex=1;
    }
    setSlider(`slide_${sliderIndex}`,`IMG_TEXT${sliderIndex}`,sliderIndex);
  

    if (sliderIndex ==1){
        btn1.classList.add("btn2");
        
    }
    else{
        btn1.classList.remove("btn2");

    }

    if (sliderIndex ==2){
        btn2.classList.add("btn2");
        
    }
    else{
        btn2.classList.remove("btn2");

    }

    if (sliderIndex ==3){
        btn3.classList.add("btn2");
        
    }
    else{
        btn3.classList.remove("btn2");

    }

} , 8000 );


let user_icon=document.getElementById("user_icon");
let home_icon=document.getElementById("home_icon");
let shopp_icon=document.getElementById("shopp_icon");
let search_icon=document.getElementById("search_icon");


function border_bottom(navIconId){
    let icons=[...document.getElementsByClassName("nav_icon")];
    console.log(icons)
    icons.forEach((element2)=>{
       
        element2.classList.remove("bottom_border_style");
    });

    let bottomBorder=document.querySelector(`#${navIconId}`);
    bottomBorder.classList.add("bottom_border_style");

 
}



// function change_star(){
    
//     let star_icon=document.querySelector("#s1");
//     let star_icon2=document.querySelector("#s2");
//     let star_icon3=document.querySelector("#s3");
//     let star_icon4=document.querySelector("#s4");
//     let star_icon5=document.querySelector("#s5");

//     let cl=[...star_icon.classList];
//     let cl2=[...star_icon2.classList];
//     let cl3=[...star_icon3.classList];
//     let cl4=[...star_icon4.classList];
//     let cl5=[...star_icon5.classList];

//     console.log(cl);

//     if (cl.includes("bi-star-fill")){
//         star_icon.classList.remove("bi-star-fill"); 
//         star_icon.classList.add("bi-star");
//         star_icon.classList.remove("star-color");
//     }
//     else{
//         star_icon.classList.remove("bi-star");
//         star_icon.classList.add("bi-star-fill");  
//         star_icon.classList.add("star-color");
    
//     }
    
    

// }



function test(){
    alert("test");
}


// count dowm timer //
let remaindingTime=70000;


function timeCountDown() {
    if (remaindingTime == 0)  return ;
    let h=Math.floor(remaindingTime/3600);
    let m=Math.floor((remaindingTime %3600)/60);
    let s=(remaindingTime %3600 )%60;
    document.querySelector("#hour").innerHTML=h;
    document.querySelector("#min").innerHTML=m;
    document.querySelector("#second").innerHTML=s;
 

};

setInterval(() => {
    remaindingTime -=1;
    timeCountDown();
}, 1000);



