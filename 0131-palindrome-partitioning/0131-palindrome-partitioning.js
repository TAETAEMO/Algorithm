/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	const palindrome = [];
	const isPalindrome = (str) => {
		let left = 0;
		let right = str.length - 1;

		while (left < right) {
			if (str[left++] !== str[right--]) return false;
		}
		return true;
	};

	const partitioning = (temp = [], remain = s) => {
		if (!remain.length) {
			palindrome.push(temp);
			return;
		}

		for (let index = 0; index < remain.length; index++) {
			const str = remain.slice(0, index + 1);

			if (!isPalindrome(str)) continue;
			partitioning([...temp, str], remain.slice(index + 1));
		}
	};

	partitioning();
	return palindrome;
};