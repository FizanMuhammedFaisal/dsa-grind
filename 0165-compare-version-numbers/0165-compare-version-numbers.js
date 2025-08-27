/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const MaxLength = Math.max(v1.length, v2.length)
    while (v1.length < MaxLength) v1.push(0)
    while (v2.length < MaxLength) v2.push(0)

    for(let i=0;i<MaxLength;i++){
        if(v1[i] < v2[i]){
            return -1
        }else if(v1[i] > v2[i]){
            return 1
        }
    }
    return 0

};