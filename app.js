// Colores destacados heredados de tu script original adaptados a la nueva estructura
const RED = '#C0392B', ORANGE = '#D35400', BLUE = '#2980B9';
const highlight = {
  'Plataforma Banca Empresarial': RED, 'Banca Electrónica y Móvil': RED, 'Hub de pagos': RED,
  'Cuenta Rocket': ORANGE, 'Controles de Integridad': ORANGE, '2FA en trx': ORANGE,
  'Programa Lazos': ORANGE, 'Reingeniería IVR': ORANGE, 'Automatización de procesos ATC': ORANGE,
  'Plataforma Banca Gobierno': BLUE, 'Plataforma Reportes Regulatorios': RED,
};

function getProjectColor(name) {
  if (name.startsWith('•')) return '#7F8C8D';
  const key = Object.keys(highlight).find(k => name.startsWith(k));
  return key ? highlight[key] : '#24292F';
}

function getProgEmoji(name) {
  if (name.includes('Minorista')) return '🔷';
  if (name.includes('Regulatorios')) return '⚖️';
  if (name.includes('Mayorista')) return '🔶';
  if (name.includes('Hub')) return '🔘';
  return '📂';
}

function buildProjectRows(proyectos, term, cleanNameFn = null) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const finalName = cleanNameFn ? cleanNameFn(q.nombre) : q.nombre;
    const nameMatch = finalName.toLowerCase().includes(term);
    const ownerMatch = q.responsable.toLowerCase().includes(term);

    if (nameMatch || ownerMatch) {
      matches++;
      const isTbd = !q.responsable || q.responsable === 'TBD' || q.responsable === '--';
      html += `
        <div class="proj-row">
          <span class="proj-name" style="color: ${getProjectColor(q.nombre)}">${finalName}</span>
          <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable}</span>
        </div>
      `;
    }
  });

  return { html, matches };
}

function render() {
  const container = document.getElementById('dashboard');
  if (!container) return;
  container.innerHTML = '';
  
  const term = document.getElementById('search-input').value.toLowerCase().trim();

  // 🚀 CREAMOS TRES COLUMNAS FÍSICAS PARA EVITAR DESFASES VERTICALES
  const col1 = document.createElement('div'); col1.className = 'column';
  const col2 = document.createElement('div'); col2.className = 'column';
  const col3 = document.createElement('div'); col3.className = 'column';

  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  // --- RENDERS DE PROGRAMAS ---
  
  // 1. Banca Minorista -> Columna 1
  const minor = findProg('Banca Minorista');
  if (minor) {
    let cardHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2><span class="badge">${minor.total_proyectos}</span></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span><span class="section-count">• ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 2. Regulatorios -> Columna 2
  const reg = findProg('Regulatorios');
  if (reg) {
    let cardHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2><span class="badge">${reg.total_proyectos}</span></div>`;
    reg.categorias.forEach(c => {
      const cleanFn = (name) => c.tipo === 'Carryover 2026' && !name.startsWith('•') ? '• ' + name : name;
      const res = buildProjectRows(c.proyectos, term, cleanFn);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span><span class="section-count">• ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 3. Banca Mayorista -> Columna 1 (Cae justo abajo de Minorista)
  const may = findProg('Banca Mayorista');
  if (may) {
    let cardHtml = `<div class="card header-mayorista"><div class="card-head"><h2>${getProgEmoji(may.nombre)} ${may.nombre}</h2><span class="badge">${may.total_proyectos}</span></div>`;
    may.subprogramas.forEach(sp => {
      const cleanFn = (name) => name.startsWith('Proyectos ') ? '• ' + name : name.replace('Gpos Corporativos', 'Gpos Corp');
      const res = buildProjectRows(sp.proyectos, term, cleanFn);
      if (res.matches > 0 || term === '') {
        const leads = sp.responsables ? `<div class="subprogram-leads">${sp.responsables.join(' / ')}</div>` : '';
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${sp.nombre}</span></div>${leads}<div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 4. Hub de Innovación -> Columna 2 (Cae justo abajo de Regulatorios)
  const hub = findProg('Hub de Innovación');
  if (hub) {
    let cardHtml = `<div class="card header-hub"><div class="card-head"><h2>${getProgEmoji(hub.nombre)} ${hub.nombre}</h2><span class="badge">${hub.total_proyectos}</span></div>`;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 5. Carry-over 2026 -> Columna 3 (Ocupa toda la tercera columna limpiamente)
  const co = findProg('Carry-over 2026');
  if (co) {
    let cardHtml = `<div class="card header-carryover"><div class="card-head"><h2>${getProgEmoji(co.nombre)} ${co.nombre}</h2><span class="badge">${co.total_proyectos}</span></div>`;
    co.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span><span class="section-count">• ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col3.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // Inyectar las tres columnas ordenadas al contenedor
  container.appendChild(col1);
  container.appendChild(col2);
  container.appendChild(col3);
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);
