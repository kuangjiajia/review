// function ajax() {
// 	console.log(123)
// }

// ajax() 

// kuangjiajia
// console.log(12311231)


// function test() {
// 	console.log("this is test")
// }

// test()
// kuangjiajia


let arr = [1, 2, 3]

let newArr = arr.map(i => i * 2)


Array.prototype.maps = function (fn) {
	return this.reduce((prev, next) => {
		return prev.concat(fn(next))
	}, [])
}

let a = arr.maps(i => i + 1)
console.log(a)
