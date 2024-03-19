//Array of current users
let current_users = ["ali","Ani","Zain","Akber","Batool"];
// array of new users
let new_users =["Ali","Ani","shabih","Muhib","Abbas"];
//loop through new users to check to user name avaliblity
new_users.forEach(new_one_users => {
   //    Making a condition for username already exist and save in our_condition variable
  let our_condition = current_users.some(current_one_users =>current_one_users.toLowerCase() === new_one_users.toLowerCase())
//print different messages using
   if (our_condition){
    console.log(`Sorry ${new_one_users} is already taken!`)
}else{
    console.log(`This username ${new_one_users} in avaliable`)
}
    

})