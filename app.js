function getProgEmoji(name) {
  if (name.includes('Minorista')) return '🔷';
  if (name.includes('Regulatorios')) return '⚖️';
  return '📂';
}

function buildProjectRows(proyectos, term) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const nameMatch = q.nombre.toLowerCase().includes(term);
    const ownerMatch = (q.responsable || '').toLowerCase().includes(term);

    if (nameMatch || ownerMatch) {
      matches++;
      const isTbd = !q.responsable || q.responsable === 'TBD' || q.responsable === '--';
      html += `
        <div class="proj-row">
          <span class="proj-name">${q.nombre}</span>
          <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable || 'TBD'}</span>
        </div>
      `;
    }
  });

  return { html, matches };
}

function render() {
  const col1 = document.getElementById('col-1');
  const col2 = document.getElementById('col-2');
  const col3 = document.getElementById('col-3');
  
  if (!col1 || !col2 || !col3) return;
  
  col1.innerHTML = ''; col2.innerHTML = ''; col3.innerHTML = '';
  const term = document.getElementById('search-input').value.toLowerCase().trim();
  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  const minor = findProg('Banca Minorista');
  if (minor) {
    let cardHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2><span class="badge">${minor.total_proyectos}</span></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><span class="section-title">${c.tipo}</span><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  const reg = findProg('Regulatorios');
  if (reg) {
    let cardHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2><span class="badge">${reg.total_proyectos}</span></div>`;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><span class="section-title">${c.tipo}</span><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);
