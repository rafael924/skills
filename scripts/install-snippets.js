/**
 * Script para instalar snippets en VS Code automáticamente
 * Uso: node scripts/install-snippets.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SOURCE_FILE = path.join(__dirname, '../vscode/copilot-skills.code-snippets');

// Detectar directorio de snippets de VS Code según el sistema operativo
function getVSCodeSnippetsDir() {
  const platform = os.platform();
  const homeDir = os.homedir();
  
  switch (platform) {
    case 'win32':
      return path.join(homeDir, 'AppData', 'Roaming', 'Code', 'User', 'snippets');
    case 'darwin':
      return path.join(homeDir, 'Library', 'Application Support', 'Code', 'User', 'snippets');
    case 'linux':
      return path.join(homeDir, '.config', 'Code', 'User', 'snippets');
    default:
      throw new Error(`Sistema operativo no soportado: ${platform}`);
  }
}

try {
  console.log('🚀 Instalando snippets en VS Code...\n');
  
  // Verificar que existe el archivo fuente
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error('❌ Error: Primero ejecuta "npm run generate-snippets"');
    process.exit(1);
  }
  
  // Obtener directorio de snippets
  const snippetsDir = getVSCodeSnippetsDir();
  const targetFile = path.join(snippetsDir, 'copilot-skills.code-snippets');
  
  // Crear directorio si no existe
  if (!fs.existsSync(snippetsDir)) {
    fs.mkdirSync(snippetsDir, { recursive: true });
    console.log(`📁 Creado directorio: ${snippetsDir}`);
  }
  
  // Copiar archivo
  fs.copyFileSync(SOURCE_FILE, targetFile);
  
  console.log('✅ Snippets instalados exitosamente');
  console.log(`📍 Ubicación: ${targetFile}`);
  console.log(`\n💡 Reinicia VS Code para que los cambios surtan efecto`);
  console.log(`\n🎯 Uso: En Copilot Chat, escribe !skill-[TAB] para autocompletar`);
  
} catch (error) {
  console.error('❌ Error al instalar snippets:', error.message);
  process.exit(1);
}
