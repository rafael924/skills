# SKILL: Autonomous Project Documentation Generator

## 📋 Metadata
- **Versión**: 1.1.0
- **Autor**: rafael924
- **Fecha Creación**: 2026-02-12
- **Última Actualización**: 2026-02-19
- **Entorno Óptimo**: GitHub.com (análisis completo) / VS Code (requiere más intervención)
- **Lenguajes Aplicables**: Todos
- **Categoría**: Documentation

## 🎯 Propósito
Analizar de forma exhaustiva y autónoma un repositorio local completo, comprender su funcionamiento en profundidad, y generar documentación en dos modalidades:
- **Completa**: HTML/CSS/JS interactivo y exhaustivo.
- **Simple**: Un único pantallazo conciso con toda la información esencial.

---

## 🔧 Cuándo Usar
- Necesitas documentar un proyecto existente sin documentación
- Recibes código legacy y necesitas entenderlo rápidamente
- Quieres onboarding documentation para nuevos desarrolladores
- Necesitas auditoría de arquitectura del proyecto
- Requieres documentación técnica profesional en formato web

## 📥 Input Esperado
- Acceso al repositorio completo (ideal en GitHub.com)
- Comando de activación: ver sección **🔑 ACTIVACIÓN DEL SKILL**
- (Opcional) Observaciones específicas del usuario

## 📤 Output Generado

### Modo Completo
- `project-documentation.html` - Documentación completa navegable por tabs
- `documentation-styles.css` - Estilos profesionales responsive
- `documentation-script.js` - Funcionalidades interactivas

### Modo Simple
- `project-overview.html` - Una sola página con pantallazo general del proyecto

---

## 🤖 INSTRUCCIONES PARA COPILOT

### FASE 1: Análisis Profundo del Repositorio 🔍

Cuando el usuario solicite documentar su proyecto, DEBES realizar un análisis completo y sistemático:

#### 1.1 Exploración de Estructura
- Identificar la arquitectura de carpetas y archivos
- Detectar el tipo de proyecto (web app, API, librería, monorepo, etc.)
- Mapear todos los archivos fuente principales
- Identificar archivos de configuración (package.json, requirements.txt, pom.xml, etc.)

#### 1.2 Análisis Tecnológico
- Detectar lenguajes de programación utilizados
- Identificar frameworks y librerías (analizando imports, dependencias)
- Determinar versiones de tecnologías
- Identificar stack completo (frontend, backend, base de datos, etc.)

#### 1.3 Comprensión de Arquitectura
- Analizar patrones de diseño implementados
- Identificar estructura de componentes/módulos/clases
- Mapear relaciones entre archivos y módulos
- Detectar puntos de entrada de la aplicación
- Identificar flujos de datos principales

#### 1.4 Análisis de Funcionalidad
- Comprender las funcionalidades principales del proyecto
- Identificar endpoints/rutas (si es aplicación web)
- Detectar integraciones con APIs externas
- Analizar lógica de negocio core
- Identificar features principales

#### 1.5 Análisis de Configuración y Despliegue
- Detectar variables de entorno necesarias
- Identificar scripts de build/deployment
- Analizar configuración de CI/CD (si existe)
- Detectar requisitos de sistema y dependencias

#### 1.6 Análisis de Código
- Identificar convenciones de código utilizadas
- Detectar testing strategies (unit, integration, e2e)
- Analizar manejo de errores y logging
- Identificar puntos críticos del código

#### 1.7 Documentación Existente
- Buscar README, CONTRIBUTING, docs/
- Analizar comentarios en el código
- Identificar TODOs y FIXMEs
- Detectar documentación técnica existente

---

### FASE 2: Presentación del Plan de Documentación 📋

Una vez completado el análisis profundo, presenta al usuario un plan estructurado:

```
📊 Plan de Documentación - [Nombre del Proyecto Detectado]

Análisis Completado ✅

Tipo de Proyecto: [Web App / API REST / Librería / etc.]
Tecnologías Principales: [React, Node.js, PostgreSQL, etc.]
Arquitectura: [Monolito / Microservicios / MVC / etc.]

Estructura de Documentación Propuesta

[General] [Arquitectura] [Técnica] [Implementación] [Despliegue] [Testing]

¿Apruebas este plan?
Responde con:
- ✅ "Aprobado" o "Sí" para continuar
- 📝 Cualquier observación o sección adicional que quieras agregar (opcional)
```

---

### FASE 3: Generación de Documentación 🎨

Una vez aprobado el plan, genera los archivos según el **modo de activación**:

---

#### 📄 MODO COMPLETO — 3 archivos

##### Archivo 1: project-documentation.html
**Requisitos:**
- Estructura HTML5 semántica
- Sistema de navegación por tabs/pestañas
- Contenido COMPLETO basado en análisis real
- Incluir:
  - Nombre del proyecto
  - Descripción automática generada
  - Badges visuales de tecnologías
  - Estructura de carpetas (tree format)
  - Bloques de código de archivos clave
  - Diagramas conceptuales (ASCII art)
  - Comandos de instalación/ejecución
  - Variables de entorno detectadas
  - Endpoints/rutas (si aplica)

**Estructura de Navegación:**
```
[General] [Arquitectura] [Técnica] [Implementación] [Despliegue] [Testing]
```

##### Archivo 2: documentation-styles.css
**Requisitos:**
- Diseño minimalista pero profesional
- Paleta de colores moderna (tonos azules/grises corporativos)
- Tipografía legible
- Responsive design (mobile-first)
- Componentes: Cards, Badges, Syntax highlighting, Tablas, Iconos
- Animaciones suaves
- Print-friendly styles

##### Archivo 3: documentation-script.js
**Funcionalidades:**
- Sistema de navegación entre tabs
- Estado activo de tab actual
- Smooth scrolling
- Copiado de bloques de código con un click
- Búsqueda/filtrado
- Collapsible sections
- Tabla de contenidos dinámica
- Funcionalidad de exportación/impresión

---

#### ⚡ MODO SIMPLE — 1 archivo

##### Archivo único: project-overview.html

**Objetivo:** Una sola página HTML autocontenida (sin CSS ni JS externos) que muestre todo lo esencial en un pantallazo. Sin tabs, sin navegación compleja. Scroll simple de arriba hacia abajo.

**Secciones obligatorias (en este orden):**

1. **Header** — Nombre del proyecto + descripción en 1-2 líneas + badges de tecnologías
2. **¿Qué hace?** — Propósito del proyecto en máximo 3 bullets
3. **Stack** — Tabla simple: Tecnología | Versión | Rol
4. **Estructura** — Árbol de carpetas con una línea de descripción por carpeta/archivo clave
5. **Cómo correrlo** — Solo los comandos esenciales (install + run)
6. **Scripts disponibles** — Tabla: Comando | Descripción
7. **Variables de entorno** — Tabla: Variable | Descripción | Ejemplo (si existen)
8. **Flujo principal** — Diagrama ASCII del flujo de datos o arquitectura en máximo 10 líneas

**Requisitos de diseño:**
- CSS inline (todo en el mismo archivo HTML)
- Fondo blanco, tipografía sans-serif del sistema
- Color de acento: `#0070f3` (azul)
- Máximo 600px de ancho centrado
- No más de 200 líneas de HTML total
- Sin animaciones, sin tabs, sin interactividad compleja
- Debe poder imprimirse bien tal como está

**Formato de entrega:**
```html
<!-- name=project-overview.html -->
[CÓDIGO COMPLETO — UN SOLO ARCHIVO]
```

---

## ⚠️ REGLAS CRÍTICAS

### Autonomía Máxima
- ✅ Hacer TODO el análisis sin pedir información básica
- ✅ Inferir el propósito del proyecto del código
- ✅ Detectar automáticamente todas las tecnologías
- ✅ Usuario SOLO aprueba el plan (o agrega observaciones)
- ❌ NO pedir información que pueda extraerse del código
- ❌ NO generar documentación genérica o con placeholders vacíos

### Calidad de Contenido
- Documentación específica al proyecto analizado
- Ejemplos reales extraídos del código
- Mencionar archivos y rutas específicas
- Citar código real de archivos clave
- Incluir comandos exactos encontrados en scripts

### Completitud
- Modo completo: Los 3 archivos deben ser 100% funcionales
- Modo simple: El archivo debe ser autocontenido y abrir directamente en navegador
- Sin "TODO" ni placeholders vacíos

---

## 💡 EJEMPLO DE FLUJO COMPLETO

### Usuario dice:
```
"Documenta este proyecto"           → Modo completo (3 archivos)
"Documenta de forma simple"         → Modo simple (1 archivo)
"Dame un pantallazo del proyecto"   → Modo simple (1 archivo)
```

### El agente:

**1. Analiza silenciosamente** todos los archivos del repositorio

**2. Presenta el plan** con el análisis completado

**3. Usuario aprueba** (o agrega observaciones)

**4. Agente genera** los archivos según el modo activado

---

## 🎯 CAPACIDADES ESPERADAS DEL AGENTE

Para funcionamiento óptimo, el agente debe:
- ✅ Tener acceso completo al repositorio
- ✅ Poder leer múltiples archivos simultáneamente
- ✅ Analizar código en diferentes lenguajes
- ✅ Inferir relaciones entre archivos
- ✅ Generar contenido extenso (modo completo) o conciso (modo simple)
- ✅ Mantener contexto del análisis durante la generación

---

## 🔑 ACTIVACIÓN DEL SKILL

### Modo Completo (3 archivos HTML+CSS+JS)
- "Documenta este proyecto"
- "Genera la documentación"
- "Crea docs para este repo"
- "Documenta el código"

### Modo Simple (1 archivo, pantallazo general)
- "Documenta de forma simple"
- "Dame un pantallazo del proyecto"
- "Documentación rápida"
- "Resumen del proyecto"
- "Overview del proyecto"

---

## 🔄 Changelog

### v1.1.0 (2026-02-19)
- ✨ Nuevo modo **Simple**: genera `project-overview.html` en un solo archivo autocontenido
- 📝 Secciones definidas: header, stack, estructura, comandos, scripts, env vars, flujo ASCII
- 🎯 Activación diferenciada por frase del usuario

### v1.0.0 (2026-02-12)
- ✨ Versión inicial del skill
- 📝 Soporte para análisis exhaustivo de repositorios
- 🎨 Generación de documentación HTML/CSS/JS completa
- 🔍 Análisis en 7 dimensiones
