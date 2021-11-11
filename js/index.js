let peoples = [
	{
		name: "Luan Nascimento Santos",
		tel: "+55 (11) 99999-9999",
		xp: false
	},
	{
		name: "Arthur Gagliard",
		tel: "+55 (11) 99999-9999",
		xp: true
	},
	{
		name: "João Miranda",
		tel: "+55 (11) 99999-9999",
		xp: true
	}
]

var tableBody = document.querySelector("table.lista tbody");


function removeElement(element, person, index){
	element.closest('tr').remove();
	console.log(person)
	//peoples.slice(index, 1);
}

for (let [index, person] of peoples.entries()){
	console.log(typeof person)
	let pessoa = `<tr style="background-color: #${(index % 2 == 0) ? 'fff': 'eee'}">
		<td>
			${person.name}
		</td>
		
		<td>
			${person.tel}
		</td>

		<td style="color: ${(person.xp ? 'green' : 'red')}">
			<strong>${(person.xp ? "Sim": "Não")}</strong>
		</td>

		<td>
			<button onclick="removeElement(this, ${Array.from(person)} )">
				Excluir
			</button>
		</td>

	</tr>`

	tableBody.innerHTML += pessoa;
}