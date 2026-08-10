// Real photos per service, keyed by slug. Static imports so Next.js can
// process them correctly under the GitHub Pages basePath.
import audioVisual from "@/public/images/services/audio-visual.jpg";
import securitySurveillance from "@/public/images/services/security-surveillance.jpg";
import digitalSignage from "@/public/images/services/digital-signage.jpg";
import structuredCabling from "@/public/images/services/structured-cabling.jpg";
import businessCommunications from "@/public/images/services/business-communications.jpg";
import restaurantHospitality from "@/public/images/services/restaurant-hospitality.jpg";

export const serviceImages = {
  "audio-visual": audioVisual,
  "security-surveillance": securitySurveillance,
  "digital-signage": digitalSignage,
  "structured-cabling": structuredCabling,
  "business-communications": businessCommunications,
  "restaurant-hospitality": restaurantHospitality,
};
