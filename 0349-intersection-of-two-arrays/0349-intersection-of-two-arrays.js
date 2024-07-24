/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let intersect = function(setA, setB) {
        let intersection = new Set()
        setA.forEach(ele => {
            if(setB.has(ele)) intersection.add(ele) 
        })
        return [...intersection]
    }
    let setA = new Set(nums1)
    let setB = new Set(nums2)
    let answer = intersect(setA,setB)
    
    return answer
};