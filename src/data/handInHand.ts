import logo1 from "@/assets/dageni_profile_pic.jpg";

export type Company = {
  id: string;
  name: string;
  logo: string;
  // donation in SEK - update this manually when new donations come in
  donation: number;
  // optional manual override for flower size in px (makes it easy to control)
  flowerSize?: number;
};

// Sample data - replace or edit values manually as donations come in.
export const companies: Company[] = [
  { id: "c1", name: "BLA", logo: logo1, donation: 25000 },
  { id: "c2", name: "Bloj", logo: logo1, donation: 12000 },
  { id: "c3", name: "Blip", logo: logo1, donation: 6000 },
  { id: "c4", name: "Bonk", logo: logo1, donation: 3000 },
  { id: "c4", name: "Blob", logo: logo1, donation: 2000 },
];

// Map donation amount to pixel size for the flower (you can edit this function)
export function mapDonationToSize(donation: number) {
  // Simple non-linear mapping: sqrt scale to compress large values
  // Min 48px, Max 180px
  const min = 48;
  const max = 300;
  const scaled = Math.round(Math.sqrt(donation) * 2);
  return Math.max(min, Math.min(max, scaled));
}
