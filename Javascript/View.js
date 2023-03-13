var View = function(){

    this.viewContainer = document.createElement("div");
   
 

}
View.view = null;
View.views = [];

View.add = function(v){
    View.views.push(v)
}

View.swap = function(id, args){
    
    if(View.view != null){
        View.view.remove();
        View.view = null; 
    }
    View.view = new View.views[id](args);    
    View.view.append(document.body);    
}

View.prototype.append = function(to){
    to.appendChild(this.viewContainer);
}

View.prototype.remove = function(){

    View.view.viewContainer.parentNode.removeChild(this.viewContainer);
}