import projImg1 from "../assets/img/TravelAdvisorApp.png";
import projImg2 from "../assets/img/DinSumResturant.png";
import projImg3 from "../assets/img/HotelUrbanNest.png";

const ProjectsData = [
  {
    id: 1,
    title: "Travel Advisor App",
    description:
      "Developed and deployed a Travel Advisor system utilizing React, TypeScript, ChakraUI and Google Maps API,  ensuring a responsive user interface for seamless travel planning. Utilized react-google-maps and @react-google-maps/api to to integrate interactive features, including markers and info windows, resulting in a 30% increase in user engagement. Leveraged geolocation APIs to fetch the user's current location, delivering personalized travel advice based on geographical context and achieving a 20% boost in user retention.",
    imgUrl: projImg1,
    path: "travel-advisor-app",
    demo: "https://travel-advisor-app-group-4.vercel.app/",
    code: "https://github.com/kaiyi17/Dimsum-Restaurant",
    technologies: ["React", "TypeScript", "ChakraUI", "Google Maps API"],
  },
  {
    id: 2,
    title: "Dim Sum Resturant",
    description:
      "Developed an engaging Dim Sum Restaurant website utilizing CSS, HTML5, and JavaScript, and facilitating online reservations and orders. Implemented interactive pages for reservations, and ordering, including a shopping cart for dine-in or pick-up options, tips, and order submission. Enhanced user experience with a contact page for easy communication, ensuring a seamless interface for managing reservations, orders, and inquiries.",
    imgUrl: projImg2,
    path: "dim-sum-resturant",
    demo: "https://dimsum-restaurant.vercel.app/index.html",
    code: "https://github.com/kaiyi17/TravelAdvisorAppt",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Hotel Reservation",
    description: "PHP, Twig, Weather API",
    imgUrl: projImg3,
    path: "hotel-reservation",
  },
  {
    id: 4,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    id: 5,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    id: 6,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

export default ProjectsData;
