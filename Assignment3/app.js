var forLoopSum = 0;
var whileLoopSum = 0;
for(var i = 1;i<=1000;i++)
{
    forLoopSum += i;
}

var i = 1;
while(i<=1000)
{
    whileLoopSum += i;
    i++;
}

console.log("forLoopSum "+forLoopSum);
console.log("whileLoopSum "+whileLoopSum);