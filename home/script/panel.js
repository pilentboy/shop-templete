function displayStatus(){
    let arrow=document.querySelector(".arrow");
    let userStatus=document.querySelector(".user-status-bottom-display")
    if (userStatus.style.display!="none"){
        userStatus.style.display="none";

        arrow.classList.remove("bi-arrow-down-circle-fill");
        arrow.classList.add("bi-arrow-up-circle-fill");

    }
    else{
        userStatus.style.display="block";
        arrow.classList.remove("bi-arrow-up-circle-fill");

        arrow.classList.add("bi-arrow-down-circle-fill");
    }

}



/* this function is for check the display of  the options-title element */ 
function displaychecker(item) {
    if (item.style.display!="none"){
        item.style.display="none";
    }
    else {
        item.style.display="inline-block";

    }
    
  }



function controlRightDisplayStatus (){
  
    let control=document.querySelector(".hide-show");
    let nameAndArrow=document.querySelector(".usernameAndDisplayButton");
    let accessUser=document.querySelector(".user-status-bottom-display");
    let optionsTitle=document.getElementsByClassName("options-title");
    Array.from(optionsTitle).forEach(displaychecker);
    

    if(nameAndArrow.style.display!="none" ||  accessUser.style.display!="none" )
       {
            nameAndArrow.style.display="none";
            accessUser.style.display="none";
         


        }
    else {
        nameAndArrow.style.display="block";
        accessUser.style.display="block";
       
    }

}

 /*  CHART  */

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, 
    {
      type:"polarArea",
      data: {
        labels:["هندزفری","هدفون","موبایل","شارژر","سایر موارد"],
        datasets:[
          {
            label:"Population",
            data:[
              20, 10,  30,  15,   3
            ]
            ,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(0, 255, 0, 1)",
            ]
            ,
            borderWidth: 1

          }
        ]
      },


    }

  )
