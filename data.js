// Este es tu insumo de datos extraído exactamente de tu lógica original
const pmoData = {
  programas: [
    {
      nombre: "Banca Minorista",
      total_proyectos: 8,
      categorias: [
        {
          tipo: "Nuevos proyectos",
          proyectos: [
            { nombre: "Plataforma Banca Empresarial", responsable: "Juan P." },
            { nombre: "Banca Electrónica y Móvil", responsable: "María L." },
            { nombre: "Hub de pagos", responsable: "Carlos M." },
            { nombre: "Cuenta Rocket", responsable: "Ana G." },
            { nombre: "Controles de Integridad", responsable: "Luis T." },
            { nombre: "2FA en trx", responsable: "Elena R." },
            { nombre: "Programa Lazos", responsable: "Pedro S." },
            { nombre: "Reingeniería IVR", responsable: "TBD" }
          ]
        }
      ]
    },
    {
      nombre: "Regulatorios",
      total_proyectos: 8,
      categorias: [
        {
          tipo: "Carryover 2026",
          proyectos: [
            { nombre: "Plataforma Reportes Regulatorios", responsable: "Jorge E." },
            { nombre: "Automatización de procesos ATC", responsable: "Diana V." },
            { nombre: "• Ajustes Normativos A", responsable: "TBD" },
            { nombre: "• Ajustes Normativos B", responsable: "Sofia P." },
            { nombre: "• Validación de Datos C", responsable: "TBD" },
            { nombre: "• Reporte Trimestral D", responsable: "Raul M." }
          ]
        },
        {
          tipo: "Nuevos proyectos",
          proyectos: [
            { nombre: "Auditoría General 2026", responsable: "Lucas K." },
            { nombre: "Mitigación de Riesgos Phase 1", responsable: "TBD" }
          ]
        }
      ]
    },
    {
      nombre: "Banca Mayorista",
      total_proyectos: 7,
      subprogramas: [
        { 
          nombre: "Banca de Empresas • Programa", 
          responsables: ["Ingrid L.", "Alex F."], 
          proyectos: [
            { nombre: "Proyectos Gpos Corporativos", responsable: "Ingrid L." }, 
            { nombre: "Modernización de Crédito", responsable: "Alex F." }
          ] 
        },
        { 
          nombre: "Banca de Gobierno • Programa", 
          responsables: ["Oscar H."], 
          proyectos: [
            { nombre: "Plataforma Banca Gobierno", responsable: "Oscar H." }
          ] 
        },
        { 
          nombre: "Transversales", 
          proyectos: [
            { nombre: "Migración de Core Mayorista", responsable: "TBD" }, 
            { nombre: "Optimización Canales", responsable: "S. Romero" }, 
            { nombre: "API Gateway Mayorista", responsable: "TBD" }, 
            { nombre: "Seguridad Perimetral", responsable: "Lucas K." }
          ] 
        }
      ]
    },
    {
      nombre: "Hub de Innovación",
      total_proyectos: 3,
      categorias: [
        {
          tipo: "Autorizados",
          proyectos: [
            { nombre: "Laboratorio Blockchain", responsable: "Mateo D." },
            { nombre: "IA para Atención al Cliente", responsable: "TBD" },
            { nombre: "Wallet Prototipo", responsable: "Clara Z." }
          ]
        }
      ]
    },
    {
      nombre: "Carry-over 2026",
      total_proyectos: 11,
      categorias: [
        {
          tipo: "Infraestructura",
          proyectos: [
            { nombre: "Renovación de Servidores", responsable: "Sistemas" },
            { nombre: "Migración a la Nube", responsable: "Cloud Team" }
          ]
        },
        {
          tipo: "Seguridad",
          proyectos: [
            { nombre: "Actualización de Firewalls", responsable: "Seguridad" },
            { nombre: "Cifrado de BDs", responsable: "DBAs" }
          ]
        }
      ]
    }
  ]
};
