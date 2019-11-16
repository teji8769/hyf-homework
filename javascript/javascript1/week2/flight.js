
function getFullName(firstname , surname , useFormalName) {
if (useFormalName) {
    let formalName = `Lord ${firstname} ${surname}` ;
    return formalName;
} else {
    let fullName = `${firstname} ${surname}`
    return  fullName;
}
}
let fullName1 = getFullName("Tejaswini","Lattupally",true);
 console.log(fullName1);
 
let fullName2 = getFullName("Damu","Lattupally",false);
 console.log(fullName2);
 
 
