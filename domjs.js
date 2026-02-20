


//show the checkbox filters and hide the create new element
function showFilter() {

    var showing = document.getElementById("newContent");
    var filters = document.getElementById("filterContent");   

    if (filters.style.display == "none" || filters.style.display == ""){

        filters.style.display = "block";
        showing.style.display = "none";
    
    }

    else {

        filters.style.display = "none";
        
    }

}


//show the create new element and hide the checkboxes
function showAddNew() {

    var showing = document.getElementById("newContent");
    var filters = document.getElementById("filterContent");


    if (showing.style.display == "none" || showing.style.display == ""){

        showing.style.display = "block";
        filters.style.display = "none";

        //centers the create new it annoyed me
        showing.style.display = 'flex';
        showing.style.alignItems = 'center';
        showing.style.justifyContent = 'center';

    }

    else {
        showing.style.display = "none";
    }

}

//filtering and getting the articles
function filterArticles() {


    var opinionated = document.getElementById("opinionCheckbox").checked;
    var receips = document.getElementById("recipeCheckbox").checked;
    var updated = document.getElementById("updateCheckbox").checked;

    var articles = document.querySelectorAll("#articleList article");

    for (var i = 0; i < articles.length; i++) {

        var article = articles[i];


        if ((article.classList.contains("opinion") && opinionated) || (article.classList.contains("recipe") && receips) || (article.classList.contains("update") && updated)) {

            article.style.display = "block";

        } 

        else {

            article.style.display = "none";

        }
    }
}

//adding the new article to the area
function addNewArticle() {

    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;

    var type = "";

    if (document.getElementById("opinionRadio").checked) {

        type = "opinion";

    }

    else if (document.getElementById("recipeRadio").checked) {

        type = "recipe";

    }

    else if (document.getElementById("lifeRadio").checked) {

        type = "update";

    }

    if (title === "" || text === "" || type === "") {

        alert("Fill out all the fields please.");

        return;

    }

    var newArticle = document.createElement("article");
    newArticle.className = type;

    var marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    var h2 = document.createElement("h2");
    h2.textContent = title;

    var p = document.createElement("p");
    p.textContent = text;

    var readMore = document.createElement("p");
    readMore.innerHTML = '<a href="moreDetails.html">Read more...</a>';

    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);
    newArticle.appendChild(readMore);

    document.getElementById("articleList").appendChild(newArticle);
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    filterArticles();

}