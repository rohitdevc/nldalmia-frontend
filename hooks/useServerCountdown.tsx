import { useEffect, useState, useRef } from "react";

type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function useServerCountdown(endDate: Date) {
  const [timeLeft, setTimeLeft] = useState<Countdown | null>(null);

  const targetTime = endDate.getTime();
  const offsetRef = useRef(0);

  useEffect(() => {
    if (!targetTime) return;

    let interval: number;

    async function init() {
      console.log("FETCHING SERVER TIME NOW");
      const res = await fetch(`/api/server-time`);
      const { now } = await res.json();

      offsetRef.current = now - Date.now();

      interval = window.setInterval(() => {
        const currentTime = Date.now() + offsetRef.current;
        const diff = targetTime - currentTime;

        if (diff <= 0) {
          clearInterval(interval);
          setTimeLeft(null);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
    }

    init();

    return () => clearInterval(interval);
  }, [targetTime]);

  return timeLeft;
}
