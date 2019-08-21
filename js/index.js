$(document).ready(function(){
    var index = 0;
    $(".next").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        console.log(index)
        $(".content img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active")
    })
    $(".prev").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        console.log(index)
        $(".content img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active")
    })
})