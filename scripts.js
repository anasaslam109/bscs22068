function toggleProject(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        
        var contents = document.querySelectorAll('.project-content');
        contents.forEach(function(item) {
            item.style.display = "none";
        });
        
        content.style.display = "block";
    }
}