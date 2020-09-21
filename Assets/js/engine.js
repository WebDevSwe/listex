//listex - A web-based exercise program for practicing word lists
//https://github.com/WebDevSwe/listex

//Global variables
var gMenuState = "start";
var gInfoText = "";
var gMenuText = "";

//Element
var gContent = ".lis-content";
var gMenu    = "#lis-main-nav"; 



$(function() {
    gameEngine();

});

function gameEngine(){
    if(gMenuState == "start"){
        gInfoText  = "<h1>Välkommen till ListEx</h1>";
        gInfoText += "<p>Ett program för att öva på glosor.</p>";
        gMenuText  = "Vad vill du göra?"
        
        var menyList = [];

        $(gContent).html(gInfoText);
        $(gContent).append("<h2>" + gMenuText + "</h2>")
        //List menu. Text, id, class
        menyList[0] = ["Öva på en lista",     "start-exercise"  ];
        menyList[1] = ["Starta stort prov",  "start-big-test"   ];
        menyList[2] = ["Skap en ny lista",    "create-new-list" ];
        menyList[3] = ["Hantera mina listor", "manage-my-lists" ];


       
      


    }

    var listHtml = "";
    var n;
    for (n = 0; n < menyList.length; n++) {
        listHtml += "<li><button id='ux-button__"+ menyList[n][1]+"'  class='lis-ux-button "+ menyList[n][1]+"'>" + menyList[n][0] + "</button></li>";
        
    }
    $(gContent).append("<nav id='lis-main-nav' class='lis-main-nav'><ul>" + listHtml + "</ul></nav>");
}

