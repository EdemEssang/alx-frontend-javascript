interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Edem',
	lastName: 'Ukoh',
	age: 34,
	location: 'Onitsha',
};

const student2: Student = {
	firstName: 'Okon',
	lastName: 'smart',
	age: 30,
	location: 'Eket',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = '#efefef';
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
	const row = document.createElement('tr');
	const firstColumn = document.createElement('td');
	const secondColumn = document.createElement('td');

	firstColumn.textContent = student.firstName;
	secondColumn.textContent = student.location;

	firstColumn.style.border = '1px solid #efefef';
	secondColumn.style.border = '1px solid #efefef';
	firstColumn.style.padding = '5px';
	secondColumn.style.padding = '5px';

	row.appendChild(firstColumn);
	row.appendChild(secondColumn);
	tbody.appendChild(row);
});

document.body.appendChild(table);
