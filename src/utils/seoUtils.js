export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Caritas Inn Yaba",
    description:
      "Luxury hotel accommodation at Sabo, Yaba, Lagos. Experience comfort and excellent service at Caritas Inn Yaba.",
    url: "https://yaba.caritasinn.com",
    logo: "https://yaba.caritasinn.com/caritas%20logo.webp",
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "336, Hebert Macaulay way, Sabo, Yaba",
      addressLocality: "Lagos",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.509827212594004",
      longitude: "3.378320655818211",
    },
    telephone: "+2349122649648",
    email: "info@caritasinnyabahotel.com",
    sameAs: [
      "https://www.facebook.com/RingrubyHotel?_rdc=1&_rdr#",
      "https://www.instagram.com/ringruby_hotel/",
      "https://twitter.com/fivecloverhotel",
      "https://www.tiktok.com/@ringrubyhotels",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return JSON.stringify({ ...defaultData, ...hotelData });
};

export const generateBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yaba.caritasinn.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://yaba.caritasinn.com/rooms",
    },
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return JSON.stringify(breadcrumbList);
};
