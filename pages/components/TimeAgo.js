import { useState, useEffect } from "react";

export default function TimeAgo({ fechaPublicacion, useLocalTime = false }) {

    const [timeElapsed, setTimeElapsed] = useState("");
  
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
        } else {
          const days = Math.floor(secondsElapsed / 86400);
          setTimeElapsed(`${days}d`);
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
  