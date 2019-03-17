// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// function reverseList()


// var longestPalindrome = function (s) {
//   let len = s.length
//   let max = 0
//   let x, ss
//   let str
//   if (len <= 1) return s
//   for (let i = 0; i < len; i++) {
//     [x, ss] = find(s, i, i, len)
//     if (x > max) {
//       max = x
//       str = ss
//     }
//     [x, ss] = find(s, i, i + 1, len)
//     if (x > max) {
//       max = x
//       str = ss
//     }
//   }
//   return str
// }



// function find(s, i, j, len) {
//   let index = j - i + 1
//   let str = ""
//   while (i >= 0 && j < len) {
//     if (s[i] === s[j]) {
//       str = s.slice(i, j + 1)
//       i--
//       j++
//       index += 2
//     } else {
//       break
//     }
//   }
//   return [index, str]
// }

// console.log(longestPalindrome("abba"))



// var findKthLargest = function (nums, k) {
//   adjust(nums) //建立大顶堆
//   let len = nums.length
//   let x = 1
//   for (let i = len - 1; i >= 0; i--) {
//     [nums[0], nums[i]] = [nums[i], nums[0]];
//     shift(nums, 0, i)
//     if (x === k) {
//       return nums[i]
//     }
//     x++
//   }
// }

// function adjust(nums) {
//   let len = nums.length
//   let n = Math.floor((len - 1) / 2)
//   for (let i = n; i >= 0; i--) {
//     shift(nums, i, len)
//   }
// }

// function shift(arr, i, len) {
//   let left = 2 * i + 1
//   let right = 2 * i + 2
//   let index = i
//   if (arr[left] > arr[index] && left < len) {
//     index = left
//   }
//   if (arr[right] > arr[index] && right < len) {
//     index = right
//   }
//   if (index !== i) {
//     [arr[i], arr[index]] = [arr[index], arr[i]];
//     shift(arr, index, len)
//   }
// }

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))

// console.log(123)


