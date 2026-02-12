/**
 * Script para generar snippets de VS Code automáticamente desde los archivos .md de skills
 * Uso: node scripts/generate-snippets.js
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../skills');
const OUTPUT_FILE = path.join(__dirname, '../vscode/copilot-skills.code-snippets');

const snippets = {};

function generateSnippets(dir, category = '') {
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  Directorio no encontrado: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      generateSnippets(filePath, file);
    } else if (file.endsWith('.md') && file !== 'README.md') {
      const content = fs.readFileSync(filePath, 'utf8');
      const skillName = file.replace('.md', '');
      
      // Crear prefix único
      const prefix = `!skill-${category ? category + '-' : ''}${skillName}`;
      
      // Extraer el título del skill
      const titleMatch = content.match(/# SKILL: (.+)/);
      const title = titleMatch ? titleMatch[1] : skillName;
      
      // Crear snippet
      snippets[`Load ${title}`] = {
        prefix: prefix,
        body: content.split('\n'),
        description: `Carga el skill: ${title} (Categoría: ${category || 'General'})`
      };
      
      console.log(`✅ Generado snippet: ${prefix}`);
    }
  });
}

// Generar snippets
console.log('🚀 Generando snippets desde skills...\n');
generateSnippets(SKILLS_DIR);

// Crear directorio de salida si no existe
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Escribir archivo de snippets
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(snippets, null, 2));

console.log(`\n🎉 ¡Completado!`);
console.log(`📊 Total de snippets generados: ${Object.keys(snippets).length}`);
console.log(`📁 Archivo creado: ${OUTPUT_FILE}`);
console.log(`\n💡 Para usar en VS Code:`);
console.log(`   1. Copia el archivo a tu carpeta de snippets de VS Code`);
console.log(`   2. O ejecuta: npm run install-snippets`);
