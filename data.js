// Tu base de datos real extraída de la versión definitiva 2027
const pmoData = {
  titulo: "Portafolio de Proyectos 2027",
  globalStats: { programas: 3, proyectos: 38 },
  programas: [
    {
      nombre: "Banca Minorista",
      id: "minorista",
      total_proyectos: 8,
      categorias: [
        {
          tipo: "Nuevos proyectos",
          proyectos: [
            { nombre: "App de Inversiones MVP 2", responsable: "S. Olivero" },
            { nombre: "Rediseño Proceso de Originación MVP 2", responsable: "S. Olivero" },
            { nombre: "Copiloto MVP 2", responsable: "S. Olivero" },
            { nombre: "Seguros RANMA", responsable: "S. Olivero" },
            { nombre: "Créditos Asociados a Nómina (CAN)", responsable: "S. Olivero" },
            { nombre: "Cash Loans", responsable: "S. Olivero" },
            { nombre: "Personalización de Ofertas", responsable: "S. Olivero" },
            { nombre: "Cuenta Rocket", responsable: "S. Olivero", destacado: "orange" }
          ]
        }
      ]
    },
    {
      nombre: "Banca Mayorista",
      id: "mayorista",
      total_proyectos: 13, // Suma de todos sus bloques internos
      subprogramas: [
        {
          nombre: "Banca de Empresas · Programa",
          responsables: ["R. Galindo", "B. Flores"],
          proyectos: [
            { nombre: "Plataforma Banca Empresarial Fase 1 (PyME, Empresa Mediana y Gpos Corporativos)", responsable: "R. Galindo / B. Flores", destacado: "blue" },
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ]
        },
        {
          nombre: "Banca de Gobierno · Programa",
          responsables: ["R. Vázquez"],
          proyectos: [
            { nombre: "Plataforma Banca Gobierno Fase 1 (TBD)", responsable: "R. Vázquez", destacado: "blue" },
            { nombre: "• Proyectos Crédito", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Captación", responsable: "TBD", destacado: "muted" },
            { nombre: "• Proyectos Servicios", responsable: "TBD", destacado: "muted" }
          ]
        },
        {
          nombre: "Transversales",
          proyectos: [
            { nombre: "Banca Electrónica y Móvil", responsable: "--", destacado: "red" },
            { nombre: "Hub de pagos", responsable: "--", destacado: "red" },
            { nombre: "Dispersión de Nóminas", responsable: "--" },
            { nombre: "Banco Recaudador", responsable: "R. Vázquez", destacado: "red" }
          ]
        }
      ]
    },
    {
      nombre: "Regulatorios",
      id: "regulatorios",
      total_proyectos: 7,
      categorias: [
        {
          tipo: "Carryover 2026",
          proyectos: [
            { nombre: "PCI DSS", responsable: "C. Carreón" },
            { nombre: "2o Factor Autentic. trx TDD no presenc.", responsable: "C. Carreón" },
            { nombre: "Formulario FATCA / CRS", responsable: "C. Budar", destacado: "pink" },
            { nombre: "Identificador Cliente Derechos ARCO", responsable: "C. Carreón" }
          ]
        },
        {
          tipo: "Nuevos proyectos",
          proyectos: [
            { nombre: "Nueva Plataforma PLD", responsable: "C. Carreón" },
            { nombre: "Plataforma Reportes Regulatorios", responsable: "C. Budar", destacado: "pink" },
            { nombre: "Herramientas Ciberseguridad", responsable: "C. Carreón" }
          ]
        }
      ]
    },
    {
      nombre: "Hub de Innovación",
      id: "hub",
      total_proyectos: 5,
      categorias: [
        {
          tipo: "Por autorizar",
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
      id: "carryover",
      total_proyectos: 13,
      categorias: [
        {
          tipo: "Enfoque al Cliente",
          proyectos: [
            { nombre: "Programa Lazos", responsable: "A. Nava", destacado: "orange" },
            { nombre: "Reingeniería IVR", responsable: "A. Nava", destacado: "orange" },
            { nombre: "Automatización de procesos ATC (3 saws)", responsable: "A. Nava", destacado: "orange" }
          ]
        },
        {
          tipo: "Operaciones",
          proyectos: [
            { nombre: "Automatización proceso trxs POS", responsable: "A. Nava" },
            { nombre: "Implementación de TEF", responsable: "A. Nava" },
            { nombre: "Tokenización", responsable: "A. Nava" },
            { nombre: "Migración Campo c53 al c57", responsable: "A. Nava" }
          ]
        },
        {
          tipo: "Modernización Tecnológica",
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
