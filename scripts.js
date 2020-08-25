function show(id){

    document.getElementsByClassName("active")[0].className ="btn"
    document.getElementsByClassName("article-active")[0].className ="hidden"

    var btnId = "btn-"+id

    document.getElementById(btnId).className ="btn active"
    document.getElementById(id).className ="article-active"

}