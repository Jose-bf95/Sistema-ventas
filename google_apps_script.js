// ═══════════════════════════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT — POS Universal Jose Becerra
// Este script recibe los datos del sistema POS y los escribe en Google Sheets
//
// INSTRUCCIONES DE USO:
// 1. Crea una hoja de cálculo nueva en Google Sheets
// 2. En el menú: Extensiones → Apps Script
// 3. Borra todo el contenido y pega este código completo
// 4. Haz clic en 💾 Guardar
// 5. Clic en "Implementar" → "Nueva implementación"
// 6. Tipo: "Aplicación web"
// 7. Ejecutar como: "Yo"
// 8. Quién tiene acceso: "Cualquier persona"
// 9. Haz clic en "Implementar" y copia la URL
// 10. Pega esa URL en index.html donde dice: const SHEETS_WEBHOOK = "..."
// ═══════════════════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheetName = payload.sheet || 'Datos';
    const rows = payload.rows || [];
    const negocioId = payload.negocioId || 'desconocido';

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(sheetName);

    // Crear la hoja si no existe
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Si la hoja está vacía o la primera fila no tiene datos, escribir encabezado
    if (sheet.getLastRow() === 0) {
      // Los datos ya vienen con encabezado en la primera fila del array
    }

    // Limpiar hoja y escribir todos los datos frescos
    sheet.clearContents();

    if (rows.length > 0) {
      const range = sheet.getRange(1, 1, rows.length, rows[0].length);
      range.setValues(rows);

      // Formato de encabezado (primera fila)
      const headerRange = sheet.getRange(1, 1, 1, rows[0].length);
      headerRange.setBackground('#1a294e');
      headerRange.setFontColor('#e8a020');
      headerRange.setFontWeight('bold');
      headerRange.setFontSize(11);

      // Auto-ajustar columnas
      sheet.autoResizeColumns(1, rows[0].length);
    }

    // Registrar la exportación en hoja de log
    let logSheet = ss.getSheetByName('_Log_Exportaciones');
    if (!logSheet) {
      logSheet = ss.insertSheet('_Log_Exportaciones');
      logSheet.getRange(1,1,1,4).setValues([['Fecha','Negocio','Hoja','Registros']]);
    }
    logSheet.appendRow([
      new Date().toLocaleString('es-VE'),
      negocioId,
      sheetName,
      rows.length - 1  // -1 por el encabezado
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, sheet: sheetName, rows: rows.length }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para prueba manual desde el editor
function testScript() {
  const testData = {
    sheet: 'Inventario_Test',
    negocioId: 'mi_negocio_demo',
    rows: [
      ['Producto', 'Categoría', 'Stock', 'Precio $'],
      ['Arroz 1kg', 'Bodega', '100', '$0.70'],
      ['Aceite 1L', 'Bodega', '48', '$2.70'],
    ]
  };
  const e = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(e);
  Logger.log(result.getContent());
}

// Esta función se ejecuta cuando alguien abre la hoja (opcional)
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🏪 POS Jose Becerra')
    .addItem('📋 Ver instrucciones', 'mostrarInstrucciones')
    .addToUi();
}

function mostrarInstrucciones() {
  const html = HtmlService.createHtmlOutput(`
    <div style="font-family:Arial,sans-serif;padding:20px;">
      <h2 style="color:#e8a020;">🏪 POS Universal — Jose Becerra</h2>
      <p>Este Google Sheet recibe datos automáticamente del sistema POS.</p>
      <h3>Hojas disponibles:</h3>
      <ul>
        <li><strong>Ventas</strong> — Historial de ventas exportado</li>
        <li><strong>Inventario</strong> — Catálogo de productos</li>
        <li><strong>_Log_Exportaciones</strong> — Registro de todas las exportaciones</li>
      </ul>
      <p style="color:#666;font-size:12px;">Desarrollado por <strong>Jose Becerra</strong> · 📱 0424-600-6536</p>
    </div>
  `).setWidth(450).setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Instrucciones POS');
}
