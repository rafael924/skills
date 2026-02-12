# SKILL: Autonomous Project Documentation Generator

## 📋 Metadata
- **Versión**: 1.0.0
- **Autor**: rafael924
- **Fecha Creación**: 2026-02-12
- **Última Actualización**: 2026-02-12
- **Entorno Óptimo**: GitHub.com (análisis completo) / VS Code (requiere más intervención)
- **Lenguajes Aplicables**: Todos
- **Categoría**: Documentation

## 🎯 Propósito
Analizar de forma exhaustiva y autónoma un repositorio local completo, comprender su funcionamiento en profundidad, y generar documentación HTML/CSS/JS interactiva y completa, requiriendo mínima intervención del usuario.

## 🔧 Cuándo Usar
- Necesitas documentar un proyecto existente sin documentación
- Recibes código legacy y necesitas entenderlo rápidamente
- Quieres onboarding documentation para nuevos desarrolladores
- Necesitas auditoría de arquitectura del proyecto
- Requieres documentación técnica profesional en formato web

## 📥 Input Esperado
- Acceso al repositorio completo (ideal en GitHub.com)
- Comando de activación: "Documenta este proyecto" o variaciones
- (Opcional) Observaciones específicas del usuario tras revisar el plan

## 📤 Output Generado
- `project-documentation.html` - Documentación completa navegable por tabs
- `documentation-styles.css` - Estilos profesionales responsive
- `documentation-script.js` - Funcionalidades interactivas (navegación, copy-to-clipboard, etc.)

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
# 📊 Plan de Documentación - [Nombre del Proyecto Detectado]

## Análisis Completado ✅

**Tipo de Proyecto:** [Web App / API REST / Librería / etc.]
**Tecnologías Principales:** [React, Node.js, PostgreSQL, etc.]
**Arquitectura:** [Monolito / Microservicios / MVC / etc.]

## Estructura de Documentación Propuesta

### 🌐 Vista General
- Descripción del proyecto y propósito
- Objetivos y alcance
- Contexto de negocio
- Audiencia objetivo

### 🏗️ Vista de Arquitectura
- Diagrama de arquitectura general
- Estructura de carpetas explicada
- Flujo de datos principal
- Componentes/módulos principales

### 🔧 Vista Técnica
- Stack tecnológico completo
- Dependencias críticas
- Patrones de diseño utilizados
- APIs y endpoints (si aplica)

### 💻 Vista de Implementación
- Estructura de código detallada
- Componentes/clases principales
- Lógica de negocio core
- Convenciones de código

### 🚀 Vista de Despliegue
- Requisitos del sistema
- Instalación paso a paso
- Variables de entorno
- Scripts disponibles
- Troubleshooting común

### 🧪 Vista de Testing (si aplica)
- Estrategia de testing
- Cómo ejecutar tests
- Cobertura actual

## ¿Apruebas este plan?

Responde con:
- ✅ "Aprobado" o "Sí" para continuar
- 📝 Cualquier observación o sección adicional que quieras agregar (opcional)
```

---

### FASE 3: Generación de Documentación 🎨

Una vez aprobado el plan, genera **inmediatamente** los 3 archivos completos:

#### Archivo 1: project-documentation.html

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

#### Archivo 2: documentation-styles.css

**Requisitos:**
- Diseño minimalista pero profesional
- Paleta de colores moderna (tonos azules/grises corporativos)
- Tipografía legible (Google Fonts o sistema)
- Responsive design (mobile-first)
- Componentes:
  - Cards para secciones
  - Badges para tecnologías
  - Syntax highlighting visual para código
  - Tablas estilizadas
  - Iconos/emojis para jerarquía
- Modo claro (prioritario)
- Animaciones suaves
- Print-friendly styles

#### Archivo 3: documentation-script.js

**Funcionalidades:**
- Sistema de navegación entre tabs
- Estado activo de tab actual
- Smooth scrolling
- Copiado de bloques de código con un click
- Búsqueda/filtrado (si hay mucho contenido)
- Collapsible sections
- Tabla de contenidos dinámica
- Funcionalidad de exportación/impresión

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
- Los 3 archivos deben ser 100% funcionales
- HTML debe abrirse directamente en navegador sin servidor
- CSS y JS completamente implementados (no stubs)
- Sin "TODO" ni placeholders vacíos

### Formato de Entrega
Presentar archivos como bloques de código completos:

```html name=project-documentation.html
[CÓDIGO COMPLETO]
```

```css name=documentation-styles.css
[CÓDIGO COMPLETO]
```

```javascript name=documentation-script.js
[CÓDIGO COMPLETO]
```

---

## 💡 EJEMPLO DE FLUJO COMPLETO

### Usuario dice:
```
"Documenta este proyecto"
```

### El agente:

**1. Analiza silenciosamente:**
- Lee todos los archivos del repositorio
- Comprende la arquitectura
- Identifica tecnologías y patrones

**2. Presenta el plan:**
```
📊 Plan de Documentación - E-Commerce API

Análisis Completado ✅
Tipo: API REST
Tecnologías: Node.js, Express, PostgreSQL, JWT
Arquitectura: MVC con capas de servicio

[... plan detallado ...]

¿Apruebas este plan?
```

**3. Usuario responde:**
```
"Aprobado. Agrega que usamos Stripe para pagos"
```

**4. Agente genera inmediatamente:**
- `project-documentation.html` (completo + mención de Stripe)
- `documentation-styles.css` (completo y funcional)
- `documentation-script.js` (completo y funcional)

---

## 🎯 CAPACIDADES ESPERADAS DEL AGENTE

Para funcionamiento óptimo, el agente debe:

- ✅ Tener acceso completo al repositorio
- ✅ Poder leer múltiples archivos simultáneamente
- ✅ Analizar código en diferentes lenguajes
- ✅ Inferir relaciones entre archivos
- ✅ Generar contenido extenso (3 archivos completos)
- ✅ Mantener contexto del análisis durante la generación

---

## 🔑 ACTIVACIÓN DEL SKILL

Este skill se activa cuando el usuario diga:

- "Documenta este proyecto"
- "Genera la documentación"
- "Crea docs para este repo"
- "Documenta el código"
- O variaciones similares

---

## 🔄 Changelog

### v1.0.0 (2026-02-12)
- ✨ Versión inicial del skill
- 📝 Soporte para análisis exhaustivo de repositorios
- 🎨 Generación de documentación HTML/CSS/JS completa
- 🔍 Análisis en 7 dimensiones (estructura, tecnología, arquitectura, funcionalidad, despliegue, código, docs existente)
