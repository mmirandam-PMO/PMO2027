// ==========================================
// ESTRUCTURA DE DATOS PRINCIPAL (pmoData)
// ==========================================
const pmoData = {
  programas: [
    {
      nombre: "Banca Minorista",
      total_proyectos: 8,
      categorias: [
        {
          tipo: "Nuevos proyectos · 8",
          proyectos: [
            { nombre: "App de Inversiones MVP 2", responsable: "S. Olivero" },
            { nombre: "Rediseño Proceso de Originación MVP 2", responsable: "S. Olivero" },
            { nombre: "Copiloto MVP 2", responsable: "S. Olivero" },
            { nombre: "Seguros RANMA", responsable: "S. Olivero" },
            { nombre: "Créditos Asociados a Nómina (CAN)", responsable: "S. Olivero" },
            { nombre: "Cash Loans", responsable: "S. Olivero" },
            { nombre: "Personalización de Ofertas", responsable: "S. Olivero" },
            { nombre: "Cuenta Rocket", responsable: "S. Olivero" }
          ]
        }
      ]
    },
    {
      nombre: "Regulatorios",
      total_proyectos: 7,
      categorias: [
        {
          tipo: "Carryover 2026 · 4",
          proyectos: [
            { nombre: "PCI DSS", responsable: "C. Carreón" },
            { nombre: "2o Factor Autentic. trx TDD no presenc.", responsable: "C. Carreón" },
            { nombre: "Formulario FATCA / CRS", responsable: "C. Budar" },
            { nombre: "Identificador Cliente Derechos ARCO", responsable: "C. Carreón" }
          ]
        },
        {
          tipo: "Nuevos proyectos · 3",
          proyectos: [
            { nombre: "Nueva Plataforma PLD", responsable: "C. Carreón" },
            { nombre: "Plataforma Reportes Regulatorios", responsable: "C. Budar" },
            { nombre: "Herramientas Ciberseguridad", responsable: "C. Carreón" }
          ]
        }
      ]
    },
    {
      nombre: "Banca Mayorista",
      total_proyectos: 8,
      subprogramas: [
        { 
          nombre: "Banca de Empresas · Programa", 
          responsables: ["R. Galindo", "B. Flores"], 
          proyectos: [
            { nombre: "Plataforma Banca Empresarial Fase 1 (PyME, Empresa Mediana y Gpos Corporativos)", responsable: "R. Galindo / B. Flores" }, 
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ] 
        },
        { 
          nombre: "Banca de Gobierno · Programa", 
          responsables: ["R. Vázquez"], 
          proyectos: [
            { nombre: "Plataforma Banca Gobierno Fase 1 (TBD)", responsable: "R. Vázquez" },
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ] 
        }
      ],
      transversales: [
        {
          tipo: "Transversales · 4",
          proyectos: [
            { nombre: "Banca Electrónica y Móvil", responsable: "--" }, 
            { nombre: "Hub de pagos", responsable: "--" }
          ]
        },
        {
          tipo: "Líneas de Negocio",
          proyectos: [
            { nombre: "Dispersión de Nóminas", responsable: "--" }, 
            { nombre: "Banco Recaudador", responsable: "R. Vázquez" }
          ]
        }
      ]
    },
    {
      nombre: "Hub de Innovación",
      total_proyectos: 5,
      categorias: [
        {
          tipo: "Por autorizar · 5",
          proyectos: [
            { nombre: "Comunidad Lazos", responsable: "R. Flores" },
            { nombre: "MVNO", responsable: "--" },
            { nombre: "Productos de crédito (3) ...", responsable: "--" },
            { nombre: "Producto de crédito", responsable: "--" }
          ]
        }
      ]
    },
    {
      nombre: "Carry-over 2026",
      total_proyectos: 13,
      categorias: [
        {
          tipo: "Enfoque al Cliente · 3",
          proyectos: [
            { nombre: "Programa Lazos", responsable: "A. Nava" },
            { nombre: "Reingeniería IVR", responsable: "A. Nava" },
            { nombre: "Automatización de procesos ATC (3 saws)", responsable: "A. Nava" }
          ]
        },
        {
          tipo: "Operaciones · 4",
          proyectos: [
            { nombre: "Automatización proceso trxs POS", responsable: "A. Nava" },
            { nombre: "Implementación de TEF", responsable: "A. Nava" },
            { nombre: "Tokenización", responsable: "A. Nava" },
            { nombre: "Migración Campo c53 al c57", responsable: "A. Nava" }
          ]
        },
        {
          tipo: "Modernización Tecnológica · 6",
          proyectos: [
            { nombre: "CRM Objetivo", responsable: "M. Matus" },
            { nombre: "Content Manager Objetivo (Filenet)", responsable: "M. Matus" },
            { nombre: "Upgrade S4 HANNA (E R P)", responsable: "C. Budar" },
            { nombre: "Herramientas IA", responsable: "M. Matus" },
            { nombre: "Implementación Middleware (Greenfield)", responsable: "M. Matus" },
            { nombre: "Nuevo Core Bancario & Bca Empresarial", responsable: "M. Matus" }
          ]
        }
      ]
    }
  ]
};

// ==========================================
// FUNCIONES GENERALES DE LOGICA
// ==========================================
function getProjectColor(q) {
  if (q.destacado === 'muted') return '#7F8C8D'; // Gris para las tareas internas secundarias
  return '#24292F'; // Retorna color estándar
}

function getProgEmoji(name) {
  if (name.includes('Minorista')) return '🔷';
  if (name.includes('Regulatorios')) return '⚖️';
  if (name.includes('Mayorista')) return '🔶';
  if (name.includes('Hub')) return '🔘';
  return '📂';
}

function buildProjectRows(proyectos, term) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const nameMatch = q.nombre.toLowerCase().includes(term);
    const ownerMatch = q.responsable.toLowerCase().includes(term);

    if (nameMatch || ownerMatch) {
      matches++;
      const isTbd = !q.responsable || q.responsable === 'TBD' || q.responsable === '--';
      html += `
        <div class="proj-row">
          <span class="proj-name" style="color: ${getProjectColor(q)}">${q.nombre}</span>
          <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable}</span>
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

  // 1. Banca Minorista
  const minor = findProg('Banca Minorista');
  if (minor) {
    let cardHtml = `<div class="card header-minorista"><div class="card-head"><h2>${getProgEmoji(minor.nombre)} ${minor.nombre}</h2><span class="badge">${minor.total_proyectos}</span></div>`;
    minor.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 2. Regulatorios
  const reg = findProg('Regulatorios');
  if (reg) {
    let cardHtml = `<div class="card header-regulatorios"><div class="card-head"><h2>${getProgEmoji(reg.nombre)} ${reg.nombre}</h2><span class="badge">${reg.total_proyectos}</span></div>`;
    reg.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });
    cardHtml += `</div>`;
    col2.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 3. Banca Mayorista
  const may = findProg('Banca Mayorista');
  if (may) {
    let cardHtml = `<div class="card header-mayorista"><div class="card-head"><h2>${getProgEmoji(may.nombre)} ${may.nombre}</h2><span class="badge">8</span></div><div class="section-area">`;
    
    cardHtml += `<div class="subprogram-block-grid">`;
    may.subprogramas.forEach(sp => {
      const res = buildProjectRows(sp.proyectos, term);
      if (res.matches > 0 || term === '') {
        const leads = sp.responsables ? `<div class="subprogram-leads">${sp.responsables.join(' / ')}</div>` : '';
        cardHtml += `<div class="subprogram-card"><div class="subprogram-title">${sp.nombre}</div>${leads}<div class="proj-list">${res.html}</div></div>`;
      }
    });
    cardHtml += `</div>`;

    may.transversales.forEach(t => {
      const res = buildProjectRows(t.proyectos, term);
      if (res.matches > 0 || term === '') cardHtml += `<div style="margin-top:14px;"><div class="section-info"><span class="section-title">${t.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    });

    cardHtml += `</div></div>`;
    col1.appendChild(document.createRange().createContextualFragment(cardHtml));
  }

  // 4. Hub de Innovación
  const hub = findProg('Hub de Innovación');
  if (hub) {
    let cardHtml = `<div class="card header-hub"><div class="card-head"><h2>${getProgEmoji(hub.nombre)} ${hub.nombre}</h2><span class="badge">${hub.total_proyectos}</span></div>`;
    hub.categorias.forEach(c => {
      const res = buildProjectRows(c.proyectos, term);
