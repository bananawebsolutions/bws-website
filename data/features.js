import {
    LikeIcon,
    LikeIconYellow,
    MobileIcon,
    MobileIconYellow,
    RocketIcon,
    RocketIconYellow,
    SearchIcon,
    SearchIconYellow,
    ServerIcon,
    ServerIconYellow,
    UserIcon,
    UserIconYellow,
} from "../icons/index";

export const featureData = [
    {
        id: 1,
        iconSrc: "/assets/img/icon/feature-icon1-1.svg",
        title: "Branding Design",
        text: "We care success relationships fuel real success. We love building brands and helping",
    },
    {
        id: 2,
        iconSrc: "/assets/img/icon/feature-icon1-2.svg",
        title: "Website Development",
        text: "We care success relationships fuel real success. We love building brands and helping",
    },
    {
        id: 3,
        iconSrc: "/assets/img/icon/feature-icon1-3.svg",
        title: "Illustration Modelling",
        text: "We care success relationships fuel real success. We love building brands and helping",
    },
    {
        id: 4,
        iconSrc: "/assets/img/icon/feature-icon1-4.svg",
        title: "Digital Marketing",
        text: "We care success relationships fuel real success. We love building brands and helping",
    },
];
export const featureData2 = [
    {
        id: 5,
        icon: "/assets/img/icon/feature-icon1-1.svg",
        title: "Branding Design",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 6,
        icon: "/assets/img/icon/feature-icon1-2.svg",
        title: "Web Development",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 7,
        icon: "/assets/img/icon/feature-icon1-3.svg",
        title: "Digital Marketing",
        text: "We care success relationships fuel success we love building",
    },
];
export const featureData3 = [
    {
        id: 8,
        icon: "/assets/img/icon/feature-icon1-1.svg",
        title: "Branding Design",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 9,
        icon: "/assets/img/icon/feature-icon1-2.svg",
        title: "Web Development",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 10,
        icon: "/assets/img/icon/feature-icon1-3.svg",
        title: "Digital Marketing",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 11,
        icon: "/assets/img/icon/feature-icon1-1.svg",
        title: "Branding Design",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 12,
        icon: "/assets/img/icon/feature-icon1-2.svg",
        title: "Web Development",
        text: "We care success relationships fuel success we love building",
    },
    {
        id: 13,
        icon: "/assets/img/icon/feature-icon1-3.svg",
        title: "Digital Marketing",
        text: "We care success relationships fuel success we love building",
    },
];
export const featureData4 = [
    {
        iconComponent: <SearchIcon />,
        iconComponentRepeated: <SearchIconYellow />,
        title: "Optimización SEO",
        id: 14,
        text: "Tus sitios estarán diseñados para destacar en los motores de búsqueda, atrayendo más tráfico orgánico y aumentando tu visibilidad online.",
    },
    // tal vez falta aqui lo de Marketing. Pagina con analiticas o algo asi.
    {
        iconComponent: <UserIcon />,
        iconComponentRepeated: <UserIconYellow />,
        title: "Atención al Cliente",
        id: 15,
        text: "Nos enorgullecemos de ofrecer una atención al cliente excepcional, asegurándonos de que todas tus necesidades y preguntas sean atendidas rápidamente.",
    },
    {
        iconComponent: <LikeIcon />,
        iconComponentRepeated: <LikeIconYellow />,
        title: "Experiencia de Usuario",
        id: 16,
        text: "Nos enfocamos en crear una experiencia de usuario intuitiva y agradable que mantenga a tus visitantes comprometidos y satisfechos.",
    },
    {
        iconComponent: <RocketIcon />,
        iconComponentRepeated: <RocketIconYellow />,
        title: "Rendimiento y Alta Conversión",
        id: 17,
        text: "Diseñamos sitios web que no solo se ven bien, sino que también están optimizadas para cargar rápido y convertir visitantes en clientes.",
    },
    {
        iconComponent: <MobileIcon />,
        iconComponentRepeated: <MobileIconYellow />,
        title: "Diseño Responsivo e Interfaces de Usuario",
        id: 18,
        text: "Creamos interfaces atractivas y responsivas que ofrecen una experiencia de navegación fluida en todos los dispositivos.",
    },
    {
        iconComponent: <ServerIcon />,
        iconComponentRepeated: <ServerIconYellow />,
        title: "Planes Mantenimiento Web y Hosting",
        id: 19,
        text: "Ofrecemos planes flexibles para el mantenimiento y hosting de tu sitio web, garantizando que siempre esté seguro y en funcionamiento.",
    },
];
export const allFeatures = [
    ...featureData,
    ...featureData2,
    ...featureData3,

    ...featureData4,
];
