var View = function() {
    this.viewContainer = document.createElement("div");
}

View.views = []; 

View.add = function(viewConstructor) {
    View.views.push(viewConstructor);
}

View.swap = function(id, args) {
    if (View.view != null) {
        View.view.remove();
        View.view = null; 
    }
    
    View.view = new View.views[id](args);    
    View.view.append(document.body);    
}

View.prototype.append = function(to) {
    to.appendChild(this.viewContainer);
}

View.prototype.remove = function() {
    this.viewContainer.parentNode.removeChild(this.viewContainer);
}