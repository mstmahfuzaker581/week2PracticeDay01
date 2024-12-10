var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bW= friends[0]; 

for (let i = 1; i < friends.length; i++) {
    if (friends[i].length > bW.length) {
        bW= friends[i];
    }
}

console.log("The biggest word is: " + bW);
