var accessAllowed;
var age = 17;

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed);

accessAllowed = age > 18 ? true : false;
