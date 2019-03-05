function shuffle(arr) {
  var len = arr.length
  for (var i = len - 1; i >= 0; i--) {
    var x = Math.floor(Math.random() * (i + 1));
    [arr[x], arr[i]] = [arr[i], arr[x]]
  }
  console.log(arr)
}
arr = [1, 2, 3, 4, 5]
shuffle(arr)