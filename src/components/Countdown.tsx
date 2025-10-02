import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  // January 23, 2026 - Event date
  const targetDate = new Date("2026-01-23T00:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
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
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl" />
        <div className="relative bg-card/80 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all shadow-lg group-hover:shadow-glow">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm sm:text-base md:text-lg font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
