function detectWord(str) {
	let newStr = ""
	for(let i = 0; i<str.length; i++){
		if(str[i].match(/[a-z]/)){
			newStr += str[i]
		}
	}
	return newStr
}