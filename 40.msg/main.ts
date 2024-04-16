//Define the make_album function
function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{artist:string,title:string,tracks?:number}={
        artist:artist_name,
        title:album_title,
    };
    if (tracks !== undefined){
        album.tracks =tracks;
    }
    return album;
}
//calling three functions and creating three variables with different values
let album1=make_album("shabih","Album title 1");

//printing values of our object created my function
let album2=make_album("Ani","Album title 2");

//calling a make_album function with third perameter
let album3=make_album("Zain","Album title 3",10);

//printing the variables

console.log(album1);

console.log(album2);

console.log(album3);

