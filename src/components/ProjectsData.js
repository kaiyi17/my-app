import projImg1 from "../assets/img/TravelAdvisorApp.png";
import projImg2 from "../assets/img/DinSumResturant.png";
import projImg3 from "../assets/img/HotelUrbanNest.png";
import projImg4 from "../assets/img/e-commerce.png";
import projImg5 from "../assets/img/marketManagement.png";
import projImg6 from "../assets/img/comingsoon.png";
const ProjectsData = [
  {
    id: 1,
    title: "Travel Advisor App",
    description:
      "Developed and deployed a Travel Advisor system utilizing React, TypeScript, ChakraUI and Google Maps API,  ensuring a responsive user interface for seamless travel planning. Utilized react-google-maps and @react-google-maps/api to to integrate interactive features, including markers and info windows, resulting in a 30% increase in user engagement. Leveraged geolocation APIs to fetch the user's current location, delivering personalized travel advice based on geographical context and achieving a 20% boost in user retention.",
    imgUrl: projImg1,
    path: "travel-advisor-app",
    demo: "https://travel-advisor-app-group-4.vercel.app/",
    code: "https://github.com/kaiyi17/TravelAdvisorApp",
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
    code: "https://github.com/kaiyi17/Dimsum-Restaurant",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Hotel Reservation",
    description:
      "Developed a dynamic website integrating PHP and Twig template engine to provide real-time weather updates and related information. Utilizing PHP for backend processing and Twig for rendering dynamic front-end pages, the site ensures content is dynamically displayed and efficiently updated. Additionally, the platform features an admin backend login interface, allowing for the management of all bookings. This comprehensive system enables administrators to efficiently oversee reservation details and adjust schedules, ensuring a seamless operation.Username: Admin, Password: admin123",
    imgUrl: projImg3,
    path: "hotel-reservation",
    demo: "http://57.151.115.89/finalproject/hotel-reservation/public/index.php",
    code: "https://github.com/kaiyi17/Hoteml-Management-PHP",
    technologies: ["PHP", "Twig"],
  },
  {
    id: 4,
    title: "BackOffice System",
    description:
      "Led the development of an E-Commerce BackOffice System using Spring Boot, Thymeleaf, and Bootstrap, improving operational efficiency for online retail platforms.Engineered a centralized system for real-time order processing, payment information management, and account maintenance, streamlining administrative tasks for customer service representatives.Conducted thorough unit testing to ensure component reliability and performance, maintaining high code quality standards. Username: 999, Password:999",
    imgUrl: projImg4,
    path: "backoffice-system",
    demo: "https://backoffice-springboot-demo.azurewebsites.net/showMyLoginPage",
    code: "https://github.com/kaiyi17/backoffice-springboot",
    technologies: ["SpringBoot", "Thymeleaf", "Bootstrap"],
  },
  {
    id: 5,
    title: "Market Management",
    description:
      "Developed a Super Saver Market Management System with ASP.NET Core and Bootstrap, focusing on backend efficiency and role-specific access. Features include Azure SQL Server, custom validations, and secure authentication. The system streamlines order and inventory management for sales and inventory departments. Access is tiered: unregistered users see only the home page, registered users access transactions, and department-specific accounts have tailored privileges. Credentials for Sales: Username: sale@gmail.com, Password: Sale@123; Inventory: Username: inventory@gmail.com, Password: Inventory@123.",
    imgUrl: projImg5,
    demo: "https://supersavermarketmanagement.azurewebsites.net/",
    code: "https://github.com/kaiyi17/SuperSaverMarketManagement",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Bootstrap",
      "Azure SQL Server",
      "Entity Framework Core",
      "Authentication and Authorization",
    ],
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "Design & Development",
    imgUrl: projImg6,
    demo: "#",
    code: "#",
    technologies: [],
  },
];

export default ProjectsData;
