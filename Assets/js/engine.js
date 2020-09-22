//listex - A web-based exercise program for practicing word lists
//https://github.com/WebDevSwe/listex

//Global variables
var gInfoText = "";
var gMenuText = "";

//Element
var gContent = ".lis-content";
var gMenu    = "#lis-main-nav"; 



$(function() {
    gameEngine("start");

});

function gameEngine(menuAction){
    if(menuAction == "start"){
        gInfoText  = "<h1>Välkommen till ListEx</h1>";
        gInfoText += "<p>Ett program för att öva på glosor.</p>";
        gMenuText  = "Vad vill du göra?"
        
        var menyList = [];

        $(gContent).html(gInfoText);
        $(gContent).append("<h2>" + gMenuText + "</h2>")
        //List menu. Text, id/class/action
        menyList[0] = ["Öva på en lista"     ,  "start-exercise"  ];
        menyList[1] = ["Starta stort prov"   ,  "start-big-test"  ];
        menyList[2] = ["Skap en ny lista"    ,  "create-new-list" ];
        menyList[3] = ["Hantera mina listor" ,  "manage-my-lists" ];

    }

    if(menuAction == "start-exercise"){
        gInfoText  = "<h1>Starta övning</h1>";
        gInfoText += "<p>Här kan du starta ett test och se hur mycket du har lärt dig.</p>";
        gMenuText  = "Lycka till!"
        
        var menyList = [];

        $(gContent).html(gInfoText);
        $(gContent).append("<h2>" + gMenuText + "</h2>")
        //List menu. Text, id/class/action
        menyList[0] = ["Välj lista att testa"        ,   "start-exercise"  ];
        menyList[1] = ["Tillbaka"          ,  "start"            ];


    }




    var listHtml = "";
    var n;
    for (n = 0; n < menyList.length; n++) {
        listHtml += "<li><button id='ux-button__"+ menyList[n][1]+"'  class='lis-ux-button "+ menyList[n][1]+"'  data-action='" + menyList[n][1] + "'>" + menyList[n][0] + "</button></li>";
        
    }
    $(gContent).append("<nav id='lis-main-nav' class='lis-main-nav'><ul>" + listHtml + "</ul></nav>");

    activateButtons();
}

function activateButtons(){
    
    $( ".lis-ux-button" ).each(function( index ) {
        var menuAction = $( this ).data( "action" ) ;

        $( this ).click(function() {
            gameEngine(menuAction);
         });

    });
}