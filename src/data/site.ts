/**
 * Central content + business data for Earl's Proper Detailing.
 * Everything the site needs (NAP, nav, services, specials) lives here so pages
 * and the SEO/JSON-LD component read from a single source of truth.
 */

export const site = {
  name: "Earl's Proper Detailing",
  shortName: "Earl's Proper",
  tagline: "Show Car Shine",
  subTagline: "Elevate Your Ride",
  description:
    "Full-service auto detailing and body work in Langhorne, PA. 20+ years of experience and four consecutive Best of Bucks awards — washing, waxing, polishing, ceramic coating, paint & body work.",
  url: "https://earlsdetailing.com",
  // Primary OG/social share image (relative to /public or site root at build).
  ogImage: "/og-image.jpg",

  phone: "215-791-3015",
  phoneRaw: "+12157913015", // tel:/sms: friendly (E.164)
  email: "", // no public email on the current site — contact is phone/text/FB

  address: {
    street: "95 Bristol Oxford Valley Rd",
    city: "Langhorne",
    state: "PA",
    zip: "19047",
    country: "US",
  },

  hours: "By appointment — Monday through Friday",
  areaServed: ["Langhorne, PA", "Fairless Hills, PA", "Bucks County, PA"],
  priceRange: "$$",

  social: {
    facebook: "https://www.facebook.com/earlsdetail",
    messenger: "https://m.me/earlsdetail",
  },

  awards: "Four-time consecutive Best of Bucks winner",
  experience: "20+ years of professional experience",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Specials", href: "/specials/" },
  { label: "Contact", href: "/contact/" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const detailingServices: Service[] = [
  {
    title: "Wash & Wax",
    description:
      "Washing removes dirt, dust and grime, while waxing lays down a protective layer that guards your paint and locks in shine.",
    icon: "droplet",
  },
  {
    title: "Interior Deep Clean",
    description:
      "Full vacuum, shampoo and vinyl cleaning to bring your cabin back to life — floors, seats and every surface.",
    icon: "sofa",
  },
  {
    title: "Polishing",
    description:
      "Machine compound and polish to restore depth, clarity and gloss to your vehicle's paint.",
    icon: "sparkles",
  },
  {
    title: "Paint Correction",
    description:
      "Remove surface scratches and swirl marks for a flawless, mirror-like finish.",
    icon: "shine",
  },
  {
    title: "Ceramic Coating",
    description:
      "Industry-grade ceramic coating — a chemical polymer applied to your vehicle's exterior to protect it from paint damage and add years of shine.",
    icon: "shield",
  },
  {
    title: "Dressing",
    description:
      "Tire renovator and shine, vinyl dressings and streak-free window finishes for a complete look.",
    icon: "tire",
  },
];

export const bodyServices: Service[] = [
  {
    title: "Body Paint",
    description:
      "From minor touch-ups to full body paint jobs, plus custom paint and graphics.",
    icon: "spray",
  },
  {
    title: "Dent Repair",
    description:
      "Repair minor dents and dings using specialized tools and filler for a smooth, seamless result.",
    icon: "hammer",
  },
  {
    title: "Wheels",
    description:
      "Wheel repair and painting — fixing dents, rust and imperfections, then repainting for a fresh look.",
    icon: "wheel",
  },
  {
    title: "Calipers",
    description:
      "A fresh, vibrant caliper finish that lifts the whole look of your vehicle.",
    icon: "disc",
  },
  {
    title: "Collision Repair",
    description:
      "Collision and scratch repair that restores your vehicle to its pre-accident condition — sanding, welding, painting or replacing parts.",
    icon: "wrench",
  },
  {
    title: "Bedliners",
    description:
      "A durable, waterproof protective coating for your truck bed that helps prevent rust and damage.",
    icon: "truck",
  },
];

export type VehicleType = { label: string; icon: string };

export const vehicleTypes: VehicleType[] = [
  { label: "Cars", icon: "car" },
  { label: "Trucks & SUVs", icon: "truck" },
  { label: "Motorcycles", icon: "bike" },
  { label: "Watercraft", icon: "boat" },
  { label: "Commercial", icon: "van" },
];

export type Special = {
  title: string;
  badge: string;
  description: string;
  price: string;
  offer: string;
};

export const specials: Special[] = [
  {
    title: "Ceramic Coating Sale",
    badge: "Featured",
    description:
      "Earl's Proper ceramic coating creates a barrier from harsh elements and can last for years. Unparalleled shine that preserves — and can even increase — your vehicle's value.",
    price: "Packages start at $800",
    offer: "Mention this ad for 10% off!",
  },
];

/** Convenience: formatted single-line address. */
export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/**
 * In-memoriam / announcement banner shown above the homepage hero.
 * Set `enabled: false` to take it down (e.g. after the services) without
 * removing the content.
 */
export const memorial = {
  enabled: true,
  eyebrow: "In Loving Memory",
  name: "Earl Roberts",
  subtitle: "Founder & Owner of Earl's Proper Detailing",
  // Optional images, served from /img/ (repo public/img/ or uploaded to the
  // server's public/img/ folder). Leave "" to fall back to the text header.
  // Set these back to "/img/earl-memorial-banner.jpg" and "/img/earl-portrait.jpg"
  // once the files are uploaded to the server's public/img/ folder. Empty =
  // dignified text header, no broken images.
  bannerImage: "",
  portraitImage: "",
  // Announcement paragraphs. NOTE: the 4th paragraph completes a sentence that
  // was cut off in the source ("...navigating an unimagin…") — verify wording.
  message: [
    "It is with tremendous sadness that we share the passing of Earl Roberts, founder and owner of Earl's Proper Detailing.",
    "For more than 25 years, Earl poured his heart into this business and the community it served. He first started Earl's Proper Detailing in the 1990s and, after stepping away for a number of years, rebuilt the business from the ground up in 2013. What started again from the carport of his family home eventually grew back into the shop so many of you came to know.",
    "Earl took great pride in his work, but even more pride in the relationships he built along the way. To him, customers often became friends, and the support this community showed his business over the years meant more to him than most people probably realized.",
    "His passing was sudden, and his family is now navigating an unimaginable loss.",
    "All are welcome to stop by and pay their respects to Earl Roberts as we celebrate his life and the impact he had on so many people in our community.",
  ],
  // The reassurance that follows the service details.
  closing: [
    "Earl's Proper Detailing remains open and operating. Earl put more than 25 years into building this business, and our team is committed to keeping it going — and to continuing to take care of the customers who supported him throughout the years.",
    "We currently have appointments available. To schedule a detail, please call or text 215-791-3015.",
    "Thank you again for all of the kindness, patience, and support you've shown the Roberts family and the Earl's Proper Detailing team during this difficult time.",
  ],
  serviceHeading: "Celebration of Life",
  serviceDate: "Saturday, September 12, 2026",
  events: [
    { title: "Visitation", time: "9:00 – 11:00 AM (Eastern)" },
    { title: "Funeral Service", time: "12:00 – 1:00 PM (Eastern)" },
  ],
  venue: {
    name: "Galzerano Funeral Home – Levittown",
    address: "3500 Bristol–Oxford Valley Road, Levittown, PA 19057",
  },
  dressNote:
    "To honor Earl, the family kindly requests that those attending wear Earl's Proper Detailing merchandise, or a jersey representing their favorite Philadelphia sports team.",
};
