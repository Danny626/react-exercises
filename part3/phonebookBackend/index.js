const express = require('express');
const app = express();

app.use(express.json());

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/', (request, response) => {
	response.send('<h1>Hello world!</h1>');
});

// get all persons
app.get('/api/persons', (request, response) => {
	response.json(persons);
});

// fetch a person by id
app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find(person => person.id === id);

	if(person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

// delete a person by id
app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter(person => person.id !== id);

	response.status(204).end();
});

// adding a new person
app.post('/api/persons', (request, response) => {
	const body = request.body;
	
	if(!body.content || !body.name || !body.number) {
		return response.status(400).json({
			error: 'content missing'
		})
	}

	const nameRegistered = persons.find(person => person.name === body.name);

	if( nameRegistered ) {
		return response.status(409).send({ error: 'name must be unique' })
	}

	const person = {
		content: body.content,
	};

	persons = persons.concat(person);

	response.json(person);
});

// get phonebook length and time request
app.get('/info', (request, response) => {
	const currentDate = Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'long' , hour12: false}).format(new Date());
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	const info = `
		<div>
			<p>Phonebook has info for ${persons.length} people</p>
		</div>

		<div>
			<p>${currentDate} (${timeZone})</p>
		</div>`;
	
	response.send(info);
});

const generateId = () => {
	const maxId = persons.length > 0
		? Math.max(...persons.map(n > n.id))
		: 0;
	return maxId + 1;
};

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
