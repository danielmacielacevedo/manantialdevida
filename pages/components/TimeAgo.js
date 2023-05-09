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
          setTimeElapsed(`${secondsElapsed}s`);
        } else if (secondsElapsed < 3600) {
          const minutes = Math.floor(secondsElapsed / 60);
          setTimeElapsed(`${minutes}m`);
        } else if (secondsElapsed < 86400) {
          const hours = Math.floor(secondsElapsed / 3600);
          setTimeElapsed(`${hours}h`);
        } else if (secondsElapsed < 2592000) {
          const days = Math.floor(secondsElapsed / 86400);
          setTimeElapsed(`${days}d`);
        } else if (secondsElapsed < 31536000) {
          const months = Math.floor(secondsElapsed / 2628000);
          setTimeElapsed(`${months} meses`);
        } else {
          const years = Math.floor(secondsElapsed / 31536000);
          setTimeElapsed(`${years} años`);
        }
        

      }, 1000);
  
      return () => clearInterval(interval);
  
    }, [fechaPublicacion, useLocalTime]);
  
    return (
      <>
        <p>{timeElapsed}</p>
        <style jsx>{`
          p
          {
            font-size: 12px;
          }  
        `}</style>
      </>
    )
    
  }
  