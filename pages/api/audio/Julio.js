const data = [
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

  {
    id: "",
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

  {
    id: "",
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
];

export default function handler(req, res) {
  res.status(200).json(data);
}

// export default data;
