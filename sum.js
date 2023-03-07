const sum = (a, b, c = 0) => {
	const res = a + b;
	const f = a + b + c;
	return res + 'rub' + c;
};

sum();