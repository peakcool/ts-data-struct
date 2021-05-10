import { Stack } from "../../stack";

function calculate(s: string): number {
    s = s.replace(/\s/g, '');
    s = s.replace(/\(\-/g, '(0-');
    s = s.replace(/\(\+/g, '(0+');
	const length: number = s.length;
	let nums: Stack<number> = new Stack(length * 2);
	let ops: Stack<string> = new Stack(length * 2);

	nums.push(0); // 初始0

	for (let i: number = 0; i < length; i++) {
        if (s[i] === ' ') continue
		if (s[i] === "(") {
			// 如果是左括号
			ops.push(s[i]);
		} else if (s[i] === ")") {
			// 如果是右括号

			// 计算括号内数值运算，直到遇到左括号
			while (!ops.isEmpty()) {
				const op: string = ops.top();
				if (op !== "(") {
					calc(nums, ops);
				} else {
					ops.pop();
					break;
				}
			}
		} else {
			// 如果是数字
			if (isNumber(s[i])) {
				let u: string = "";
				let j: number = i;
				while (j < length && isNumber(s[j])) {
					u += s[j];
					j++;
				}
				i = j - 1;
				nums.push(parseInt(u));
			} else {
				// 如果是符号
				while (!ops.isEmpty() && ops.top() !== '(') {
					calc(nums, ops);
				}
				ops.push(s[i]);
			}
		}
	}

	while (!ops.isEmpty()) calc(nums, ops);

	return nums.pop();
}

function calc(nums: Stack<number>, ops: Stack<string>): void {
	if (nums.isEmpty() || nums.getLength() < 2) return;
	if (ops.isEmpty()) return;
	let b = nums.pop();
	let a = nums.pop();
	let op = ops.pop();

	let result: number = op === "+" ? a + b : a - b;
	nums.push(result);
}

function isNumber(num: string): boolean {
    return !isNaN(Number(num));
}

// test 1
// let s = "1 + 1";
// console.log('result:', calculate(s))

// test 2
// let s = " 2-1 + 2 "
// console.log('result:', calculate(s))

// let s = "(1+(4+5+2)-3)+(6+8)"
// console.log('result:', calculate(s))

// let s = "1-(+1+1)";
// console.log('result:', calculate(s))

let s = "   (  3 ) ";
console.log('result:', calculate(s))

// let s = "(1+(+4+5+2)-3)+(+6+8)"
// console.log('result:', calculate(s))

