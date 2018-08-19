function brute_force_approach(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        let exists = result.find(r => r.char === str[i]);
        if (!exists) {
            for (let j = i; j < str.length; j++) {
                if (str[i] === str[j]) {
                    count = count + 1;
                }
            }
            result.push({ char: str[i], cnt: count });
        }
    }
    return result;
}

function brute_force_approach_clean(str) {
    let result = [];
    for(let i= 'a'.charCodeAt(0);i<='z'.charCodeAt(0);i++){
        let char = String.fromCharCode(i);
        let cnt = 0;
        for(let j=0;j<str.length;j++){
            if(str[j]===char)cnt++;
        }
        if(cnt>0)result.push({ char, cnt })
    }
    return result;
}


function brute_force_approach_improvement_1(str) {
    let seen = [];
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        let exists = seen[str[i]];
        if (!exists) {
            for (let j = i; j < str.length; j++) {
                if (str[i] === str[j]) {
                    count = count + 1;
                }
            }
            seen[str[i]]=count;
        }
    }
    // console.log()
    return Object.keys(seen).sort().map(key=>({char : key,cnt:seen[key]}));
}

function brute_force_approach_improvement_2(str) {
    let count = [];
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }
    return Object.keys(count).sort().map(key=>({char : key,cnt:count[key]}));
}

const freqCount = {
    brute_force_approach,
    brute_force_approach_improvement_1,
    brute_force_approach_improvement_2,
    brute_force_approach_clean
}
export default freqCount