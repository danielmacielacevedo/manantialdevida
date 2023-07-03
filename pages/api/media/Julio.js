const data = [
  // Daniel
  {
    id: "2v8vhcmISgeZKEDk2YDACmGgDJI2",
    title: "Daniel Maciel A.",
    classes: [
      {
        category: "Audio",
        date: "Domingo",
        dia: "02",
        class: "9:40-10:20",
      },

      {
        category: "Audio",
        date: "Miércoles",
        dia: "12",
        class: "18:40-19:20",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "14",
        class: "18:40-20:00",
      },

      {
        category: "Audio",
        date: "Miércoles",
        dia: "26",
        class: "18:40-19:20",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "28",
        class: "18:40-20:00",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "30",
        class: "9:40-10:20",
      },
    ],
  },

  // Elias
  {
    id: "wSTKpsaybUQarJQsNsNhuLU1EWp2",
    title: "Elias Cano",
    classes: [
      {
        category: "Audio",
        date: "Miércoles",
        dia: "05",
        class: "18:40-19:20",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "07",
        class: "18:40-20:00",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "09",
        class: "11:15-13:30",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "16",
        class: "9:40-10:20",
      },

      {
        category: "Audio",
        date: "Miércoles",
        dia: "19",
        class: "18:40-19:20",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "21",
        class: "18:40-20:00",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "23",
        class: "11:15-13:30",
      },
    ],
  },

  // Josue
  {
    id: "Fieh4JmFKzVWQFukMOihaJ1cKGu1",
    title: "Josue Cazares",
    classes: [
      {
        category: "Audio",
        date: "Viernes",
        dia: "07",
        class: "20:00-21:00",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "14",
        class: "20:00-21:00",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "21",
        class: "20:00-21:00",
      },

      {
        category: "Audio",
        date: "Viernes",
        dia: "28",
        class: "20:00-21:00",
      },
    ],
  },

  // Kevin
  {
    id: "zgzs6MN3s8bycpsy0RK6HfQYGwy1",
    title: "Kevin Martínez",
    classes: [
      {
        category: "Audio",
        date: "Domingo",
        dia: "02",
        class: "11:15-13:30",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "09",
        class: "9:40-10:20",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "16",
        class: "11:15-13:30",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "23",
        class: "9:40-10:20",
      },

      {
        category: "Audio",
        date: "Domingo",
        dia: "30",
        class: "11:15-13:30",
      },
    ],
  },

  // Marlen
  {
    id: "W29vwL62AbSd37xzOfRdDDAH3wH3",
    title: "Marlen Zamora",
    classes: [
      {
        category: "Grabación",
        date: "Domingo",
        dia: "02",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Miércoles",
        dia: "05",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Domingo",
        dia: "09",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Miércoles",
        dia: "12",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Domingo",
        dia: "16",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Miércoles",
        dia: "19",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Domingo",
        dia: "23",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Miércoles",
        dia: "26",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Domingo",
        dia: "30",
        class: "Grabación",
      },
    ],
  },

  // Yoselin
  {
    id: "sdiHJ7G0wUS6DNdc9yprVQWLw763",
    title: "Yoselin Galarza",
    classes: [
      {
        category: "ProPresenter",
        date: "Domingo",
        dia: "02",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Miércoles",
        dia: "05",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Domingo",
        dia: "09",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Miércoles",
        dia: "12",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Domingo",
        dia: "16",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Miércoles",
        dia: "19",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Domingo",
        dia: "23",
        class: "ProPresenter",
      },

      {
        category: "Grabación",
        date: "Miércoles",
        dia: "26",
        class: "Grabación",
      },

      {
        category: "ProPresenter",
        date: "Domingo",
        dia: "30",
        class: "ProPresenter",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}

// export default data;
