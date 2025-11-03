import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { companies, mapDonationToSize } from "@/data/handInHand";

const Flower: React.FC<{ size: number; color?: string }> = ({ size, color = "#F59E0B" }) => {
  const petals = 8; // number of petals to draw
  const center = size / 2;
  const petWidth = Math.max(6, Math.round(size * 0.18));
  const petHeight = Math.max(8, Math.round(size * 0.36));
  const stroke = Math.max(0.8, size * 0.012);
  const stemHeight = Math.round(size * 0.75);
  const viewH = size + stemHeight * 0.25;

  // create pet elements (ellipses rotated around center)
  const petElements = new Array(petals).fill(null).map((_, i) => {
    const angle = (360 / petals) * i;
    // place ellipse above center then rotate around center
    const x = center;
    const y = center - (petHeight * 0.45);
    return (
      <ellipse
        key={i}
        cx={x}
        cy={y}
        rx={petWidth}
        ry={petHeight}
        transform={`rotate(${angle} ${center} ${center})`}
        fill={color}
        stroke="#fff"
        strokeWidth={stroke}
        opacity={0.98}
      />
    );
  });

  return (
    <svg width={size} height={viewH} viewBox={`0 0 ${size} ${viewH}`} aria-hidden>
      <defs>
        <radialGradient id={`center-grad-${size}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#fff8e1" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffd54f" />
        </radialGradient>
        <filter id={`shadow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      <g transform={`translate(0,0)`}>
        <g filter={`url(#shadow-${size})`}>
          {/* petals */}
          <g transform={`translate(0,0)`}>{petElements}</g>

          {/* center circle with gradient */}
          <circle cx={center} cy={center} r={Math.max(8, Math.round(size * 0.20))} fill={`url(#center-grad-${size})`} stroke="#fff" strokeWidth={stroke * 0.9} />
        </g>

        {/* stem */}
        <g transform={`translate(${center - Math.max(2, Math.round(size * 0.03))}, ${center + Math.round(size * 0.18)})`}>
          <rect x={0} y={0} width={Math.max(4, Math.round(size * 0.06))} height={stemHeight} rx={2} fill="#3b865a" opacity={0.95} />
          <path d={`M ${Math.max(4, Math.round(size * 0.06))} ${Math.round(stemHeight * 0.3)} q ${Math.round(size * 0.12)} -${Math.round(size * 0.12)} ${Math.round(size * 0.2)} -${Math.round(size * 0.05)}`} fill="#2f7a4a" opacity={0.9} />
        </g>
      </g>
    </svg>
  );
};

const HandInHand = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-display">Hand in Hand — Charity Collaboration</h1>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Companies donate to Hand in Hand and the size of the flower corresponds to how much they give. 
            </p>
          </div>

          {/* Intro / explanation (sketch image removed per request) */}
          <div className="mx-auto max-w-3xl mb-6">
            <p className="text-center text-muted-foreground">
              Below are companies that donate to Hand in Hand. The flower size represents donation size.
            </p>
          </div>

          {/* Grid of companies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((c) => {
              const size = c.flowerSize ?? mapDonationToSize(c.donation);
              return (
                <div key={c.id} className="bg-card rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border">
                  <div className="mb-4">
                    <Flower size={size} color="#ef4444" />
                  </div>

                  <div className="w-28 h-28 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                    <img src={c.logo} alt={`${c.name} logo`} className="w-full h-full object-contain" />
                  </div>

                  <h3 className="font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Donated: {c.donation.toLocaleString()} SEK</p>

                  <p className="mt-1 text-xs text-muted-foreground">Flower size: {size}px</p>
                </div>
              );
            })}
          </div>

          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HandInHand;
