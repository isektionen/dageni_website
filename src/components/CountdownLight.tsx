import { useEffect, useState, useCallback } from "react";
import { useSiteContent } from "@/lib/content";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownLight = () => {
  // Event start is set under Settings & Links in the admin panel
  const { eventDate } = useSiteContent();
  const targetDate = eventDate.getTime();
  
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const units = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "minutes" },
    { value: timeLeft.seconds, label: "seconds" },
  ];

  // Check if the event has started
  const hasStarted = units.every((u) => u.value === 0);

  if (hasStarted) {
    return (
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
        Dagen I has started!
      </p>
    );
  }

  return (
    <div className="flex justify-center">
      {units.map((unit, i) => (
        <div
          key={unit.label}
          className={`flex flex-col items-center px-3 sm:px-6 md:px-8 ${i > 0 ? "border-l-2 border-accent" : ""}`}
        >
          <span className="text-3xl sm:text-5xl md:text-6xl font-semibold font-display tabular-nums">
            {unit.value}
          </span>
          <span className="mt-1 text-xs sm:text-base text-secondary">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
