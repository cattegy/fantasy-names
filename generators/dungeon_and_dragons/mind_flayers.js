function generator$dungeon_and_dragons$mind_flayers() {
	var nm1 = ["","","","c","d","dr","g","gr","k","l","q","qh","r","s","sr","sv","sl","t","th","tr","v","z"];
	var nm2 = ["a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","a","e","u","o","o","i","au","uoo","ua","uo","ao"];
	var nm3 = ["b","br","d","dr","dd","g","gg","gr","gch","gl","l","ll","lb","ld","nk","nch","ng","ph","phr","r","rd","rb","rg","rds","s","ss","sg","sr","sd","sb","z","zz"];
	var nm4 = ["a","e","i","u","a","e","i","u","o"];
	var nm5 = ["b","d","g","l","m","n","ng","r","v","y","z"];
	var nm6 = ["a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","a","e","o","u","i","au","ua","ao","uo"];
	var nm7 = ["k","kt","ks","l","ll","lt","m","n","r","sk","ss","ssk","x"];

	var br = "";
	var nMs;

	var rnd = Math.random() * nm1.length | 0;
	var rnd2 = Math.random() * nm2.length | 0;
	var rnd3 = Math.random() * nm7.length | 0;
	var i = Math.random()*10;

	if(i < 2){
		while(nm1[rnd] < 3 || nm1[rnd] === nm7[rnd3]){
			rnd = Math.random() * nm1.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm7[rnd3];
	}
	else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm7[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		if(i < 6){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm7[rnd3];
		}else{
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm6.length | 0;
			while(nm5[rnd6] === nm3[rnd4] || nm5[rnd6] === nm7[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			if(i < 9){
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm7[rnd3];
			}else{
				rnd8 = Math.random() * nm5.length | 0;
				rnd9 = Math.random() * nm4.length | 0;
				while(nm5[rnd8] === nm5[rnd6]){
					rnd8 = Math.random() * nm5.length | 0;
				}
				nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm5[rnd8] + nm4[rnd9];
			}
		}
	}

	return nMs.charAt(0).toUpperCase()+nMs.substr(1);
}