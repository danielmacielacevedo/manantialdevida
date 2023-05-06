const data = [

	{
		id: 'Damas',
		title: 'Damas',
		classes: [
			{
				category: 'Damas',

				titulo: 'Festejo a las mamás',
				dia: 'Sábado 06',
				hora: '05:00 PM',
				lugar: 'Manantial de Vida',
			},
		]
	},

	{
		id: 'Niños',
		title: 'Niños',
		classes: [
			{
				category: 'Niños',

				titulo: 'Tarde de película',
				dia: 'Sábado 13',
				hora: '06:00 PM',
				lugar: 'Manantial de Vida',
			},
		]
	},

	{
		id: 'Jóvenes',
		title: 'Jóvenes',
		classes: [
			{
				category: 'Jóvenes',

				titulo: 'Velada de oración',
				dia: 'Viernes 12',
				hora: '08:00 PM',
				lugar: 'La finca "Luis Acevedo"',
			},
			{
				category: 'Jóvenes',

				titulo: 'Hamburguesada',
				dia: 'Sábado 20',
				hora: '06:00 PM',
				lugar: 'Manantial de Vida',
			},
		]
	},
];

export default function handler(req, res) {
	res.status(200).json(data);
}