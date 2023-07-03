// MiembrosAutorizados.js

const miembrosAutorizados = [
  "AmEBnCiVbSgtPHcMI7LUHkpbJqi1",
  // "2v8vhcmISgeZKEDk2YDACmGgDJI2",
  "U9UMfAa0LCh6f9klUhj2sK4Bx683",
  "W29vwL62AbSd37xzOfRdDDAH3wH3",
  "RUQgNwDtNLQU438wdwzTPhaMWxH2",

  "w7U8W7FU4sfR3FAjduNB5NFAiT82",
  "A3uCWAOZfYMXRzig1L74kQOfBbf1",
  "2fDInfgoOXSLJ0VKuWWb05PHgHI2",
  "tJKcQeLf3rZqajgVBvNdQEosqwC2",
  "DtPfF0troXVtASHt8SlKdlogZa52",
  "75fText1KOM1fieNBLYyCYUfuJA3",
  "KyQkvrUTmbRHnFbhqVGXtG9M22J3",
  "yK3OT3bHEifaEGZ7riUaJwmCMHI3",
  "LuUKlt3KTHNZx7t0GFUseDRij0n2",
  "sdiHJ7G0wUS6DNdc9yprVQWLw763",
  "ZIxM3r34e0S4kQSHMCbvHZ7ABy02",
  "LJtncOdSYLdWIrNmYQCxE0al54q1",
  "sSIBzQSvt8a4Wb6EHIUtPRx1JwP2",
  "jWjXU1TtiEZAM6h10xU8KFjObq73",
  "MfYMLHtJbfMdfIEMIOs6DtwVgv83",
  "nbQkU19bWjh7uo5YsvHqsYQXnDt1",
  "NeqcoHtjJzSYkYj4plkZF3aQxT12",
  "gT4ICHdF3hSs5CpTco2IoqVqKzf2",
];

function esMiembroAutorizado(idUsuario) {
  return miembrosAutorizados.includes(idUsuario);
}

export default esMiembroAutorizado;
