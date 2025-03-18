/* Le programme ici doit premierement trier le 
 tableau fourni (ordre croissant) puis selectionner 
juste les les nombres paires */

// on va utiliser FP
const mylist=[1,7,10,9,8,2];
const finallist=mylist.
sort((a,b)=>a-b).
filter((n)=> n%2 == 0);
console.log(finallist);
//using sort and filter