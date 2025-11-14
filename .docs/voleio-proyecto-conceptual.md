Proyecto Conceptual de Voleio: El Manifiesto Arquitectónico y de Producto
Ubicación del Archivo: .docs/proyecto-voleio.md (Reemplaza el contenido existente con este nuevo documento)
Índice del Documento
Visión y Propuesta Única de Valor (PUV)
1.1. La Marca "Voleio": Concepto y Significado
1.2. El Mercado: Oportunidad y Análisis Competitivo
1.3. La Propuesta Única de Valor (PUV): Nuestra Diferenciación Estratégica
Arquitectura Tecnológica de Élite
2.1. Filosofía Arquitectónica: Soberanía, Escalabilidad y Productividad
2.2. Arquitectura de Monorepo con Nx
2.3. El Stack del Frontend (PWA voleio-app)
2.4. El Stack del Backend (API Soberana api)
2.5. La Base de Datos Geoespacial (PostgreSQL + H3)
2.6. La "Única Fuente de Verdad": Zod
Modelo de Producto y Funcionalidades
3.1. El Ecosistema Voleio: Usuarios, Parceiros y Admin
3.2. Funcionalidades del MVP (Producto Mínimo Viable)
3.3. El Sistema de Gamificación: Más Allá de los Puntos
3.4. Funcionalidades Post-MVP
Roadmap Estratégico de Desarrollo
4.1. Fase 0: Cimentación y Arquitectura
4.2. Fase 1: MVP - El "Voleio Inmediato"
4.3. Fase 2: Planificación y Gamificación Inicial
4.4. Fase 3: Ecosistema y Comunidad (Integración B2B)
4.5. Visiones Futuras: Voleio en Vivo y Expansión
Modelo de Negocio y Estrategia de Monetización
5.1. El Modelo Híbrido Inteligente (Freemium)
5.2. Flujo de Ingresos: Jugadores Premium (B2C)
5.3. Flujo de Ingresos: Parceiros/Clubes (B2B)
5.4. Estrategia de Entrada al Mercado (Go-to-Market)
Parte 1: Visión y Propuesta Única de Valor (PUV)
1.1. La Marca "Voleio": Concepto y Significado
"Voleio" (volea) es la acción más decisiva e instantánea del tenis de playa. Encapsula inmediatez, proactividad y conexión. La marca Voleio no es solo un nombre, es una promesa: somos la plataforma que permite a la comunidad actuar, conectar y jugar en tiempo real, sin dejar que la oportunidad "pique en el suelo". Representa la velocidad, la fluidez y la pasión del juego que nos une.
1.2. El Mercado: Oportunidad y Análisis Competitivo
Nuestra investigación del mercado de aplicaciones de tenis revela un panorama en pleno crecimiento (40% anual) pero fragmentado y con debilidades claras:
Dominancia Regional: El líder, Playtomic ($260M en ingresos), domina Europa con un fuerte enfoque en el pádel, dejando mercados como América Latina y Asia en gran parte desatendidos.
Experiencia de Usuario Inconsistente: Competidores establecidos como GTN (17 años en el mercado) sufren de interfaces anticuadas y una pobre experiencia móvil, validando que la longevidad no garantiza la calidad.
Funcionalidades Aisladas: Muchas aplicaciones se enfocan o en el matching de jugadores (Tenniscall) o en la gestión de ligas, pero pocas integran el ciclo completo de Matching + Reservas + Comunidad + Gamificación en una experiencia fluida.
Modelos de Negocio Validados: El espectro va desde modelos 100% gratuitos (Tenniscall, 119k usuarios) hasta suscripciones premium (PlayYourCourt, $120/año), demostrando que el mercado acepta tanto la adopción masiva a través de un modelo gratuito como el pago por valor agregado.
1.3. La Propuesta Única de Valor (PUV): Nuestra Diferenciación Estratégica
Voleio se posicionará para capitalizar estas debilidades. Nuestra PUV es:
Voleio es el ecosistema social en tiempo real para el tenis de playa que combina una experiencia de usuario de élite con una integración total de funcionalidades. Nos enfocamos en dominar mercados geográficos desatendidos a través de una plataforma que no solo organiza partidos, sino que construye y dinamiza a la comunidad.
Nos diferenciaremos en tres frentes innegociables:
Integración Total y Experiencia Superior: A diferencia de la competencia, Voleio será una PWA moderna que unifica el ciclo completo del jugador en una sola app. La calidad de la interfaz, la fluidez de las animaciones y la simplicidad del flujo de usuario serán nuestras armas principales. No competimos en precio, competimos en experiencia.
Hiper-foco en la Comunidad en Tiempo Real: El "Voleio Inmediato" y la función "¡Nos Falta Uno!" no son solo características, son el corazón de un sistema diseñado para el engagement instantáneo. Esto nos convierte en una herramienta social viva, no en una simple agenda.
Gamificación como ADN: Mientras que otros añaden la gamificación como un extra, Voleio nace con ella en su núcleo. Un sistema de ranking ELO, logros y ligas será el motor de retención que fomente la competencia sana y el sentido de pertenencia.
Este es el comienzo del documento. Establece una base estratégica sólida, justificando el "porqué" de la existencia de Voleio antes de entrar en el "cómo".

Parte 2: Arquitectura Tecnológica de Élite
2.1. Filosofía Arquitectónica: Soberanía, Escalabilidad y Productividad
La arquitectura de Voleio se rige por tres principios fundamentales que garantizan un producto robusto y preparado para el futuro:
Soberanía Tecnológica: Construimos un backend soberano y desacoplado. No dependemos de servicios de Backend-as-a-Service (BaaS) como Supabase para nuestra lógica de negocio principal. Esto nos da control total, máxima flexibilidad para implementar funcionalidades complejas y la libertad de desplegar en cualquier infraestructura de nube, evitando el "vendor lock-in".
Escalabilidad por Diseño: Cada elección tecnológica se ha hecho pensando en la escala. Desde la base de datos geoespacial hasta la arquitectura del monorepo, el sistema está diseñado para soportar un crecimiento masivo de usuarios y funcionalidades sin necesidad de re-arquitecturas costosas.
Productividad y Calidad de Élite (DX): Priorizamos una experiencia de desarrollador (Developer Experience) de primer nivel. Un stack consistente (TypeScript de extremo a extremo), herramientas de auto-generación de código y una estructura clara permiten al equipo moverse rápido, con confianza y manteniendo un altísimo estándar de calidad.
2.2. Arquitectura de Monorepo con Nx
Voleio está construido sobre un monorepo gestionado por Nx. Esta no es una simple organización de carpetas, es una decisión estratégica.
¿Por qué? Nx nos permite gestionar múltiples aplicaciones (la PWA de usuarios voleio-app, la API api, y futuras apps como parceiros-portal o admin-dashboard) y librerías compartidas en un único repositorio.
La Ventaja Clave: Nos permite crear librerías de código compartido. Por ejemplo, nuestros esquemas de validación Zod vivirán en una librería libs/schemas y serán importados tanto por el backend (para proteger la API) como por el frontend (para validar formularios), garantizando una consistencia de datos a prueba de errores. Lo mismo aplica para componentes de UI, hooks y lógica de negocio.
Beneficios a Largo Plazo: Builds y tests inteligentes (solo se reconstruye lo que cambia), refactorización atómica y una gestión de dependencias centralizada.
2.3. El Stack del Frontend (PWA voleio-app)
La experiencia de usuario es nuestra principal ventaja competitiva. El stack está diseñado para ser rápido, moderno y agradable de usar.
Framework: Next.js (con App Router). Elegido por su rendimiento de clase mundial (renderizado en servidor y cliente), optimización para SEO y su robusto ecosistema. Es la base perfecta para una Progressive Web App (PWA) instalable y con capacidades offline.
UI y Estilos: React con Tailwind CSS. Utilizamos el paradigma "utility-first" para un desarrollo de UI rápido y consistente. Complementado con Shadcn/UI, que nos proporciona componentes accesibles y personalizables construidos sobre Radix UI, dándonos control total sobre el código.
Animación: Framer Motion. Para todas las micro-interacciones y transiciones. Una interfaz fluida y con propósito es clave para transmitir una sensación de calidad premium.
Iconografía: Lucide React (iconos generales) y Simple Icons (logos de marcas para la autenticación).
2.4. El Stack del Backend (API Soberana api)
El backend es el motor que impulsa toda la lógica de negocio, la comunicación en tiempo real y la seguridad.
Framework: NestJS. Elegido sobre una implementación de Node.js pura por su arquitectura opinada y escalable. Su sistema de Módulos, Inyección de Dependencias y estructura clara (inspirada en Angular) es ideal para construir una aplicación compleja y mantenible a largo plazo.
API y Comunicación en Tiempo Real: GraphQL a través de Apollo Server (integrado con @nestjs/graphql).
¿Por qué GraphQL? Permite al frontend solicitar exactamente los datos que necesita, minimizando el sobre-fetching y optimizando el rendimiento en redes móviles.
¿Por qué WebSockets? La integración nativa de Apollo con GraphQL Subscriptions sobre WebSockets (manejada por @nestjs/websockets) es la tecnología central que potenciará nuestras funcionalidades en tiempo real, como el "Voleio Inmediato".
Autenticación: Passport.js. Implementaremos nuestro propio sistema de autenticación soberano utilizando este estándar de la industria. Manejaremos tanto la autenticación tradicional con email/contraseña como el flujo OAuth 2.0 para el registro con redes sociales, generando y validando JSON Web Tokens (JWT) para la seguridad de las sesiones.
2.5. La Base de Datos Geoespacial (PostgreSQL + H3)
La capacidad de encontrar jugadores y clubes cercanos de manera instantánea es fundamental. Hemos tomado una decisión de arquitectura de élite para resolver este problema.
Base de Datos: PostgreSQL. Por su robustez, fiabilidad y el poderoso ecosistema de extensiones.
Indexación Geoespacial: H3 (Hexagonal Hierarchical Spatial Index). En lugar de usar PostGIS (basado en radios), hemos decidido adoptar el sistema hexagonal de código abierto de Uber desde el principio.
¿Por qué H3? Divide el mundo en una cuadrícula de hexágonos. Las búsquedas de proximidad se convierten en consultas de índice extremadamente rápidas ("dame todos los jugadores en estos 20 hexágonos vecinos"), lo cual es masivamente escalable.
Implementación: Usaremos la librería h3-js en NestJS para los cálculos y la extensión h3-pg en PostgreSQL para permitir el indexado y las consultas nativas a alta velocidad.
2.6. La "Única Fuente de Verdad": Zod
Toda la estructura de datos en Voleio, sin excepción, se define primero como un esquema de Zod.
Filosofía: "Esquema Primero, Tipo Después". Nunca definimos un type o interface manualmente.
Flujo de Trabajo Obligatorio:
Se define un esquema de Zod (ej. UserProfileSchema) con todas sus reglas de validación.
Se infiere el tipo de TypeScript directamente desde el esquema (type UserProfile = z.infer<typeof UserProfileSchema>).
Beneficio: Este tipo se comparte entre el frontend y el backend. Si se añade un campo al perfil de usuario, lo añadimos en un solo lugar (el schema de Zod), y TypeScript nos avisará automáticamente en todos los lugares del código (formularios, API, base de datos) que necesitan ser actualizados. Esto elimina una clase entera de errores y garantiza una seguridad de tipos de extremo a extremo.

Parte 3: Modelo de Producto y Funcionalidades
3.1. El Ecosistema Voleio: Usuarios, Parceiros y Admin
Voleio está diseñado como una plataforma piramidal con tres roles distintos, cada uno con su propia interfaz y funcionalidades. Esta separación, gestionada dentro del monorepo Nx, nos permite escalar cada parte del negocio de forma independiente.
Jugadores (La Base de la Pirámide):
Audiencia: El corazón de la comunidad. Jugadores de todos los niveles.
Interfaz: La PWA principal (voleio-app), diseñada con una filosofía Mobile-First.
Objetivo: Conectar, jugar, competir y mejorar. La experiencia debe ser social, intuitiva y adictiva (en el buen sentido).
Parceiros (El Nivel Medio):
Audiencia: Clubes de tenis de playa, dueños de canchas, organizadores de torneos y coaches.
Interfaz: Un portal web (parceiros-portal), probablemente una aplicación futura en nuestro monorepo.
Objetivo: Proporcionar herramientas de negocio para gestionar la disponibilidad de canchas, procesar reservas, promocionar eventos y conectar con la base de jugadores.
Administración (La Cima de la Pirámide):
Audiencia: El equipo interno de Voleio (desarrolladores, moderadores, gestores de comunidad).
Interfaz: Un panel de administración (admin-dashboard), otra aplicación futura.
Objetivo: Supervisar la salud de la plataforma, gestionar usuarios y parceiros, moderar contenido y analizar métricas clave para la toma de decisiones.
3.2. Funcionalidades del MVP (Producto Mínimo Viable)
Nuestro MVP se centra obsesivamente en resolver el problema más urgente del jugador: "Quiero jugar ahora, pero no tengo con quién". Dejamos fuera deliberadamente funcionalidades complejas como la reserva de canchas para lograr un time-to-market más rápido y validar el "core loop" de la comunidad.
Las funcionalidades del MVP serán:
Flujo de Autenticación Express:
Registro/Login en un Clic: Usando proveedores OAuth (Google, Apple, Facebook, Instagram, X, TikTok) para una incorporación sin fricción. No habrá un formulario de registro tradicional con contraseña en el MVP.
Perfil de Jugador Básico (CRUD):
Creación: Tras el primer login, un flujo de onboarding simple guiará al usuario para elegir su username único y auto-evaluar su level (Principiante, Intermedio, Avanzado).
Visualización: Perfiles públicos simples con nombre, foto (del proveedor OAuth), nivel y un futuro espacio para estadísticas.
El "Voleio Inmediato" (Corazón del MVP):
Interruptor de Disponibilidad: Un interruptor prominente en la UI: "Disponible para Jugar". Al activarlo, el usuario notifica a la red que está listo para jugar ahora.
Dashboard en Tiempo Real: Una vista principal (mapa o lista) que muestra a otros jugadores "disponibles" cercanos, actualizada en tiempo real vía WebSockets.
Creación de "Partido Flash": Un botón para crear una solicitud de partido urgente, con un énfasis especial en la opción "¡Nos Falta Uno!". El creador define la ubicación.
Flujo de Unión y Notificación: Los usuarios cercanos y disponibles reciben una notificación push. Pueden aceptar con un solo clic.
Chat de Coordinación:
Creación Automática: Una vez que se completa un partido (ej. se encuentra al 4º jugador), se crea automáticamente un chat de grupo temporal para que los jugadores coordinen los detalles finales ("Llevo las pelotas", "Llego en 5 minutos").
3.3. El Sistema de Gamificación: Más Allá de los Puntos
La gamificación es nuestra principal estrategia de retención a largo plazo. Se introducirá por fases.
Fase 1 (Post-MVP):
Registro de Resultados: Al finalizar un partido, los jugadores podrán registrar el resultado.
Sistema de Rating ELO: Implementaremos un sistema de clasificación tipo ajedrez. Cada resultado de partido ajustará el ELO de cada jugador, creando un ranking competitivo y un sistema de matchmaking más justo.
Estadísticas Básicas: El perfil mostrará ELO, % de victorias, racha actual y total de partidos jugados.
Fase 2 (Expansión):
Logros y Trofeos (Badges): Insignias virtuales por hitos ("Madrugador": Juega 10 partidos por la mañana, "Rey de la Playa X": Gana 20 partidos en la misma ubicación).
Niveles de Experiencia (XP): Cada partido y acción en la app otorgará XP para subir de nivel, desbloqueando personalizaciones cosméticas.
Ligas y Torneos: Herramientas para que los usuarios (o parceiros) creen sus propias ligas y torneos dentro de la plataforma.
3.4. Funcionalidades Post-MVP
Una vez validado el MVP y construida una base de usuarios, expandiremos el ecosistema con funcionalidades que aumenten el valor y abran nuevas vías de monetización.
Reserva de Canchas (Integración con Parceiros): La siguiente gran funcionalidad. Permitirá a los jugadores ver la disponibilidad de canchas de clubes asociados y reservarlas directamente desde la app.
Agendar Partidos: La contraparte del "Voleio Inmediato". Una herramienta para planificar partidos a futuro y convocar a otros jugadores.
Sistema Social Completo: Perfiles de amigos, creación de grupos permanentes, feed de actividad.
Coaching: Módulo para que los coaches ofrezcan sus servicios y los jugadores puedan reservar clases.

Parte 4: Roadmap Estratégico de Desarrollo
Nuestro roadmap se basa en la entrega de valor incremental. Cada fase resulta en un producto más robusto y completo, permitiéndonos aprender y adaptarnos según el feedback de la comunidad. La prioridad es validar el core loop social antes de construir funcionalidades de negocio más complejas.
4.1. Fase 0: Cimentación y Arquitectura (El Esqueleto)
Objetivo: Construir la "fábrica" antes de producir el "coche". Esta fase no entrega funcionalidades visibles al usuario final, pero es la más crucial para la velocidad y la calidad del desarrollo futuro.
Entregables Clave:
Configuración del Monorepo Nx: Estructura de carpetas con apps/voleio-app (Next.js) y apps/api (NestJS).
Cimentación del Backend (api):
Instalación y configuración de NestJS.
Integración de Prisma, definición del schema.prisma inicial (User, Profile, Club) y ejecución de la primera migración.
Configuración de la base de datos PostgreSQL en Docker con la extensión H3 habilitada.
Instalación de las dependencias para GraphQL (@nestjs/graphql, Apollo) y WebSockets (@nestjs/websockets).
Cimentación del Frontend (voleio-app):
Configuración de Next.js con Tailwind CSS y el sistema de theming (modo claro/oscuro).
Carga optimizada de fuentes personalizadas.
Creación de los componentes de infraestructura (ThemeProvider, cn).
Flujo de Autenticación E2E:
Implementación completa de la autenticación OAuth 2.0 soberana con Passport.js en NestJS para al menos un proveedor (ej. Google).
Creación del RegisterExpressModal en el frontend.
Gestión de JWT para las sesiones de usuario.
Resultado al Final de la Fase: Un esqueleto de aplicación funcional donde un usuario puede registrarse/iniciar sesión con un proveedor social, ser guardado en la base de datos y recibir un token de sesión. La autopista de desarrollo está pavimentada.
4.2. Fase 1: MVP - El "Voleio Inmediato" (El Corazón)
Objetivo: Lanzar la versión más pequeña y valiosa de Voleio que resuelva el problema más urgente del jugador y comience a construir el efecto de red.
Entregables Clave (sobre la base de la Fase 0):
Onboarding y Perfil del Jugador: Flujo guiado post-registro para que el usuario elija su username y level. Página de perfil básica.
API de Tiempo Real:
Implementación de GraphQL Subscriptions en NestJS para el estado de disponibilidad de los jugadores.
Desarrollo de la lógica H3 en un MatchmakingService para encontrar jugadores cercanos.
Interfaz de Usuario del MVP:
Implementación del interruptor de disponibilidad.
Creación del dashboard en tiempo real que se suscribe a los cambios de estado y muestra jugadores cercanos.
Implementación del flujo de creación de "Partido Flash" y "¡Nos Falta Uno!".
Sistema de notificaciones (inicialmente dentro de la app) para unirse a partidos.
Chat de Coordinación: Implementación de un chat de grupo temporal para los partidos confirmados.
Resultado al Final de la Fase: Voleio es un producto lanzable. Cumple su promesa principal de conectar jugadores en tiempo real. Podemos iniciar una beta cerrada para obtener feedback y validar el product-market fit.
4.3. Fase 2: Planificación y Gamificación Inicial (La Profundidad)
Objetivo: Aumentar la retención y el engagement añadiendo capas de competencia y planificación.
Entregables Clave:
Registro de Resultados: UI y lógica de API para que los jugadores reporten los resultados de sus partidos.
Sistema de Ranking ELO: Implementación del algoritmo en el backend que recalcula el ELO de los jugadores después de cada partido registrado.
Perfiles Mejorados: Los perfiles ahora mostrarán el ELO, estadísticas de victorias/derrotas y un historial de partidos.
Rankings Públicos: Creación de una página de "Ranking" filtrable (por ciudad, amigos, etc.).
Agendar Partidos: Desarrollo de la funcionalidad completa para planificar partidos a futuro.
Resultado al Final de la Fase: Voleio pasa de ser una herramienta de inmediatez a una plataforma deportiva completa donde cada partido tiene un propósito y los jugadores pueden organizar su vida social-deportiva.
4.4. Fase 3: Ecosistema y Comunidad (La Expansión B2B)
Objetivo: Empezar a construir el modelo de negocio B2B y fortalecer las herramientas de comunidad.
Entregables Clave:
Creación del Portal de Parceiros: Inicio del desarrollo de una nueva aplicación Nx (parceiros-portal) para que los clubes gestionen su información.
Gestión de Canchas: Funcionalidad para que los "parceiros" definan sus canchas, horarios y precios.
Reserva de Canchas: Integración en la PWA principal (voleio-app) para que los jugadores puedan buscar y reservar canchas disponibles directamente.
Sistema Social: Implementación de listas de amigos y perfiles más detallados.
Resultado al Final de la Fase: Voleio abre su primera vía de monetización y se convierte en una herramienta indispensable no solo para jugadores, sino también para los negocios del ecosistema del tenis de playa.
4.5. Visiones Futuras: Voleio en Vivo y Expansión
Objetivo: Convertir Voleio en la plataforma de contenido y la super-app definitiva para los deportes de playa.
Posibles Entregables (a ser priorizados según el feedback):
Voleio en Vivo (Streaming): Integración de tecnología WebRTC para permitir a los usuarios transmitir sus partidos en vivo desde la PWA.
Módulo de Coaching: Un mercado para que los coaches ofrezcan sus servicios.
Ligas y Torneos Avanzados: Herramientas completas de gestión de torneos para los "parceiros".
Expansión a Otros Deportes: Adaptación de la plataforma para otros deportes de playa con dinámicas similares (vóley playa, futvóley).

Parte 5: Modelo de Negocio y Estrategia de Monetización
5.1. El Modelo Híbrido Inteligente (Freemium)
Nuestra estrategia de monetización está diseñada para maximizar la adopción inicial y luego capitalizar el valor generado dentro del ecosistema. Adoptaremos un modelo Freemium híbrido, aprendiendo de los éxitos de competidores como Tenniscall (crecimiento rápido con un plan gratuito) y PlayYourCourt (validación de que los usuarios pagan por valor).
Plan Freemium Generoso (El Anzuelo):
Filosofía: Eliminar todas las barreras de entrada para construir rápidamente el efecto de red (más usuarios = más valor para todos). El MVP y gran parte de las funcionalidades sociales serán gratuitas.
Funcionalidades Gratuitas:
Creación de perfil.
Acceso ilimitado al "Voleio Inmediato" (matching en tiempo real).
Participación en chats de partido.
Ver rankings y perfiles de otros jugadores.
Objetivo: Adquisición masiva de usuarios.
Plan Premium (El Valor Agregado):
Filosofía: Ofrecer funcionalidades avanzadas y beneficios "de conveniencia" para los jugadores más comprometidos, a un precio accesible que no sea prohibitivo.
Punto de Precio Estratégico: $5-7 USD/mes. Este precio es competitivo, se sitúa por debajo del "dolor psicológico" de los $10/mes y ofrece un retorno de la inversión claro para un jugador activo.
5.2. Flujo de Ingresos: Jugadores Premium (B2C)
El plan Premium se enfocará en tres áreas de valor que justificarán la suscripción:
Sin Comisiones ni Restricciones:
Los jugadores Premium no pagarán comisiones por transacción al reservar canchas a través de la plataforma (una vez que se implemente el sistema de reservas). Los usuarios gratuitos pagarán una pequeña comisión por reserva.
Acceso sin restricciones a la creación de "Partidos Agendados". Los usuarios gratuitos podrían tener un límite (ej. 2 por semana).
Estadísticas y Analítica Avanzada:
Acceso a un dashboard personal detallado con análisis de rendimiento a lo largo del tiempo.
Comparativas de ELO contra amigos o jugadores de la región.
Historial de partidos detallado con estadísticas de enfrentamientos directos contra otros jugadores.
Acceso a Ligas y Torneos Exclusivos:
Posibilidad de crear y participar en ligas y torneos privados o premium.
Insignias y reconocimientos de perfil exclusivos para miembros Premium.
5.3. Flujo de Ingresos: Parceiros/Clubes (B2B)
Este será nuestro segundo gran pilar de ingresos, que se activará en la Fase 3 del roadmap. Ofreceremos un modelo de Software as a Service (SaaS) para los clubes.
Propuesta de Valor para Parceiros: Voleio no será solo un canal de reservas; será su sistema de gestión y marketing.
Software de Gestión de Canchas: Un calendario para gestionar la disponibilidad, precios dinámicos y reservas online.
Acceso a la Comunidad: Herramientas para promocionar eventos, torneos y clases directamente a la base de usuarios de Voleio.
Analítica de Negocio: Datos sobre horas pico, ocupación y clientes recurrentes.
Modelo de Suscripción por Niveles (Tiers):
Tier Básico (ej. $30/mes): Para clubes pequeños con 1-3 canchas. Incluye gestión de calendario y perfil público en Voleio.
Tier Profesional (ej. $80/mes): Para clubes medianos. Incluye todas las funcionalidades del básico más herramientas de marketing, creación de torneos y analítica avanzada.
Tier Enterprise (Precio Personalizado): Para grandes complejos deportivos o cadenas. Incluye soporte prioritario, integraciones personalizadas y gestión de múltiples sedes.
5.4. Estrategia de Entrada al Mercado (Go-to-Market)
Nuestra estrategia se basa en un dominio regional inicial antes de una expansión global, aprendiendo del éxito de competidores regionales como Flobi.
Definir Mercado Objetivo Inicial:
Seleccionar un país o una región específica con una alta densidad de jugadores de tenis de playa y un mercado de aplicaciones desatendido. América Latina (ej. Brasil) es el candidato principal.
Validación y Adopción Temprana (Early Adopters):
Validar Propuesta de Valor: Antes del lanzamiento público, realizar entrevistas y demos con 50+ jugadores del mercado objetivo para refinar la propuesta.
Beta Cerrada: Lanzar una beta con 100-200 early adopters en 1-2 ciudades piloto. El objetivo es pulir el MVP, encontrar bugs y generar los primeros testimonios.
Lanzamiento Público y Crecimiento:
Enfoque Hiperlocal: Lanzamiento público en las ciudades piloto.
Partnerships Clave: Forjar alianzas estratégicas con clubes locales influyentes en esas ciudades. Ofrecerles el software de gestión (Tier Básico) de forma gratuita durante los primeros 6-12 meses a cambio de que promocionen Voleio entre sus miembros. Esto es crucial para resolver el problema del "huevo y la gallina" (necesitas jugadores para atraer clubes, y clubes para atraer jugadores).
Escalamiento Gradual:
Una vez alcanzado el product-market fit y una masa crítica de usuarios en las ciudades piloto, expandir gradualmente a otras regiones del país y luego a otros países de la región, replicando el modelo de partnerships locales.

---

"Author": "LIA Legacy 4 Raz Write .:"


