import { useEffect, useState } from "react";

type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function useServerCountdown(endDate?: Date) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const [timeLeft, setTimeLeft] = useState<Countdown | null>(null);

    useEffect(() => {
        if (!endDate) {
            setTimeLeft(null);
            return;
        }

        const targetTime = endDate.getTime();

        let interval: number | undefined;

        async function init() {
        const res = await fetch(`${basePath}api/server-time`);
        const { now } = await res.json();

        let currentTime = now;

        interval = window.setInterval(() => {
            currentTime += 1000;

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

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [endDate]);

    return timeLeft;
}