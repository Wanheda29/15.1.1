function showOptions(){
    let options = document.getElementById("options");
    
    if(options.style.display == "none"||options.style.display ==""){
        options.style.display = "block";
    }else{
        options.style.display = "none"
    }
}