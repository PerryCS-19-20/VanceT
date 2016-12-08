function buildMap(kool) {
    var siteMap = document.getElementById(kool);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    list.appendChild(item("Home", "index.html"));
    list.appendChild(item("About Me", "aboutme.html"));
    list.appendChild(item("Class Things",""));
    
    subList.appendChild(item("Breakout", "breakout.html"));
    subList.appendChild(item("Fun Ball", "codehs.html"));
    subList.appendChild(item("Other", "other.html"));
    subList.appendChild(item("Popup", "popup.html"));
    subList.appendChild(item("To Do List", "todolist.html"));
    subList.appendChild(item("Chalkboard", "chalkboard.html"));
    subList.appendChild(item("Tic-Tac-Toe", "tictactoe.html"));
    subList.appendChild(item("Multiplication Table", "Multiplication.html"));
    subList.appendChild(item("Table with Slider", "TimesSlider.html"));
    list.appendChild(subList);
    siteMap.appendChild(list);
}
function item(name, link) {
    var kool = document.createElement("a");
    var li = document.createElement("li");
    kool.href = link;
    kool.textContent = name;
    li.appendChild(kool);
    return li;
}


