import Post from '../../components/post/Post'

export default function AllPost() {
    return (
        <>

          <Post autor="Manantial de Vida" mensaje="Hola, ya está disponible el rol de maestros para el mes de mayo. 🗓️ 👋" link="/miembros/calendario-maestros/" titleLink="Ver calendario" picture="/assets/light_logo_manantial.png" dia="03" mes="05" año="2023" hora="10"/>

          <Post autor="Manantial de Vida" mensaje="Ya puedes descargar todos los logotipos de nuestra iglesia. 👇" link="/miembros/recursos/logotipo" titleLink="Descargar logotipos" picture="/assets/light_logo_manantial.png" dia="02" mes="05" año="2023" hora="10"/>

        </>
    )
}