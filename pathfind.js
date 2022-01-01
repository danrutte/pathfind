const g = [
    [0, 1, 0, 0, 3, 0, 0, 0, 0]
    [1, 0, 4, 0, 2, 2, 0, 0, 0]
    [0, 4, 0, 0, 0, 1, 0, 0, 0]
    [0, 0, 0, 0, 2, 0, 0, 2, 0]
    [0, 2, 0, 2, 1, 0, 0, 3, 0]
    [0, 2, 1, 0, 0, 0, 0, 2, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 3, 2, 0, 0, 1]
    [0, 0, 0, 0, 0, 0, 7, 1, 0]

];

console.log(pathExists(0,8));

function pathExists(start, end){
    const toVisit = [];
    const Visited = [];
    toVisit.push(start);
    while(toVisit.lenght){
        let actual = toVisit.pop();
        if(actual == end){
            return true;
            }
         }
     }