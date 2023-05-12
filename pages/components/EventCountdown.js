import { useState, useEffect } from "react";

function EventCountdown({ eventDate }) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const eventTime = new Date(eventDate).getTime();
      const localOffset = new Date().getTimezoneOffset() * 60 * 1000;
      const eventOffset = new Date(eventDate).getTimezoneOffset() * 60 * 1000;
      const timeDifference = eventTime - eventOffset + localOffset - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const pad = (number) => number.toString().padStart(2, '0');

  return (
    <div>
      <h4>
        {timeRemaining.days}d, {pad(timeRemaining.hours)}h, {pad(timeRemaining.minutes)}m, {pad(timeRemaining.seconds)}s
      </h4>
      <style jsx>{`
        h4
        {
          text-align: center;
        }  
      `}</style>
    </div>
  );
}

export default EventCountdown;
