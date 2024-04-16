//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating three variables with different values
var album1 = make_album("shabih", "Album title 1");
//printing values of our object created my function
var album2 = make_album("Ani", "Album title 2");
//calling a make_album function with third perameter
var album3 = make_album("Zain", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
