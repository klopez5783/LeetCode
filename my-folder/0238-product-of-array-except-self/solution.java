class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] arry = new int[nums.length];
        int left = 1,right = 1;
        for(int i = 0 ; i < nums.length ; i++){
            arry[i] = left;
            left *= nums[i];
        }

        for(int i = arry.length - 1 ; i >= 0 ; i--){
            arry[i] *= right;
            right *= nums[i];
        }

        return arry;
    }
}
