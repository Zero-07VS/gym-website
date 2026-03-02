const PLANS = [
    {
      name: "Básico",
      price: "$29",
      featured: false,
      features: [
        { text: "Acceso gimnasio 24/7", enabled: true },
        { text: "Área de musculación", enabled: true },
        { text: "Lockers básicos", enabled: true },
        { text: "Invitado gratis", enabled: false },
      ],
    },
    {
      name: "Estándar",
      price: "$49",
      featured: true,
      badgeText: "Más Popular",
      features: [
        { text: "Acceso gimnasio 24/7", enabled: true },
        { text: "Todas las clases grupales", enabled: true },
        { text: "1 Invitado por mes", enabled: true },
        { text: "Evaluación física mensual", enabled: true },
      ],
    },
    {
      name: "Premium",
      price: "$79",
      featured: false,
      features: [
        { text: "Todo el plan Estándar", enabled: true },
        { text: "Sauna y zona SPA", enabled: true },
        { text: "Personal Trainer semanal", enabled: true },
        { text: "Nutricionista deportivo", enabled: true },
      ],
    },
  ];