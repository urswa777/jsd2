function random_num (min, max) {
	var num=(Math.random() * (max - min) + min).ToFixed();
	return num;
}

function debugging_msg(x) {
    console.log(Date()+': '+ x);
}

