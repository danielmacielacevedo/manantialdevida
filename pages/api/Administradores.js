// Administradores.js

const Administradores = [
  // "2v8vhcmISgeZKEDk2YDACmGgDJI2",

  // "U9UMfAa0LCh6f9klUhj2sK4Bx683",
  "LJtncOdSYLdWIrNmYQCxE0al54q1",
  "RUQgNwDtNLQU438wdwzTPhaMWxH2",
];

function esAdministrador(idUsuario) {
  return Administradores.includes(idUsuario);
}

export default esAdministrador;
