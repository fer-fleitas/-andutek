import {
  Award,
  Blocks,
  Building2,
  Globe,
  ShoppingCart,
  ChartColumn,
  CodeXml,
  Cpu,
  Gauge,
  Handshake,
  HeartHandshake,
  Layers,
  Lightbulb,
  MessageCircle,
  Network,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; description: string };

export const heroServices: { icon: LucideIcon; label: string }[] = [
  { icon: CodeXml, label: "Desarrollo web" },
  { icon: Blocks, label: "Software a medida" },
  { icon: Cpu, label: "Soluciones informáticas" },
  { icon: Workflow, label: "Automatización de procesos" },
  { icon: Network, label: "Integración de sistemas" },
  { icon: Lightbulb, label: "Consultoría tecnológica" },
];

export const values: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: "Innovación" },
  { icon: Handshake, label: "Compromiso" },
  { icon: Award, label: "Calidad" },
  { icon: TrendingUp, label: "Escalabilidad" },
  { icon: HeartHandshake, label: "Atención personalizada" },
];

export const services: (Item & { id: string })[] = [
  {
    id: "desarrollo-web",
    icon: CodeXml,
    title: "Desarrollo web",
    description:
      "Sitios corporativos, landing pages, tiendas online y aplicaciones web rápidas, seguras y optimizadas para buscadores.",
  },
  {
    id: "software-a-medida",
    icon: Blocks,
    title: "Software a medida",
    description:
      "Sistemas diseñados a partir de tus procesos reales: gestión, turnos, stock, facturación y plataformas internas.",
  },
  {
    id: "soluciones-informaticas",
    icon: Cpu,
    title: "Soluciones informáticas",
    description:
      "Infraestructura, servidores, bases de datos y herramientas que mantienen tu operación estable y segura.",
  },
  {
    id: "automatizacion",
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Eliminamos tareas repetitivas con flujos automáticos, bots e integraciones que ahorran tiempo y reducen errores.",
  },
  {
    id: "integracion",
    icon: Network,
    title: "Integración de sistemas",
    description:
      "Conectamos ERPs, CRMs, pasarelas de pago y APIs para que tu información fluya entre todas tus herramientas.",
  },
  {
    id: "consultoria",
    icon: Lightbulb,
    title: "Consultoría tecnológica",
    description:
      "Analizamos tu situación actual y definimos una hoja de ruta tecnológica clara, priorizada y medible.",
  },
];

export const processSteps: Item[] = [
  {
    icon: Search,
    title: "Descubrimiento y análisis",
    description: "Entendemos tu negocio, tus objetivos y los problemas a resolver.",
  },
  {
    icon: PenTool,
    title: "Planificación y diseño",
    description: "Definimos alcance, arquitectura, prototipos y cronograma.",
  },
  {
    icon: CodeXml,
    title: "Desarrollo e implementación",
    description: "Construimos por etapas, con entregas parciales y visibilidad total.",
  },
  {
    icon: TestTube,
    title: "Pruebas y optimización",
    description: "Validamos calidad, rendimiento, seguridad y experiencia de uso.",
  },
  {
    icon: Rocket,
    title: "Entrega y acompañamiento",
    description: "Publicamos, capacitamos y seguimos a tu lado con soporte continuo.",
  },
];

export const advantages: Item[] = [
  {
    icon: Target,
    title: "Soluciones adaptadas a cada negocio",
    description: "Nada de plantillas: cada proyecto parte de tus necesidades reales.",
  },
  {
    icon: Layers,
    title: "Tecnologías modernas",
    description: "Stack actual, mantenido y respaldado por grandes comunidades.",
  },
  {
    icon: Users,
    title: "Diseño centrado en el usuario",
    description: "Interfaces claras que tus clientes y equipos disfrutan usar.",
  },
  {
    icon: Gauge,
    title: "Arquitecturas escalables",
    description: "Bases sólidas para crecer sin reescribir todo desde cero.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Hablás con quienes construyen tu proyecto, sin intermediarios.",
  },
  {
    icon: ShieldCheck,
    title: "Acompañamiento tecnológico",
    description: "Soporte, mantenimiento y mejora continua después de la entrega.",
  },
];

export type ProjectKind = "shop" | "erp" | "corporate" | "dashboard";

export const projects: {
  kind: ProjectKind;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}[] = [
  {
    kind: "shop",
    title: "Tienda online",
    description:
      "E-commerce con catálogo, carrito, pagos online y panel de administración de productos y pedidos.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    icon: ShoppingCart,
  },
  {
    kind: "erp",
    title: "Sistema de gestión empresarial",
    description:
      "Plataforma para clientes, stock, facturación y reportes con roles y permisos por usuario.",
    tags: ["C#", "JavaScript"],
    icon: Building2,
  },
  {
    kind: "corporate",
    title: "Sitio web corporativo",
    description:
      "Sitio institucional rápido, optimizado para SEO, con blog administrable y formularios de contacto.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: Globe,
  },
  {
    kind: "dashboard",
    title: "Dashboard de datos",
    description:
      "Tablero de indicadores en tiempo real que integra múltiples fuentes de datos del negocio.",
    tags: ["Python", "JavaScript"],
    icon: ChartColumn,
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "¿Qué tipos de páginas web desarrollan?",
    answer:
      "Desarrollamos sitios corporativos, landing pages para campañas, tiendas online, portales de clientes y aplicaciones web a medida. Todos son responsive, rápidos y preparados para posicionarse en buscadores.",
  },
  {
    question: "¿Pueden desarrollar un sistema totalmente personalizado?",
    answer:
      "Sí. Relevamos tus procesos, diseñamos la solución junto a tu equipo y construimos un sistema a medida: gestión interna, turnos, inventario, facturación, CRM o cualquier flujo específico de tu negocio.",
  },
  {
    question: "¿Cuánto tiempo lleva desarrollar un proyecto?",
    answer:
      "Depende del alcance. Un sitio corporativo suele llevar entre 2 y 4 semanas; un sistema a medida, entre 1 y 4 meses. Al inicio definimos un cronograma por etapas con entregas parciales para que veas avances reales.",
  },
  {
    question: "¿Ofrecen mantenimiento y soporte?",
    answer:
      "Sí. Ofrecemos planes de mantenimiento que incluyen actualizaciones, copias de seguridad, monitoreo, corrección de errores y mejoras evolutivas, con canales de soporte directos.",
  },
  {
    question: "¿Cómo solicito un presupuesto?",
    answer:
      "Completá el formulario de contacto o escribinos por WhatsApp contándonos tu idea. Coordinamos una reunión sin cargo para entender el proyecto y te enviamos una propuesta detallada con alcance, plazos y costos.",
  },
  {
    question: "¿Pueden modernizar un sistema que ya tengo?",
    answer:
      "Sí. Analizamos tu sistema actual y proponemos una migración progresiva: mejoras de interfaz, nuevas funcionalidades, migración de datos o reescritura por módulos, sin frenar la operación de tu empresa.",
  },
];
