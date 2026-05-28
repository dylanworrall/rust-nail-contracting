import {
  Fence,
  Cuboid as Deck,
  Paintbrush,
  Home,
  TreePine,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  content: string[];
  includes: string[];
  faqs: { question: string; answer: string }[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  content: string[];
  neighborhoods: string[];
  faqs: { question: string; answer: string }[];
}

export const PHONE = "(469) 346-5900";
export const PHONE_HREF = "tel:4693465900";
export const EMAIL = "rustynailcontractors@gmail.com";
export const SITE_URL = "https://rustynailcontracting.com";
export const COMPANY_NAME = "Rusty Nail Contracting";

export const services: ServiceData[] = [
  {
    slug: "fencing",
    title: "Fence Installation & Repair",
    shortTitle: "Fencing",
    icon: Fence,
    description:
      "Custom wood, vinyl, and metal fences built to last. Privacy, security, and curb appeal for your property.",
    metaTitle:
      "Fence Installation & Repair in Carrollton, TX | Rusty Nail",
    metaDescription:
      "Fence installation & repair in Carrollton & Dallas, TX. Wood, vinyl, chain-link fences. Licensed & insured. Call (469) 346-5900.",
    heroHeading: "Professional Fence Installation & Repair",
    heroSubheading:
      "Custom wood, vinyl, chain-link, and metal fences for homes across Carrollton, Dallas, and the DFW Metroplex. Built to last, priced to fit your budget.",
    content: [
      "Whether you need a new privacy fence for your backyard, a decorative picket fence for your front yard, or a durable chain-link fence for security, Rusty Nail Contracting delivers expert fence installation throughout Carrollton, Dallas, Plano, Frisco, and the surrounding DFW communities.",
      "We work with every major fencing material — cedar, pine, vinyl, wrought iron, aluminum, and chain-link — and customize every project to match your property's style, HOA requirements, and budget. From residential privacy fences to commercial perimeter fencing, our team handles projects of all sizes.",
      "Texas weather is tough on fences. High winds, intense summer heat, and sudden storms can warp, lean, or damage even well-built fences. Our repair services cover leaning posts, broken pickets, rotted rails, gate repairs, and full panel replacement. We also offer fence staining and sealing to extend the life of your wood fence.",
      "Every fence we build starts with a free on-site estimate. We assess your property lines, discuss your goals, and provide a transparent quote with no hidden fees. Most residential fence projects are completed within 1-3 days, and we always clean up after ourselves.",
    ],
    includes: [
      "Free on-site estimate and property assessment",
      "Wood fences (cedar, pine, pressure-treated)",
      "Vinyl and composite fencing",
      "Chain-link and metal fencing",
      "Wrought iron and aluminum fences",
      "Gate installation and repair",
      "Fence staining, sealing, and weatherproofing",
      "Post replacement and structural repair",
      "HOA-compliant designs",
      "Storm damage repair",
    ],
    faqs: [
      {
        question:
          "How much does fence installation cost in Carrollton, TX?",
        answer:
          "Fence installation in Carrollton typically ranges from $15 to $45 per linear foot depending on the material. A standard 6-foot cedar privacy fence averages $20-$30 per linear foot installed, while vinyl fencing runs $25-$40 per linear foot. We provide free, no-obligation estimates for every project.",
      },
      {
        question:
          "Do I need a permit to build a fence in Carrollton or Dallas?",
        answer:
          "In Carrollton, residential fences under 8 feet typically do not require a building permit, but they must comply with setback and height requirements. Dallas requires permits for fences over 9 feet. HOA rules may also apply. We handle all permitting requirements and ensure your fence meets local codes.",
      },
      {
        question: "What is the best fence material for Texas weather?",
        answer:
          "Cedar is the most popular choice for Texas fences because it naturally resists rot, insects, and warping. Vinyl is another excellent option for DFW homeowners — it's maintenance-free and handles heat well. For maximum durability, wrought iron and aluminum fences withstand Texas storms without any maintenance.",
      },
      {
        question: "How long does fence installation take?",
        answer:
          "Most residential fence installations in the Carrollton and Dallas area take 1-3 days depending on the size of the yard and material chosen. A typical 150-200 linear foot privacy fence is usually completed in 1-2 days. We schedule around weather and always communicate timelines upfront.",
      },
    ],
  },
  {
    slug: "decks",
    title: "Deck Building & Patio Construction",
    shortTitle: "Decks",
    icon: Deck,
    description:
      "Beautiful, durable decks and patios designed for outdoor living. From simple platforms to multi-level builds.",
    metaTitle:
      "Deck Builder in Carrollton & Dallas, TX | Rusty Nail",
    metaDescription:
      "Custom deck building & patio construction in Carrollton & Dallas, TX. Wood & composite decks. Free estimates — call (469) 346-5900.",
    heroHeading: "Custom Deck Building & Patio Construction",
    heroSubheading:
      "Design and build the perfect outdoor living space for your Carrollton or Dallas home. Wood and composite decks, covered patios, pergolas, and more.",
    content: [
      "North Texas homeowners love outdoor living, and a custom deck or patio is one of the best investments you can make in your property. Rusty Nail Contracting designs and builds decks, patios, pergolas, and outdoor living spaces for homes throughout Carrollton, Dallas, Plano, Frisco, and the entire DFW Metroplex.",
      "We build with premium materials including pressure-treated lumber, cedar, Trex composite, TimberTech, and other leading composite brands. Whether you want a simple ground-level platform, an elevated multi-level deck with built-in seating, or a full outdoor kitchen area, we bring your vision to life.",
      "Every deck project begins with a detailed consultation where we assess your yard, discuss your lifestyle needs, and present design options that fit your budget. We handle everything from permitting and foundation work to railings, stairs, lighting, and finishing touches.",
      "Our deck builds are engineered for the North Texas climate — designed to handle extreme summer heat, sudden storms, and everything in between. We use proper footings, hardware, and construction techniques that meet or exceed local building codes in Carrollton, Dallas, and surrounding cities.",
    ],
    includes: [
      "Free design consultation and 3D visualization",
      "Pressure-treated wood decks",
      "Composite decking (Trex, TimberTech)",
      "Cedar and hardwood decks",
      "Multi-level and elevated decks",
      "Covered patios and pergolas",
      "Built-in benches and planters",
      "Deck lighting installation",
      "Railing and stair systems",
      "Deck repair, refinishing, and staining",
    ],
    faqs: [
      {
        question:
          "How much does it cost to build a deck in Carrollton, TX?",
        answer:
          "A new deck in Carrollton typically costs $25-$65 per square foot depending on materials and complexity. A basic 12x16 pressure-treated wood deck starts around $5,000-$8,000, while a comparable composite deck ranges from $8,000-$15,000. Multi-level decks and custom features increase the price. We provide free detailed estimates.",
      },
      {
        question: "Do I need a permit to build a deck in Dallas or Carrollton?",
        answer:
          "Yes, most deck projects in Dallas and Carrollton require a building permit, especially if the deck is attached to the house or elevated more than 30 inches above grade. Rusty Nail Contracting handles all permit applications and inspections so you don't have to worry about compliance.",
      },
      {
        question: "Wood deck or composite — which is better for North Texas?",
        answer:
          "Both work well in North Texas. Composite decking (like Trex) requires less maintenance, won't splinter, and handles heat better than darker wood stains. However, pressure-treated wood is more affordable upfront and can last 15-20 years with regular sealing. We help you choose the best option based on your budget and maintenance preferences.",
      },
      {
        question: "How long does it take to build a deck?",
        answer:
          "A standard residential deck in the DFW area takes 3-7 days to build, depending on size and complexity. Larger multi-level decks or projects requiring permits and inspections may take 1-2 weeks. We provide a clear timeline before work begins.",
      },
    ],
  },
  {
    slug: "painting",
    title: "Interior & Exterior Painting",
    shortTitle: "Painting",
    icon: Paintbrush,
    description:
      "Interior and exterior painting with premium materials. Clean lines, lasting finishes, and attention to detail.",
    metaTitle:
      "Painting Contractor in Carrollton & Dallas, TX | Rusty Nail",
    metaDescription:
      "Interior & exterior painting in Carrollton & Dallas, TX. Premium paints, lasting finishes. Licensed & insured. Call (469) 346-5900.",
    heroHeading: "Professional Interior & Exterior Painting",
    heroSubheading:
      "Transform your Carrollton or Dallas home with expert painting services. Premium materials, meticulous prep work, and lasting results.",
    content: [
      "A fresh coat of paint is the fastest way to transform your home's look and feel. Rusty Nail Contracting provides professional interior and exterior painting services for homeowners throughout Carrollton, Dallas, Plano, Addison, Farmers Branch, and the Greater DFW area.",
      "We use premium paints from Sherwin-Williams, Benjamin Moore, and other top brands — chosen specifically for the North Texas climate. Our exterior paints resist fading from intense sun exposure, while our interior finishes provide beautiful, durable coverage that stands up to daily life.",
      "Proper preparation is the difference between a paint job that peels in a year and one that lasts a decade. Our process includes thorough surface cleaning, scraping and sanding, caulking, priming, and masking before any paint goes on. We protect your floors, furniture, and landscaping throughout the project.",
      "From single accent walls to full interior repaints, from exterior touch-ups to complete house painting, we handle projects of every size. Our team also provides color consultation to help you choose the perfect palette for your home's architecture and neighborhood aesthetic.",
    ],
    includes: [
      "Free color consultation and estimate",
      "Complete interior painting",
      "Full exterior house painting",
      "Cabinet and trim painting",
      "Accent walls and feature walls",
      "Ceiling painting and texture",
      "Deck and fence staining",
      "Surface preparation (scraping, sanding, priming)",
      "Drywall patching and repair before painting",
      "Premium Sherwin-Williams and Benjamin Moore paints",
    ],
    faqs: [
      {
        question:
          "How much does it cost to paint a house interior in Carrollton?",
        answer:
          "Interior painting in Carrollton typically costs $2-$4 per square foot, or $1,500-$4,000 for an average 3-bedroom home. Costs depend on ceiling height, number of rooms, surface condition, and paint quality. We provide detailed, room-by-room estimates at no charge.",
      },
      {
        question: "How much does exterior painting cost in Dallas, TX?",
        answer:
          "Exterior house painting in the Dallas area ranges from $3,000-$8,000 for a typical single-story home, and $5,000-$12,000 for a two-story home. Factors include square footage, siding material, surface preparation needed, and paint quality. We offer free on-site estimates.",
      },
      {
        question: "How often should you repaint a house exterior in Texas?",
        answer:
          "In the North Texas climate, most exterior paint jobs last 5-7 years on wood siding and 7-10 years on brick, stucco, or fiber cement. Intense sun, heat, and occasional hailstorms accelerate wear. Using high-quality UV-resistant paint and proper surface prep extends the lifespan significantly.",
      },
      {
        question: "How long does it take to paint a house?",
        answer:
          "An average interior paint job takes 2-4 days. Exterior painting typically takes 3-5 days depending on home size and weather conditions. We schedule around the DFW weather forecast and communicate timing clearly before starting.",
      },
    ],
  },
  {
    slug: "interior-renovation",
    title: "Interior Renovation & Remodeling",
    shortTitle: "Interior Renovation",
    icon: Home,
    description:
      "Kitchen and bath remodels, flooring, drywall, and full interior makeovers tailored to your vision.",
    metaTitle:
      "Kitchen & Bath Remodeling in Carrollton, TX | Rusty Nail",
    metaDescription:
      "Kitchen remodels, bathroom renovations & flooring in Carrollton & Dallas, TX. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Interior Renovation & Remodeling",
    heroSubheading:
      "Kitchen remodels, bathroom renovations, flooring, drywall, and complete interior makeovers for Carrollton and Dallas homeowners.",
    content: [
      "Ready to upgrade your home's interior? Rusty Nail Contracting provides full-service interior renovation and remodeling for homeowners in Carrollton, Dallas, Plano, Frisco, and throughout the DFW Metroplex. From kitchen remodels and bathroom renovations to flooring installation and complete interior makeovers, we handle every detail.",
      "Our kitchen remodeling services include cabinet installation and refacing, countertop replacement, backsplash tile work, lighting upgrades, and full layout changes. We work with your budget to maximize impact — whether that's a targeted refresh or a complete gut-and-rebuild.",
      "Bathroom renovations are one of the highest-ROI home improvements in the DFW market. We specialize in shower and tub replacement, tile installation, vanity upgrades, fixture replacement, and accessibility modifications. From small half-bath updates to full master bathroom transformations, we deliver results you'll love.",
      "Beyond kitchens and baths, we handle flooring installation (hardwood, LVP, tile, carpet), drywall repair and installation, trim and molding, closet builds, and general carpentry. Every project is managed by our experienced team, with clear communication, clean workspaces, and a satisfaction guarantee.",
    ],
    includes: [
      "Free in-home design consultation",
      "Kitchen remodeling (cabinets, countertops, backsplash)",
      "Bathroom renovation (shower, tile, vanity, fixtures)",
      "Flooring installation (hardwood, LVP, tile, carpet)",
      "Drywall repair, installation, and texturing",
      "Crown molding and trim work",
      "Interior door installation",
      "Closet organization and custom builds",
      "Lighting and electrical fixture upgrades",
      "Accessibility modifications (grab bars, walk-in showers)",
    ],
    faqs: [
      {
        question:
          "How much does a kitchen remodel cost in Carrollton, TX?",
        answer:
          "Kitchen remodels in Carrollton range from $10,000-$25,000 for a mid-range update (new countertops, cabinet refacing, backsplash, fixtures) to $30,000-$60,000+ for a full renovation with layout changes, custom cabinets, and premium finishes. We provide detailed estimates and help you prioritize upgrades within your budget.",
      },
      {
        question:
          "How much does a bathroom remodel cost in Dallas?",
        answer:
          "Bathroom remodels in the Dallas area typically cost $5,000-$15,000 for a standard update (new tile, vanity, fixtures) and $15,000-$35,000+ for a full master bathroom renovation. Factors include bathroom size, material choices, and whether plumbing needs to be relocated.",
      },
      {
        question: "How long does a kitchen remodel take?",
        answer:
          "A mid-range kitchen remodel in the DFW area typically takes 3-6 weeks. A full gut renovation with layout changes, custom cabinets, and new plumbing or electrical can take 6-10 weeks. We create a detailed project timeline and keep you updated throughout the process.",
      },
      {
        question:
          "Do I need permits for interior renovation in Carrollton?",
        answer:
          "Permits are typically required for work involving structural changes, electrical, plumbing, or HVAC modifications in Carrollton and Dallas. Cosmetic updates like painting, flooring, and cabinet refacing usually don't require permits. We handle all necessary permits and inspections for your project.",
      },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping & Hardscaping",
    shortTitle: "Landscaping",
    icon: TreePine,
    description:
      "Transform your yard with professional landscaping, hardscaping, drainage solutions, and garden design.",
    metaTitle:
      "Landscaping & Hardscaping in Carrollton, TX | Rusty Nail",
    metaDescription:
      "Landscaping, hardscaping & drainage in Carrollton & Dallas, TX. Patios, retaining walls, garden design. Call (469) 346-5900.",
    heroHeading: "Professional Landscaping & Hardscaping",
    heroSubheading:
      "Transform your Carrollton or Dallas yard with expert landscaping, stone patios, retaining walls, drainage solutions, and garden design.",
    content: [
      "Your outdoor space should be as beautiful and functional as your home's interior. Rusty Nail Contracting provides comprehensive landscaping and hardscaping services for residential properties in Carrollton, Dallas, Plano, Farmers Branch, and the Greater DFW area.",
      "Our hardscaping services include stone and paver patios, retaining walls, walkways, fire pits, outdoor kitchens, and decorative borders. We work with natural stone, flagstone, pavers, and concrete to create outdoor spaces that extend your living area and boost your property value.",
      "North Texas yards face unique challenges — clay soil, intense summer heat, periodic droughts, and sudden heavy rains. Our landscaping solutions address all of these with proper grading, French drain installation, xeriscaping options, and plant selections that thrive in USDA Zone 8a. We design landscapes that look great year-round while conserving water.",
      "Whether you need a complete backyard transformation, a front yard refresh to boost curb appeal, or targeted drainage solutions to protect your foundation, our experienced team delivers results that last. Every landscaping project includes a design consultation, material selection guidance, and a clear scope of work.",
    ],
    includes: [
      "Free landscape design consultation",
      "Stone and paver patio installation",
      "Retaining wall construction",
      "Walkway and pathway design",
      "French drain and drainage solutions",
      "Flower bed design and installation",
      "Sod installation and lawn renovation",
      "Xeriscaping and low-water landscaping",
      "Outdoor fire pit and kitchen areas",
      "Seasonal cleanup and mulching",
    ],
    faqs: [
      {
        question:
          "How much does landscaping cost in Carrollton, TX?",
        answer:
          "Landscaping costs in Carrollton vary widely based on scope. Basic front yard refreshes start around $1,500-$3,000, while comprehensive backyard landscaping with patios, retaining walls, and plantings ranges from $5,000-$25,000+. We provide free estimates tailored to your property and goals.",
      },
      {
        question: "What plants grow best in the Dallas/Carrollton area?",
        answer:
          "The DFW area (USDA Zone 8a) supports a wide variety of plants. Top performers include Texas sage, knockout roses, crape myrtles, Indian hawthorn, Asian jasmine, and Buffalo grass. We select drought-tolerant, heat-resistant plants that thrive with minimal watering in the North Texas climate.",
      },
      {
        question:
          "Do you install French drains for foundation protection?",
        answer:
          "Yes, French drain installation is one of our most-requested services. North Texas clay soil expands and contracts with moisture, which can damage foundations. We design and install French drains, surface drains, and grading solutions to redirect water away from your home's foundation.",
      },
      {
        question: "How long does a landscaping project take?",
        answer:
          "Small projects like flower bed installations or sod laying take 1-3 days. Larger projects with patios, retaining walls, and full landscaping typically take 1-3 weeks. We provide a clear timeline during the estimate process.",
      },
    ],
  },
  {
    slug: "exterior-renovation",
    title: "Exterior Renovation & Repair",
    shortTitle: "Exterior Renovation",
    icon: Wrench,
    description:
      "Siding, trim, fascia, gutters, and structural repairs. We restore and protect your home's exterior.",
    metaTitle:
      "Exterior Renovation & Repair in Carrollton, TX | Rusty Nail",
    metaDescription:
      "Siding, trim, fascia, gutter & structural repair in Carrollton & Dallas, TX. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Exterior Renovation & Repair",
    heroSubheading:
      "Protect and beautify your Carrollton or Dallas home with expert siding, trim, fascia, gutter, and structural repair services.",
    content: [
      "Your home's exterior is its first line of defense against the North Texas elements — and its first impression on neighbors and visitors. Rusty Nail Contracting provides expert exterior renovation and repair services for homeowners in Carrollton, Dallas, Plano, Addison, Lewisville, and across the DFW Metroplex.",
      "We handle all types of exterior work including siding repair and installation (wood, vinyl, fiber cement), fascia and soffit replacement, trim carpentry, gutter installation and repair, and structural repairs. Whether your home has storm damage, rotting wood, or just needs a facelift, we restore and protect your property.",
      "North Texas storms — including hail, high winds, and heavy rain — can cause serious damage to your home's exterior. Our team responds quickly to storm damage repairs, working with your insurance when applicable. We assess the damage, provide a detailed scope of work, and complete repairs efficiently to prevent further water intrusion.",
      "Beyond repairs, we help homeowners upgrade their home's exterior appearance and energy efficiency. New siding, updated trim, and proper insulation can dramatically improve curb appeal while lowering energy bills. We guide you through material options and help you choose the best value for your budget and goals.",
    ],
    includes: [
      "Free exterior inspection and estimate",
      "Siding repair and installation (wood, vinyl, fiber cement)",
      "Fascia and soffit replacement",
      "Trim carpentry and decorative millwork",
      "Gutter installation, repair, and cleaning",
      "Storm damage assessment and repair",
      "Wood rot repair and prevention",
      "Exterior caulking and weatherproofing",
      "Porch and entry renovation",
      "Energy efficiency upgrades",
    ],
    faqs: [
      {
        question:
          "How much does siding repair cost in Carrollton, TX?",
        answer:
          "Siding repair in Carrollton typically costs $300-$1,500 for localized damage (a few panels or sections). Full siding replacement ranges from $6,000-$15,000+ depending on home size and material choice. Vinyl siding is the most affordable, while fiber cement (James Hardie) offers the best long-term durability.",
      },
      {
        question:
          "Does Rusty Nail Contracting work with insurance for storm damage?",
        answer:
          "Yes, we work with homeowners navigating insurance claims for storm damage repairs. We provide detailed damage assessments and documentation to support your claim. While we don't file claims on your behalf, we coordinate with adjusters and ensure repairs meet both insurance requirements and our quality standards.",
      },
      {
        question:
          "How do I know if my fascia or soffit needs replacement?",
        answer:
          "Signs of fascia or soffit damage include peeling paint, visible wood rot, sagging sections, pest intrusion (birds or squirrels nesting), and water stains on exterior walls. In the DFW climate, we recommend inspecting fascia and soffits annually, especially after major storms.",
      },
      {
        question: "What exterior repairs add the most value to a home?",
        answer:
          "In the DFW real estate market, the highest-ROI exterior improvements are new siding (70-80% return), updated entry doors (over 90% return), and fresh exterior paint (50-60% return). Gutter replacement and fascia repair also add value by preventing costly water damage.",
      },
    ],
  },
];

export const cities: CityData[] = [
  {
    slug: "carrollton-tx",
    name: "Carrollton",
    state: "TX",
    metaTitle:
      "Contractor in Carrollton, TX | Rusty Nail Contracting",
    metaDescription:
      "Top-rated contractor in Carrollton, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Top-Rated Contractor in Carrollton, TX",
    heroSubheading:
      "Rusty Nail Contracting is Carrollton's go-to contractor for fencing, decks, painting, renovations, and landscaping. Locally based, fully licensed and insured.",
    content: [
      "Rusty Nail Contracting is proud to call Carrollton home. As a locally-based contractor, we understand the unique needs of Carrollton homeowners — from navigating HOA requirements in communities like Rosemeade, Indian Creek, and Country Place, to selecting materials that hold up against the North Texas heat and storms.",
      "Carrollton's diverse housing stock includes everything from 1970s ranch-style homes in Old Town to newer construction in Castle Hills and The Trails. Whether your home needs a new privacy fence, a deck for backyard entertaining, a kitchen remodel, or exterior repairs, we tailor our approach to your home's age, style, and your neighborhood's aesthetic.",
      "As Carrollton continues to grow and attract new families, home improvement is a smart investment. A well-maintained home with modern updates holds its value in the competitive DFW real estate market. We help Carrollton homeowners make strategic improvements that boost both livability and resale value.",
      "Our team is familiar with Carrollton's permitting process through the CityServe portal, local building codes, and inspection requirements. We handle all paperwork and coordination so you can focus on enjoying your upgraded home.",
    ],
    neighborhoods: [
      "Rosemeade",
      "Indian Creek",
      "Country Place",
      "Castle Hills",
      "The Trails",
      "Old Town Carrollton",
      "Hebron",
      "Trinity Mills",
      "Frankford",
      "Keller Springs",
    ],
    faqs: [
      {
        question:
          "What areas of Carrollton does Rusty Nail Contracting serve?",
        answer:
          "We serve all neighborhoods in Carrollton including Rosemeade, Indian Creek, Country Place, Castle Hills, The Trails, Old Town Carrollton, Hebron, Trinity Mills, Frankford, and Keller Springs. If you're in Carrollton or nearby, we can help with your project.",
      },
      {
        question:
          "How do I get a permit for home renovation in Carrollton?",
        answer:
          "Carrollton processes building permits through their CityServe portal. Permits are required for structural work, electrical, plumbing, and fences over 8 feet. Rusty Nail Contracting handles the entire permitting process for our clients, including application, plan submission, and scheduling inspections.",
      },
      {
        question:
          "What is the best home improvement investment in Carrollton?",
        answer:
          "In the Carrollton real estate market, the highest-ROI improvements are kitchen remodels (70-80% return), bathroom updates (60-70% return), new fencing (50-65% return), and exterior paint (50-60% return). Deck additions are also popular and add significant value for outdoor entertaining.",
      },
      {
        question: "Is Rusty Nail Contracting licensed and insured in Carrollton?",
        answer:
          "Yes, Rusty Nail Contracting is fully licensed and insured to perform contracting work in Carrollton, TX and throughout the DFW Metroplex. We carry general liability insurance and workers' compensation coverage for your protection.",
      },
    ],
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    state: "TX",
    metaTitle:
      "Contractor in Dallas, TX | Rusty Nail Contracting",
    metaDescription:
      "Professional contractor in Dallas, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Trusted Fencing, Decks & Renovation Contractor in Dallas, TX",
    heroSubheading:
      "Expert fencing, deck building, painting, interior & exterior renovations, and landscaping for Dallas homeowners. Based in Carrollton, serving the entire Dallas area.",
    content: [
      "Dallas homeowners trust Rusty Nail Contracting for quality craftsmanship at fair prices. Based in nearby Carrollton, we serve neighborhoods across Dallas including North Dallas, Lake Highlands, Far North Dallas, Preston Hollow, Lakewood, and many more.",
      "The Dallas housing market is one of the most competitive in Texas, and strategic home improvements make a real difference when it's time to sell — or simply to enjoy your space. We help Dallas homeowners with everything from new fences and decks to full kitchen remodels, bathroom renovations, painting, and exterior repairs.",
      "Dallas homes range from historic Craftsman bungalows in Lakewood to modern builds in Cypress Waters. We adapt our approach to each home's architecture and character. Our team respects the original craftsmanship of older homes while bringing them up to modern standards and comfort.",
      "We understand Dallas building codes, permitting requirements, and neighborhood-specific HOA rules. Our team handles all the logistics so you get a stress-free renovation experience with results you'll love for years to come.",
    ],
    neighborhoods: [
      "North Dallas",
      "Lake Highlands",
      "Far North Dallas",
      "Preston Hollow",
      "Lakewood",
      "Oak Lawn",
      "Uptown",
      "M Streets",
      "Casa Linda",
      "Cypress Waters",
    ],
    faqs: [
      {
        question:
          "What areas of Dallas does Rusty Nail Contracting serve?",
        answer:
          "We serve all areas of Dallas including North Dallas, Lake Highlands, Far North Dallas, Preston Hollow, Lakewood, Oak Lawn, Uptown, M Streets, Casa Linda, and Cypress Waters. We also serve the surrounding suburbs of Carrollton, Plano, Frisco, Addison, and more.",
      },
      {
        question:
          "How much does a general contractor charge in Dallas, TX?",
        answer:
          "General contractor rates in Dallas typically range from $50-$150 per hour, or 10-20% of total project cost for larger jobs. At Rusty Nail Contracting, we provide transparent, project-based pricing with free estimates so you know the full cost before work begins.",
      },
      {
        question:
          "What permits do I need for home renovation in Dallas?",
        answer:
          "Dallas requires building permits for most renovation work involving structural changes, electrical, plumbing, HVAC, or additions. Cosmetic updates like painting, flooring, and cabinet replacement generally don't require permits. We handle all necessary permits and inspections for our Dallas projects.",
      },
      {
        question: "Do you serve both residential and commercial properties in Dallas?",
        answer:
          "We primarily serve residential homeowners in Dallas and the DFW area. Our services include fencing, decks, painting, interior renovations, exterior repairs, and landscaping for single-family homes and townhomes.",
      },
    ],
  },
  {
    slug: "plano-tx",
    name: "Plano",
    state: "TX",
    metaTitle:
      "Contractor in Plano, TX | Rusty Nail Contracting",
    metaDescription:
      "Trusted contractor in Plano, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in Plano, TX",
    heroSubheading:
      "Quality fencing, deck building, painting, renovations, and landscaping for Plano homeowners. Based in Carrollton, just minutes away.",
    content: [
      "Plano homeowners deserve a contractor they can trust. Rusty Nail Contracting serves neighborhoods throughout Plano including West Plano, East Plano, Legacy, Willow Bend, and Deerfield, delivering expert fencing, decks, painting, renovations, and landscaping.",
      "Plano's established neighborhoods feature mature homes that benefit from strategic updates — new fencing, fresh paint, kitchen remodels, and updated outdoor living spaces. Newer communities in West Plano and Legacy West need quality contractors for customization and finishing touches.",
      "We're based in nearby Carrollton, just a short drive from anywhere in Plano. This means fast response times, easy scheduling, and a team that understands the local market, HOA requirements, and building codes specific to Plano.",
    ],
    neighborhoods: [
      "West Plano",
      "East Plano",
      "Legacy",
      "Willow Bend",
      "Deerfield",
      "Kings Ridge",
      "Prestonwood",
      "Shiloh",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve Plano, TX?",
        answer:
          "Yes, we serve all areas of Plano including West Plano, East Plano, Legacy, Willow Bend, Deerfield, and surrounding neighborhoods. Based in nearby Carrollton, we're just minutes from most Plano locations.",
      },
      {
        question: "What home improvements are most popular in Plano?",
        answer:
          "The most popular home improvements in Plano are fence replacement, kitchen remodels, bathroom updates, deck builds, and exterior painting. These projects deliver the best return on investment in the Plano housing market.",
      },
    ],
  },
  {
    slug: "frisco-tx",
    name: "Frisco",
    state: "TX",
    metaTitle:
      "Contractor in Frisco, TX | Rusty Nail Contracting",
    metaDescription:
      "Quality contractor in Frisco, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in Frisco, TX",
    heroSubheading:
      "Professional fencing, decks, painting, renovations, and landscaping for Frisco's growing community. Licensed, insured, and ready to build.",
    content: [
      "Frisco is one of the fastest-growing cities in Texas, and Rusty Nail Contracting is here to help homeowners build, improve, and maintain their properties. We serve neighborhoods throughout Frisco including Stonebriar, Newman Village, Phillips Creek Ranch, and Frisco Lakes.",
      "New construction in Frisco often needs finishing touches — custom fencing that matches the neighborhood aesthetic, decks for outdoor entertaining, and landscaping that transforms builder-grade yards into personal retreats. We also help homeowners in established Frisco neighborhoods with renovations and updates.",
      "Based in Carrollton, we provide fast service throughout Frisco with competitive pricing and the personal attention you won't get from large corporate contractors.",
    ],
    neighborhoods: [
      "Stonebriar",
      "Newman Village",
      "Phillips Creek Ranch",
      "Frisco Lakes",
      "Starwood",
      "Richwoods",
      "Edgestone at Legacy",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve Frisco, TX?",
        answer:
          "Yes, we serve all neighborhoods in Frisco including Stonebriar, Newman Village, Phillips Creek Ranch, Frisco Lakes, and more. We're based in nearby Carrollton with fast response times throughout Frisco.",
      },
      {
        question: "What services do you offer in Frisco?",
        answer:
          "We offer fencing, deck building, interior and exterior painting, kitchen and bathroom remodels, landscaping, hardscaping, and exterior renovation and repair for Frisco homeowners.",
      },
    ],
  },
  {
    slug: "lewisville-tx",
    name: "Lewisville",
    state: "TX",
    metaTitle:
      "Contractor in Lewisville, TX | Rusty Nail Contracting",
    metaDescription:
      "Reliable contractor in Lewisville, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in Lewisville, TX",
    heroSubheading:
      "Expert fencing, decks, painting, renovations, and landscaping for Lewisville homeowners. Fair prices, quality work.",
    content: [
      "Lewisville homeowners trust Rusty Nail Contracting for dependable, quality craftsmanship. We serve neighborhoods throughout Lewisville including Castle Hills, Valley Ridge, Lakewood Village, and Highland Village, providing expert fencing, decks, painting, renovations, and landscaping.",
      "Whether you're updating a home near Lewisville Lake or renovating in one of the city's established neighborhoods, our team delivers professional results with clear communication and fair pricing.",
    ],
    neighborhoods: [
      "Castle Hills",
      "Valley Ridge",
      "Lakewood Village",
      "Highland Village",
      "Vista Ridge",
      "Old Town Lewisville",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve Lewisville, TX?",
        answer:
          "Yes, we serve all areas of Lewisville and nearby Highland Village. We're based in Carrollton, just minutes from Lewisville.",
      },
    ],
  },
  {
    slug: "addison-tx",
    name: "Addison",
    state: "TX",
    metaTitle:
      "Contractor in Addison, TX | Rusty Nail Contracting",
    metaDescription:
      "Expert contractor in Addison, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in Addison, TX",
    heroSubheading:
      "Professional fencing, decks, painting, renovations, and landscaping for Addison homeowners and property owners.",
    content: [
      "Addison may be a small town, but its homeowners expect big quality. Rusty Nail Contracting provides expert contracting services throughout Addison, from fence installation and deck building to interior renovation and exterior repairs.",
      "Located right next to Carrollton, we're just minutes from any address in Addison. Our team is familiar with Addison's building codes and residential character, delivering work that enhances your property and fits the neighborhood.",
    ],
    neighborhoods: [
      "Addison Circle",
      "Midway Hills",
      "Les Lacs",
      "Vitruvian Park",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve Addison, TX?",
        answer:
          "Yes, Addison is one of our closest service areas, right next to our Carrollton base. We serve all of Addison including Addison Circle, Midway Hills, and surrounding areas.",
      },
    ],
  },
  {
    slug: "farmers-branch-tx",
    name: "Farmers Branch",
    state: "TX",
    metaTitle:
      "Contractor in Farmers Branch, TX | Rusty Nail Contracting",
    metaDescription:
      "Trusted contractor in Farmers Branch, TX. Fencing, decks, painting & renovations. Licensed & insured. Call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in Farmers Branch, TX",
    heroSubheading:
      "Quality fencing, decks, painting, renovations, and landscaping for Farmers Branch homeowners.",
    content: [
      "Farmers Branch is known for its tree-lined streets and well-maintained homes. Rusty Nail Contracting helps homeowners throughout Farmers Branch maintain and upgrade their properties with expert fencing, deck building, painting, interior renovations, exterior repairs, and landscaping.",
      "As a Carrollton-based contractor, we're your neighbor. We understand the charm of Farmers Branch's established communities and deliver work that enhances your home's character while adding modern functionality.",
    ],
    neighborhoods: [
      "Brookhaven",
      "Mercer Crossing",
      "Valley View",
      "Rawhide Creek",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve Farmers Branch, TX?",
        answer:
          "Yes, Farmers Branch is one of our closest service areas. We serve all neighborhoods in Farmers Branch and are just minutes away from our Carrollton location.",
      },
    ],
  },
  {
    slug: "the-colony-tx",
    name: "The Colony",
    state: "TX",
    metaTitle:
      "Contractor in The Colony, TX | Rusty Nail Contracting",
    metaDescription:
      "Contractor in The Colony, TX. Fencing, decks, painting & renovations. Licensed & insured. Free estimates — call (469) 346-5900.",
    heroHeading: "Fencing, Decks & Renovation Contractor in The Colony, TX",
    heroSubheading:
      "Expert fencing, decks, painting, renovations, and landscaping for The Colony homeowners near Lewisville Lake.",
    content: [
      "The Colony homeowners near Lewisville Lake enjoy outdoor living, and Rusty Nail Contracting helps you make the most of it. We provide expert fencing, deck building, painting, interior renovations, exterior repairs, and landscaping throughout The Colony.",
      "From waterfront properties to new developments like Grandscape, we tailor our services to The Colony's unique mix of established and newer homes. Based in nearby Carrollton, we offer fast response times and competitive pricing.",
    ],
    neighborhoods: [
      "Stewart Peninsula",
      "The Tribute",
      "Grandscape",
      "Austin Waters",
      "Camino Real",
    ],
    faqs: [
      {
        question: "Does Rusty Nail Contracting serve The Colony, TX?",
        answer:
          "Yes, we serve all neighborhoods in The Colony including Stewart Peninsula, The Tribute, Grandscape, and Austin Waters. We're based in Carrollton, a short drive from anywhere in The Colony.",
      },
    ],
  },
];

export const homepageFaqs = [
  {
    question: "What services does Rusty Nail Contracting offer?",
    answer:
      "We offer a full range of contracting services including fence installation and repair, custom deck building, interior and exterior painting, kitchen and bathroom remodeling, landscaping and hardscaping, and exterior renovation and repair. We serve Carrollton, Dallas, Plano, Frisco, and the surrounding DFW Metroplex.",
  },
  {
    question: "How much does a contractor cost in Carrollton, TX?",
    answer:
      "Contractor costs in Carrollton vary by project. Fence installation ranges from $15-$45 per linear foot, deck building from $25-$65 per square foot, interior painting from $2-$4 per square foot, and kitchen remodels from $10,000-$60,000+. We provide free, no-obligation estimates for every project so you know the full cost upfront.",
  },
  {
    question: "Is Rusty Nail Contracting licensed and insured?",
    answer:
      "Yes, Rusty Nail Contracting is fully licensed and insured to perform contracting work throughout the DFW Metroplex. We carry general liability insurance and workers' compensation coverage for your protection.",
  },
  {
    question: "What areas does Rusty Nail Contracting serve?",
    answer:
      "We are based in Carrollton, TX and serve the entire Greater Dallas area including Dallas, Plano, Frisco, Lewisville, Addison, Farmers Branch, The Colony, and surrounding communities.",
  },
  {
    question: "How do I get a free estimate?",
    answer:
      "Getting a free estimate is easy. Call us at (469) 346-5900, email rustynailcontractors@gmail.com, or fill out the contact form on our website. We'll schedule a convenient time to visit your property, assess the project, and provide a detailed, no-obligation estimate.",
  },
  {
    question: "How long has Rusty Nail Contracting been in business?",
    answer:
      "Rusty Nail Contracting has years of hands-on construction and renovation experience serving homeowners in Carrollton and the Greater Dallas area. Our team brings deep expertise in fencing, decks, painting, renovations, and landscaping to every project.",
  },
  {
    question: "Do you offer financing for home improvement projects?",
    answer:
      "We offer flexible payment arrangements for larger projects. During your free estimate, we'll discuss payment schedules that work within your budget. Contact us to learn more about options available for your specific project.",
  },
  {
    question: "What makes Rusty Nail Contracting different from other contractors?",
    answer:
      "We're locally based in Carrollton, so we're truly invested in our community. We offer personalized attention on every project, transparent pricing with no hidden fees, premium materials, and a satisfaction guarantee. Our 5-star Google reviews speak to the quality and professionalism we bring to every job.",
  },
];
