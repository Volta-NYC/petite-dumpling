export const ORDER_LINKS = {
  parkSlopeDelivery:
    "https://www.grubhub.com/restaurant/petite-dumpling-276-5th-avenue-ste-a-brooklyn/4840112?classicAffiliateId=%2Fr%2Fw%2F4840112%2F&utm_source=internal.restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=4840112",
  parkSlopePickup: "https://order.snackpass.co/petitedumpling",
  prospectHeightsPickup: "https://order.snackpass.co/petitdumplings",
};

export const MENU_LINKS = {
  parkSlope: "https://canva.link/v0qp8ealdle6wy2",
  prospectHeights: "https://canva.link/geafd1l3ya3u61m",
};

export const RESTAURANT_EMAIL = "petitedumpling276@gmail.com";
export const RESTAURANT_WEBSITE = "petitedumpling.com";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/petitedumpling/?igshid=YmMyMTA2M2Y%3D",
  facebook: "https://www.facebook.com/people/Petite-Dumpling/100087060717669/",
};

export const LOCATIONS = [
  {
    id: "park-slope",
    name: "Park Slope",
    status: "Open daily",
    phone: "718-788-5001",
    addressLines: ["276 5th Avenue", "Brooklyn, NY 11215"],
    hours: "11:30AM - 9:00PM",
    orderOptions: ["Pickup", "Delivery"],
    pickupUrl: ORDER_LINKS.parkSlopePickup,
    deliveryUrl: ORDER_LINKS.parkSlopeDelivery,
    menuUrl: MENU_LINKS.parkSlope,
    mapsEmbedUrl:
      "https://www.google.com/maps?q=276%205th%20Avenue%2C%20Brooklyn%2C%20NY%2011215&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=276%205th%20Avenue%2C%20Brooklyn%2C%20NY%2011215",
  },
  {
    id: "prospect-heights",
    name: "Prospect Heights",
    status: "Now open",
    phone: "212-274-8585",
    addressLines: ["770 Washington Ave", "Brooklyn, NY 11238"],
    hours: "4:00PM - 9:00PM",
    orderOptions: ["Pickup only"],
    pickupUrl: ORDER_LINKS.prospectHeightsPickup,
    deliveryUrl: "",
    menuUrl: MENU_LINKS.prospectHeights,
    mapsEmbedUrl:
      "https://www.google.com/maps?q=770%20Washington%20Ave%2C%20Brooklyn%2C%20NY%2011238&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=770%20Washington%20Ave%2C%20Brooklyn%2C%20NY%2011238",
  },
] as const;
