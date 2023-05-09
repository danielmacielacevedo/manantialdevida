import { useState, useEffect } from "react";

export default function TimeAgo(props, { useLocalTime = true }) {

    const [timeElapsed, setTimeElapsed] = useState("");

    const fechaPublicacion = `${props.año}-${props.mes}-${props.dia}T${props.hora}:00:00.000Z`;
  
    useEffect(() => {

      const interval = setInterval(() => {

        const timePosted = new Date(fechaPublicacion);
        let now;

        if (useLocalTime) {
          now = new Date();
        } else {
          now = new Date().toUTCString();
          now = new Date(now.slice(0, now.lastIndexOf(" ")-1));
        }

        const secondsElapsed = Math.floor((now - timePosted) / 1000);
  
        if (secondsElapsed < 60) {
          setTimeElapsed(`${secondsElapsed} segundos`);
        } else if (secondsElapsed < 3600) {
          const minutes = Math.floor(secondsElapsed / 60);
          setTimeElapsed(`${minutes} minutos`);
        } else if (secondsElapsed < 86400) {
          const hours = Math.floor(secondsElapsed / 3600);
          setTimeElapsed(`${hours} horas`);
        } else if (secondsElapsed < 172800) {
          const days = Math.floor(secondsElapsed / 86400);
          if (days === 1) {
            setTimeElapsed(`${days} día`);
          } else {
            setTimeElapsed(`${days} días`);
          }
        } else if (secondsElapsed < 2592000) {
          const days = Math.floor(secondsElapsed / 86400);
          if (days === 1) {
            setTimeElapsed(`${days} día`);
          } else {
            setTimeElapsed(`${days} días`);
          }
        } else if (secondsElapsed < 31536000) {
          const months = Math.floor(secondsElapsed / 2592000);
          if (months === 1) {
            setTimeElapsed(`${months} mes`);
          } else {
            setTimeElapsed(`${months} meses`);
          }
        } else {
          const years = Math.floor(secondsElapsed / 31536000);
          if (years === 1) {
            setTimeElapsed(`${years} año`);
          } else {
            setTimeElapsed(`${years} años`);
          }
        }

      }, 1000);
  
      return () => clearInterval(interval);
  
    }, [fechaPublicacion, useLocalTime]);
  
    return (
      <>
        <p>Hace {timeElapsed}</p>
        <style jsx>{`
          p
          {
            font-size: 12px;
          }  
        `}</style>
      </>
    )
    
  }
  