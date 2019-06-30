//check of specific TODO by clicking
$("ul").on("click","li",function(){
  /*  if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
            color:"black",
            textDecoration:"none"
        });
    }
    else
    {
        $(this).css({
            color:"gray",
            textDecoration:"line-through"
        });
    }*/
    $(this).toggleClass("completed");

});

//click on X to delete todo
$("ul").on("click","span",function(e){
    //it will remove the parent element to0
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //this function will not lead the clicking effect to the furthur portion of li
    e.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //grabbing new to do text from input
       var todotext=$(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todotext +"</li>");
        
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

