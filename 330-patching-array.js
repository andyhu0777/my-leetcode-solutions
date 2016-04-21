/**
 *  * @param {number[]} nums
 *   * @param {number} n
 *    * @return {number}
 *     */

var minPatches = function(nums, n) {
    var cover = 0;
    var num = 1;
    var patches = 0;
    while num index <= n) {
        if (nums.indexOf(num) == -1) {
            if (index > cover) {
                nums.push(num);
                patches++;
                cover += num;
            }
        } else {
            var i = index;
            while (i < n
            cover += index;
        }
        ++index;
    }
    return patches;
};

res = minPatches([1,2,2], 5);
console.log(res);

