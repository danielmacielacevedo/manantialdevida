import Lottie from "react-lottie";
import BlogIcon from "../../public/assets/icons/animated-icons/BlogIcon.json";

export default function Alerta(props) {
  return (
    <>
      <div className="NovedadContainer">
        <div className="NovedadHeader">
          <div>
            <Lottie
              options={{
                animationData: BlogIcon,
                loop: false,
                autoplay: true,
              }}
              // isStopped={activeIcon !== "notify" || !isPlaying}
              width={24}
              height={24}
              isClickToPauseDisabled
              // ref={animationRefs.notify}
              // key={animationKey} // Usamos la clave de animación para reiniciarla
            />
          </div>
          <h6>Nuevo blog</h6>
        </div>
        <div className="NovedadContent">{props.content}</div>
      </div>
      <style jsx>{`
        .NovedadContainer {
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 10px;
          background-color: var(--primary-color);
          gap: 10px;
        }
        .NovedadHeader {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .NovedadHeader img {
          width: 20px;
          height: 20px;
        }
        .NovedadHeader h6 {
          font-size: 16px;
          color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}

// export default function Alerta(props) {
//   return (
//     <>
//       <div className="NovedadContainer">
//         <div className="NovedadHeader">
//           <img src="/assets/icons/shines.png" />
//           <h6>Importante</h6>
//         </div>
//         <div className="NovedadContent">{props.content}</div>
//       </div>
//       <style jsx>{`
//         .NovedadContainer {
//           display: flex;
//           flex-direction: column;
//           padding: 20px;
//           border-radius: 10px;
//           background-color: var(--alert-color);
//           gap: 10px;
//         }
//         .NovedadHeader {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .NovedadHeader img {
//           width: 20px;
//           height: 20px;
//         }
//         .NovedadHeader h6 {
//           font-size: 16px;
//           color: var(--secondary-color);
//         }
//       `}</style>
//     </>
//   );
// }
