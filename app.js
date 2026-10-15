// Manejo inteligente de los colores tipográficos del nuevo tablero 2027
function getProjectColor(project) {
  if (project.destacado === 'muted') return '#7F8C8D';
  if (project.destacado === 'blue') return '#1B355D';
  if (project.destacado === 'orange') return '#D35400';
  if (project.destacado === 'red') return '#C0392B';
  if (project.destacado === 'pink') return '#9B59B6';
  return '#24292F';
}

function getProgEmoji(id) {
  const emojis = { minorista: '🔷', regulatorios: '⚖️', mayorista: '🔶', hub: '🔘', carryover: '📂' };
  return emojis[id] || '📋';
}

function buildProjectRows(proyectos, term) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const nameMatch = q.nombre.toLowerCase().includes(term);
    const ownerMatch = q.responsable.toLowerCase().includes(term);

    if (nameMatch || ownerMatch) {
      matches++;
      const isTbd = q.responsable === 'TBD' || q.responsable === '--';
      const isSubItem = q.nombre.startsWith('•');
      
      html += `
        <div class="proj-row" style="${isSubItem ? 'margin-left: 12px; background: #FAFBFD;' : ''}">
          <span class="proj-name" style="color: ${getProjectColor(q)}; font-weight: ${isSubItem ? '400' : '600'}">${q.nombre}</span>
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

  // Columnas maestras para fijar la distribución idéntica a tu imagen
  const col1 = document.createElement('div'); col1.className = 'column';
  const col2 = document.createElement('div'); col2.className = 'column';
  const col3 = document.createElement('div'); col3.className = 'column';

  const findProg = id => pmoData.programas.find(p => p.id === id);

  // 1. Banca Minorista -> Columna 1 Superior
  const minor = findProg('minorista');
  if (minor) {
    let cardHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.id)} ${minor.nombre}</h2><span class="badge">${minor.total_proyectos}</span></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo} • ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 2. Banca Mayorista -> Columna 1 Inferior
  const may = findProg('mayorista');
  if (may) {
    let cardHtml = `<div class="card header-mayorista"><div class="card-head"><h2>${getProgEmoji(may.id)} ${may.nombre}</h2></div>`;
    may.subprogramas.forEach(sp => {
      const res = buildProjectRows(sp.proyectos, term);
      if (res.matches > 0 || term === '') {
        const leads = sp.responsables ? `<div class="subprogram-leads">${sp.responsables.join(' / ')}</div>` : '';
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${sp.nombre}</span></div>${leads}<div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 3. Regulatorios -> Columna 2 Superior
  const reg = findProg('regulatorios');
  if (reg) {
    let cardHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.id)} ${reg.nombre}</h2><span class="badge">${reg.total_proyectos}</span></div>`;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo} • ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 4. Hub de Innovación -> Columna 2 Inferior
  const hub = findProg('hub');
  if (hub) {
    let cardHtml = `<div class="card header-hub"><div class="card-head"><h2>${getProgEmoji(hub.id)} ${hub.nombre}</h2><span class="badge">${hub.total_proyectos}</span></div>`;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo} • ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 5. Carry-over 2026 -> Columna 3 Completa
  const co = findProg('carryover');
  if (co) {
    let cardHtml = `<div class="card header-carryover"><div class="card-head"><h2>${getProgEmoji(co.id)} ${co.nombre}</h2><span class="badge">${co.total_proyectos}</span></div>`;
    co.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') {
        cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo} • ${res.matches}</span></div><div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;
    col3.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  container.appendChild(col1);
  container.appendChild(col2);
  container.appendChild(col3);
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);
