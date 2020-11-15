let table = document.querySelector('#table');
coll = [1,2,3,4,5,6,7,8];
rows = ['a','b','c','d','e','f','g','h'];


for (var z = 0; z < 9; z++) {
	let tr = document.createElement('tr');

	for (let i = 0; i < 9; i++) {
		let td = document.createElement('td');
		if (z ==0 && z ==0){
			td.style.backgroundColor = 'white'
			td.style.border = 0;
		}
		if (z == 0 && i > 0){
			td.textContent = rows[i-1];
			td.style.backgroundColor = 'white'
			td.style.border = 0;
			td.style.textAlign = 'center';
			}
		if (i == 0 && z > 0){
			td.textContent = coll[z-1];
			td.style.backgroundColor = 'white';
			td.style.border = 0;
			td.style.textAlign = 'center';
		}
		if (i > 0 && z > 0){
			if (i % 2 == 0 && z % 2 != 0){
				td.style.backgroundColor = 'brown'
			}
			else if (i % 2 != 0 && z % 2 == 0){
				td.style.backgroundColor = 'brown'
			}
			
		}

		
		tr.appendChild(td);
	
	}
	
	table.appendChild(tr);
}