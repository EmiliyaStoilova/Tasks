function solve(n) {
    let result = '';
    let toRep = Math.floor(n / 2); //Counts of row with more than n stars(*)
    let repeatedStar = 0; //The increase for each row with more than n starts(*)
    let repeatedDashes = n; //The decrease for middle dashed(-)

    for(let i = n; i >= 0; i--) {
        let startAndEnd = '-'.repeat(i);
        let leftAndRigthStarsUp = '*'.repeat(n + repeatedStar);
        let middleDashesDwon = '-'.repeat(repeatedDashes + 2);

        if(n <= i + toRep) {
            result += (startAndEnd + leftAndRigthStarsUp + '-'.repeat(repeatedDashes) + leftAndRigthStarsUp + startAndEnd).repeat(2) + '\n';
            repeatedStar += 2;
            repeatedDashes -= 2;            
        } else {
            result += (startAndEnd + '*'.repeat(n) + middleDashesDwon + '*'.repeat(n + repeatedStar - 2) + middleDashesDwon + '*'.repeat(n) + startAndEnd).repeat(2) + '\n';
            repeatedStar -= 2;            
            repeatedDashes += 2;
        }
    }

    console.log(result.trim())
}

solve(9);