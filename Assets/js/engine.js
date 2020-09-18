//listex - A web-based exercise program for practicing word lists
//https://github.com/WebDevSwe/listex

//Global variables
gMenuState = "start";
gInfoText = "";
gMenuText = "";

//Element
gContent = ".lis-content";


$(function() {
    
    gameEngine()

    


});

function gameEngine(){
    if(gMenuState == "start"){
        gInfoText  = "<h1>Välkommen till ListEx</h1>";
        gInfoText += "<p>Ett program för att öva på glosor.</p>";
        gMenuText  = "Vad vill du göra?;"


        $(gContent).html(gInfoText);
        $(gContent).append("<h2>" + gMenuText + "</h2>")
        //List menu. Text, id, class
        $menyList[] = ("Öva på en lista",     "ux-button__start-exercise",  "start-exercise"  );
        $menyList[] = ("Starta stort prov",   "ux-button__start-big-test",  "start-big-test"  );
        $menyList[] = ("Skap en ny lista",    "ux-button__create-new-list", "create-new-list" );
        $menyList[] = ("Hantera mina listor", "ux-button__manage-my-lists", "manage-my-lists" );


        

      


    }
}

