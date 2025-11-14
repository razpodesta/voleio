Voleio - La Comunidad de Tenis de Playa en Tiempo Real
<!-- Inserta aquí el logo de Voleio. Puedes subirlo al repo y enlazarlo. -->
<p align="center">
<img src="https://i.imgur.com/gK6wZJ1.png" alt="Logo de Voleio" width="200"/>
</p>
<p align="center">
<strong>Conecta. Juega. Compite. Crece.</strong>
</p>
<p align="center">
<!-- Badges/Shields para estado del proyecto - Reemplaza con los tuyos -->
<img src="https://img.shields.io/badge/status-en--desarrollo-blue" alt="Estado del Proyecto">
<img src="https://img.shields.io/badge/stack-Next.js%20/%20GraphQL-black" alt="Stack Tecnológico">
<img src="https://img.shields.io/badge/arquitectura-Monorepo%20(Nx)-purple" alt="Arquitectura">
<img src="https://img.shields.io/badge/licencia-MIT-green" alt="Licencia">
</p>
Voleio es una Progressive Web App (PWA) de nueva generación, concebida para ser el ecosistema digital definitivo para la comunidad de tenis de playa. Nuestra misión es eliminar la fricción de organizar partidos, conectar jugadores y hacer crecer la comunidad a través de una plataforma integrada, social y gamificada.
📋 Tabla de Contenidos
Propuesta Única de Valor (PUV)
🚀 Funcionalidades Clave
🛠️ Stack Tecnológico
🗺️ Fases del Proyecto (Roadmap)
⚙️ Empezando (Desarrollo Local)
🤝 Contribuir
📜 Licencia
🎯 Propuesta Única de Valor (PUV)
Tras un análisis exhaustivo del mercado, hemos identificado una clara ventana de oportunidad. Competidores como Playtomic dominan el mercado europeo del pádel con un modelo B2B2C, mientras que otros como Tenniscall demuestran la viabilidad de un modelo gratuito a escala global, y GTN muestra las debilidades de una experiencia de usuario anticuada.
Voleio no es solo otra app para reservar canchas; es el ecosistema social en tiempo real para el tenis de playa, diseñado para dominar mercados desatendidos (como América Latina) a través de una experiencia de usuario superior, un enfoque comunitario y una integración total de funcionalidades.
Nuestra diferenciación se basa en tres pilares estratégicos:
🥇 Integración Total y Experiencia de Usuario Superior:
Mientras la competencia ofrece soluciones fragmentadas o con interfaces anticuadas, Voleio integra Matching + Reservas + Comunidad + Gamificación en una única PWA fluida, moderna y mobile-first. No competimos en precio, competimos en experiencia.
⚡ Hiper-foco en la Comunidad en Tiempo Real:
Nuestra funcionalidad estrella, el "Voleio Inmediato", permite a los jugadores encontrar partidos al instante, con un llamado de urgencia para "¡Nos Falta Uno!". Esto transforma la app de una simple agenda a un mercado dinámico de jugadores, fomentando un engagement y un sentido de comunidad que ningún competidor ofrece.
🏆 Gamificación Avanzada como Motor de Retención:
Más allá de un simple historial de partidos, Voleio está construido sobre un sistema de gamificación profundo desde el día cero. Implementaremos un ranking ELO, logros, insignias y ligas para que cada partido cuente, creando un "efecto de red" y una retención a largo plazo.
🚀 Funcionalidades Clave
Funcionalidades Core (MVP)
👥 Perfiles de Jugador: Con nivel de juego, estadísticas y disponibilidad.
⚡ Voleio Inmediato: Búsqueda en tiempo real de jugadores y partidos disponibles "ahora".
🙋‍♂️ ¡Nos Falta Uno!: Llamado de urgencia para completar partidos.
💬 Chat Integrado: Creación automática de chats de grupo para coordinar partidos.
🔐 Autenticación Social Express: Registro e inicio de sesión en un clic con Google, Apple, Facebook, Instagram, X (Twitter) y TikTok.
Gamificación y Competencia
📈 Ranking ELO: Sistema de clasificación dinámico basado en resultados.
🏆 Logros y Trofeos (Badges): Recompensas por hitos y constancia.
🏅 Ligas y Torneos: Herramientas para organizar y participar en competencias.
Comunidad y Ecosistema (Post-MVP)
🗓️ Agendar Partido: Herramienta de planificación para organizar partidos a futuro.
🎾 Reserva de Canchas: Integración con clubes y "parceiros" para reservar directamente.
🤝 Sistema de Amigos y Grupos: Construye tu red de jugadores.
🛠️ Stack Tecnológico
Hemos elegido un stack moderno, escalable y centrado en la seguridad de tipos y una experiencia de desarrollador de élite.
Categoría	Tecnología	Razón de la Elección
Arquitectura	Monorepo con Nx	Gestión centralizada del código, máxima reutilización entre apps (web, api, parceiros) y builds inteligentes.
Frontend	Next.js (React)	PWA de alto rendimiento, optimización de SEO, y flexibilidad con Server/Client Components.
Backend	Node.js, Apollo Server	Ecosistema robusto de TypeScript y la implementación estándar de la industria para APIs de GraphQL.
Comunicación	GraphQL y WebSockets	API flexible y, crucialmente, suscripciones para las funcionalidades en tiempo real que son el corazón de Voleio.
Base de Datos	PostgreSQL + PostGIS	Fiabilidad, escalabilidad y capacidades de consulta geoespacial de primer nivel para el matching por proximidad.
ORM	Prisma	Seguridad de tipos de extremo a extremo entre la base de datos y la aplicación.
Validación	Zod	La "Única Fuente de Verdad" para todos los datos, garantizando consistencia entre frontend y backend.
UI y Estilos	Tailwind CSS + Shadcn/UI	Desarrollo de UI ultra-rápido, personalizable y accesible sin estar atado a una librería de componentes rígida.
Iconos	Lucide React, Simple Icons	Librerías ligeras, consistentes y con una amplia selección de iconos.
🗺️ Fases del Proyecto (Roadmap)
Nuestro roadmap está diseñado para entregar valor de forma incremental, validando el producto en cada etapa.
Fase 0: Cimentación y Arquitectura
Entregable: Esqueleto del proyecto en un monorepo Nx, configuración del stack completo, y flujo de autenticación social express de extremo a extremo.
Fase 1: MVP - El "Voleio Inmediato"
Entregable: Una PWA funcional que permite a los usuarios registrarse, crear un perfil básico, declararse "disponibles", ver a otros jugadores en tiempo real, crear "Partidos Flash" y coordinar mediante un chat. Este es nuestro producto lanzable.
Fase 2: Planificación y Gamificación Inicial
Entregable: Funcionalidad para agendar partidos a futuro y la primera iteración del sistema de gamificación (registro de resultados, cálculo de ELO y rankings básicos).
Fase 3: Ecosistema y Comunidad
Entregable: Sistema de reserva de canchas (integración B2B), sistema de amigos, y expansión de la gamificación con ligas y torneos.
Fases Futuras:
Expansión a otros deportes de playa, portal de gestión para "parceiros", funciones de coaching y streaming en vivo.
⚙️ Empezando (Desarrollo Local)
Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.
Prerrequisitos:
Node.js (v18 o superior)
pnpm
Docker (par
a la base de datos PostgreSQL)
Pasos de Instalación:
Clona el repositorio:

git clone https://github.com/tu-usuario/voleio.git
cd voleio
Instala las dependencias:

pnpm install

Configura las Variables de Entorno:
Crea una copia del archivo .env.example y renómbrala a .env.local en la raíz del proyecto.
Rellena las variables necesarias, como las claves de tu base de datos y los proveedores de autenticación (Supabase, etc.).

# .env.local

# Base de Datos (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/voleio?schema=public"

# Proveedores de Autenticación (Ej: Supabase)
NEXT_PUBLIC_SUPABASE_URL="TU_URL_DE_SUPABASE"
NEXT_PUBLIC_SUPABASE_ANON_KEY="TU_CLAVE_ANON_DE_SUPABASE"
Levanta la Base de Datos con Docker:
(Próximamente se añadirá un archivo docker-compose.yml para facilitar esto).
Ejecuta la migración de la base de datos con Prisma:

pnpm nx prisma-push --project=api
Inicia el servidor de desarrollo:

pnpm dev
¡Listo! La aplicación estará corriendo en http://localhost:4200.

🤝
