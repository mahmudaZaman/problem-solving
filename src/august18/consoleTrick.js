function rotatedSquare(size, char) {
    let l, r;
    l = r = (size - 1) / 2;
    let leftInc = -1, rightInc = 1;
    for (let row = 0; row < size; row++) {
        let rowResult = "";
        for (let column = 0; column < size; column++) {
            if (column >= l && column <= r) {
                rowResult += char;
            }
            else rowResult += " ";
        }
        l += leftInc;
        r += rightInc;
        if (l === 0) {
            leftInc *= -1;
            rightInc *= -1;
        }
        console.log(rowResult);
    }
}

function pyramid(size, char) {
    let left = 0;
    let right = 0;
    let rightInc = 1;
    for (let row = 0; row < (size * 2) - 1; row++) {
        let result = "";
        for (let column = 0; column < size; column++) {
            if (column >= left && column <= right) {
                result += char;
            }
            else result += " ";
        }
        if (right === size - 1) {
            rightInc = -1;
        }
        right += rightInc;
        console.log(result);
    }
}

function rotatedSquareWithNumber(size, char ){
    let l, r;
    l = r = (size - 1) / 2;
    let leftInc = -1, rightInc = 1;
    for (let row = 0; row < size; row++) {
        let rowResult = "";
        for (let column = 0; column < size; column++) {
            if (column >= l && column <= r) {
                rowResult += char;
            }
            else rowResult += " ";
        }
        l += leftInc;
        r += rightInc;
        if (l === 0) {
            leftInc *= -1;
            rightInc *= -1;
        }
        console.log(rowResult);
    }
}
const consoleTrick = {
    rotatedSquare,
    pyramid,
    rotatedSquareWithNumber
}
export default consoleTrick;