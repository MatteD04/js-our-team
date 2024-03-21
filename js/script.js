//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        teamName: 'Wayne Barnett',
        teamRole: 'Founder & CEO',
        teamImage: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        teamName: 'Angela Caroll',
        teamRole: 'Chief Editor',
        teamImage: 'angela-caroll-chief-editor.jpg'
    },
    {
        teamName: 'Walter Gordon',
        teamRole: 'Office Manager',
        teamImage: 'walter-gordon-office-manager.jpg'
    },
    {
        teamName: 'Angela Lopez',
        teamRole: 'Social Media Manager',
        teamImage: 'angela-lopez-social-media-manager.jpg'
    },
    {
        teamName: 'Scott Estrada',
        teamRole: 'Developer',
        teamImage: 'scott-estrada-developer.jpg'
    },
    {
        teamName: 'Barbara Ramos',
        teamRole: 'Graphic Designer',
        teamImage: 'barbara-ramos-graphic-designer.jpg'
    }
];

const tableContainer = document.querySelector('#table');
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < team.length; i++) {
    const thisMember = team[i];
    console.log(`nome: ${thisMember.teamName}, ruolo: ${thisMember.teamRole}, immagine: ${thisMember.teamImage}`);

    const newTable = `
    <tr>
        <td>${thisMember.teamName}</td>
        <td>${thisMember.teamRole}</td>
        <td>${thisMember.teamImage}</td>
    </tr>`;

    tableContainer.innerHTML += newTable;
}
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
