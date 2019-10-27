function my_Dictionary() {
    var Beer = {
        Name:"Double Dunk",
        Brewery:"Praire Artisan ALes",
        Type:"American Imperial Stout",
        ABV:11.9,
        Location:"Oklahoma"
    };
    document.getElementById("Dictionary").innerHTML = Beer.Type;
}