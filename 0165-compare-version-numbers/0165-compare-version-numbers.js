/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.').map(x => +x);
    var v2 = version2.split('.').map(x => +x);
    
    for (var i = 0; i < Math.max(v1.length, v2.length); i++) {
        if (i < v1.length && i < v2.length) {
            if (v1[i] < v2[i]) return -1;
            if (v1[i] > v2[i]) return 1;
            continue;
        }
        if (i < v1.length && v1[i] > 0) return 1; 
        if (i < v2.length && v2[i] > 0) return -1; 
    }
    return 0;
};