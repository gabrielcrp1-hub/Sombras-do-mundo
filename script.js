let views = localStorage.getItem(videoID);

if(views === null){

    views = initialViews;

}else{

    views = parseInt(views);

}

views++;

localStorage.setItem(videoID, views);

document.getElementById("views").innerText =
views.toLocaleString('pt-BR');