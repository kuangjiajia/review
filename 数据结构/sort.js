var arr = [1, 3, 5, 3, 2, 3, 1, 2, 3]

//冒泡排序

// function bubbleSort(arr) {
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
// }

// bubbleSort(arr)
// console.log(arr)

//快速排序

// function quickSort(arr) {
//   let len = arr.length
//   if (len <= 1) {
//     return arr
//   }
//   let leftArr = []
//   let rightArr = []
//   let tmpIndex = Math.floor(Math.random() * len)
//   for (let i = 0; i < len; i++) {
//     if (i !== tmpIndex) {
//       if (arr[i] > arr[tmpIndex]) {
//         rightArr.push(arr[i])
//       } else {
//         leftArr.push(arr[i])
//       }
//     }
//   }
//   return [
//     ...quickSort(leftArr),
//     arr[tmpIndex],
//     ...quickSort(rightArr)
//   ]
// }

// console.log(quickSort(arr))

// function quickSort(arr, start, end) {
//   if (start < end) {
//     let index = partion(arr, start, end)
//     quickSort(arr, start, index - 1)
//     quickSort(arr, index + 1, end)
//   }
// }

// function partion(arr, start, end) {
//   let left = start, right = end
//   let pivot = arr[left]
//   while (left < right) {
//     while (left < right && arr[right] >= pivot) {
//       right--
//     }
//     while (left < right && arr[left] <= pivot) {
//       left++
//     }
//     if (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//     }
//   }
//   [arr[start], arr[right]] = [arr[right], arr[start]]
//   return right
// }

// quickSort(arr, 0, arr.length - 1)
// console.log(arr)


// function insertSort(arr) {
//   let len = arr.length
//   for (let i = 1; i < len; i++) {
//     let val = arr[i], j
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > val) {
//         arr[j + 1] = arr[j]
//       } else {
//         break
//       }
//     }
//     arr[j + 1] = val
//   }
// }

// insertSort(arr)
// console.log(arr)


//堆排序

// function cret(arr) {
//   let len = arr.length
//   let n = Math.floor((len - 1) / 2)
//   for (let i = n; i >= 0; i--) {
//     shift(arr, len, i)
//   }
// }

// function shift(arr, len, i) {
//   let index = i
//   let left = 2 * index + 1
//   let right = 2 * index + 2
//   if (arr[left] > arr[index] && left < len) {
//     index = left
//   }
//   if (arr[right] > arr[index] && right < len) {
//     index = right
//   }
//   if (i !== index) {
//     [arr[i], arr[index]] = [arr[index], arr[i]];
//     shift(arr, len, index)
//   }
// }

// function heapSort(arr) {
//   cret(arr)
//   let len = arr.length
//   for (let i = len - 1; i >= 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     shift(arr, i, 0)
//   }
// }

// heapSort(arr)
// console.log(arr)


//归并排序


// function mergeSort(arr, start, end) {
//   if (start < end) {
//     let mid = Math.floor((start + end) / 2)
//     mergeSort(arr, start, mid)
//     mergeSort(arr, mid + 1, end)
//     merge(arr, start, mid, end)
//   }
// }

// function merge(arr, start, mid, end) {
//   let x = start
//   let y = mid + 1
//   let newArr = [], k = 0
//   while (x <= mid && y <= end) {
//     if (arr[x] > arr[y]) {
//       newArr[k++] = arr[y++]
//     } else {
//       newArr[k++] = arr[x++]
//     }
//   }
//   while (x <= mid) {
//     newArr[k++] = arr[x++]
//   }
//   while (y <= end) {
//     newArr[k++] = arr[y++]
//   }
//   for (let i = 0, len = end - start; i <= len; i++) {
//     arr[start + i] = newArr[i]
//   }
// }

// mergeSort(arr, 0, arr.length - 1)

// console.log(arr)



// function selectSort(arr) {
//   let len = arr.length
//   let min, index
//   for (let i = 0; i < len; i++) {
//     min = arr[i]
//     index = i
//     for (let j = i; j < len; j++) {
//       if (arr[j] < min) {
//         min = arr[j]
//         index = j
//       }
//     }
//     [arr[i], arr[index]] = [arr[index], arr[i]]
//   }
// }

// selectSort(arr)
// console.log(arr)



// function shellSort(arr) {
//   let len = arr.length, gap = Math.floor(len / 2)
//   if (len <= 1) return arr
//   while (gap > 0) {
//     for (let i = gap; i < len; i++) {
//       for (let j = i; j > 0; j -= gap) {
//         if (arr[j - gap] > arr[j]) {
//           [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]]
//         } else {
//           break
//         }
//       }
//     }
//     gap = Math.floor(gap / 2);
//   }
// }

// function shellSort(arr) {
//   let len = arr.length
//   let gap = Math.floor(len / 2)
//   while (gap > 0) {
//     for (let i = gap; i < len; i++) {
//       for (let j = i; j > 0; j -= gap) {
//         if (arr[i - gap] > arr[j]) {
//           [arr[i - gap], arr[j]] = [arr[j], arr[i - gap]]
//         } else {
//           break
//         }
//       }
//     }
//     gap = Math.floor(gap / 2)
//   }
// }

// shellSort(arr)
// console.log(arr)