# 🤝 Guía de Contribución

## Cómo Crear un Nuevo Skill

### 1. Usa la Plantilla

```bash
cp templates/skill-template.md skills/[categoria]/[nombre-del-skill].md
```

### 2. Completa los Metadatos

Asegúrate de llenar:
- Versión
- Fecha de creación
- Entorno óptimo
- Lenguajes aplicables
- Categoría

### 3. Define el Propósito Claramente

Responde:
- ¿Qué problema resuelve?
- ¿Cuándo se debe usar?
- ¿Qué produce como output?

### 4. Escribe Instrucciones Detalladas

- Usa fases numeradas
- Sé específico en las acciones
- Define reglas críticas claras
- Incluye ejemplos de uso

### 5. Prueba el Skill

- Pruébalo en VS Code local
- Pruébalo en GitHub.com (si aplica)
- Verifica que el output sea el esperado

### 6. Documenta con Ejemplos

Incluye al menos 2 ejemplos:
- Uno simple (caso básico)
- Uno complejo (caso avanzado)

### 7. Genera Snippets

```bash
npm run generate-snippets
npm run install-snippets
```

### 8. Commit y Push

```bash
git add .
git commit -m "✨ Add [nombre-del-skill] skill"
git push origin main
```

## Estándares de Código

- Usa Markdown para todos los skills
- Nombra archivos en kebab-case: `mi-skill.md`
- Usa emojis para mejorar legibilidad: 🎯 📋 ✅ ⚠️
- Mantén las líneas de código bajo 100 caracteres cuando sea posible

## Categorías Disponibles

- `documentation/`: Skills para generar documentación
- `code-quality/`: Skills para mejorar calidad de código
- `testing/`: Skills para generar y gestionar tests
- `automation/`: Skills para automatizar tareas

Si necesitas una nueva categoría, agrégala al README.md principal.

## Preguntas

Si tienes dudas, abre un Issue en el repositorio.
