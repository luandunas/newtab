let peoples = localStorage.getItem("peoples") ? JSON.parse(localStorage.getItem("peoples")) : [];

// let peoples = [
// 	{
// 		name: "Luan Nascimento Santos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Arthur Gagliard",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "João Miranda",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "Guilherme Guirolhos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Felipe Teixeira",
// 		tel: "+55 (11) 99999-9999",
// 		xp: true
// 	},
// 	{
// 		name: "Pedro Melo Henrique",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	},
// 	{
// 		name: "Marcos Fernandes Ramos",
// 		tel: "+55 (11) 99999-9999",
// 		xp: false
// 	}
// ]

var tableBody = document.querySelector("table.lista tbody");

//Arrumar a logica para remover as pessoas dos Objetos, apenas a primeira vez está removendo a pessoa correta, pois o objeto é atualizado mas no FOR ainda esta armazenando o antigo objeto.

//Possivel solução, trabalhar com identificação unica nas pessoas e excluir os objetos baseado nessa identificação.

function drawTable(){

	currentLines = document.querySelectorAll(".dinamic-content");
	currentLines.forEach((element) =>{
		element.remove();
	})

	for (let [index, person] of peoples.entries()){
		let pessoa = `<tr class="dinamic-content" style="background-color: #${(index % 2 == 0) ? 'fff': 'eee'}">
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
				<button onclick="deleteUser(${index})">
					Excluir
				</button>
			</td>

		</tr>`

		tableBody.innerHTML += pessoa;
	}
}

function deleteUser(index){
	peoples.splice(index, 1); 
	drawTable(); 
	localStorage.setItem("peoples", JSON.stringify(peoples));
}

drawTable();