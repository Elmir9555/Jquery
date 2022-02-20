$(function () {


    let ul = $("#list")
    let btn = $("#btnadd")
    let li = $("#list li")


    // btn.click(function () {
    //     let newLi=$(`<li class="list-group-item">${count}</li>`)
    //     ul.append(newLi)
    //     count += 1
    // })
    let count = 0;
    $(document).on("click","#btnadd", function () {
        let newLi = $(`<li class="list-group-item">${count}</li>`)
        ul.toggle();
       
        ul.prepend(newLi)
        count += 1
       
    })
   

    // $(document).on("click","#btnadd", function () {
    //     // ul.hide();
    //     // ul.toggle();
    //     //  ul.toggle("slow");
    //     // ul.show();

    // })

    // $(document).on("click","#btn", function () {
       
    //     // $(".box").slideUp();
    //     $(".box").slideToggle();
    //     // $(".box").slideDown();

    // })


    //     $(document).on("click","#btn", function () {
       
    //     // $(".box").fadeOut(3000);
    //     $(".box").fadeToggle(3000);
       
    //     // $(".box").fadeToggle(2000).css("background-color","hotpink")

    // })

    //    $(document).on("click","#btn", function () {
       
    //     $("p").hide("slow",function () {
    //         alert("Salammmm")
    //     });

    // })
















})