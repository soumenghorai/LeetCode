function twoSum(nums, target) {
    //     let map = {};
       
    //    for(let i = 0; i<nums.length; i++) {
    //        let reqTarget = target - nums[i];
    //        if(map[reqTarget] != undefined) {
    //            return [map[reqTarget], i];
    //        }
    //        map[nums[i]] = i; 
    //    }
        for(let i = 0; i<nums.length; i++){
            for(let j = i+1; j<nums.length; j++){
                if(nums[i] + nums[j] == target){
                    let reqTarget = [i,j];
                    return reqTarget;
                }
            }
        }
        return false;
    };
    let nums = [2,7,11,15];
    let target = 22;
    console.log(twoSum(nums, target));