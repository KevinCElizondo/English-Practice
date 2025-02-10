# English Learning Platform

Una plataforma de aprendizaje intensivo de inglés con gamificación y automatización.

## Características Principales

- Gamificación con sistema de puntos y logros
- Módulos de aprendizaje estructurados
- Automatización con n8n para recordatorios y evaluaciones
- Base de datos segura con Supabase
- Sistema de seguimiento de progreso

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta en Supabase
- Cuenta en n8n (local o cloud)
- (Opcional) Cuenta en OpenAI para características de IA

## Configuración

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd english-learning-platform
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Edita el archivo .env con tus credenciales:
   - REACT_APP_SUPABASE_URL
   - REACT_APP_SUPABASE_ANON_KEY
   - REACT_APP_N8N_WEBHOOK_URL
   - REACT_APP_OPENAI_API_KEY (opcional)

4. **Configurar Supabase**
   - Crear un nuevo proyecto en Supabase
   - Ejecutar el script SQL en `supabase/schema.sql`
   - Ejecutar el script SQL en `supabase/seed.sql`

5. **Configurar n8n**
   - Instalar n8n: `npm install -g n8n`
   - Iniciar n8n: `n8n start`
   - Importar los workflows desde la carpeta `n8n-workflows`
   - Configurar los webhooks según la documentación

## Desarrollo

```bash
# Iniciar en modo desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar pruebas
npm test
```

## Estructura del Proyecto

```
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas principales
│   ├── services/      # Servicios (Supabase, n8n)
│   └── utils/         # Utilidades
├── supabase/
│   ├── schema.sql     # Esquema de la base de datos
│   └── seed.sql       # Datos de ejemplo
├── n8n-workflows/     # Configuraciones de n8n
└── public/            # Archivos estáticos
```

## Despliegue

1. **Preparación**
   - Asegúrate de tener todas las variables de entorno configuradas
   - Ejecuta `npm run build`

2. **Netlify**
   - Conecta tu repositorio de GitHub
   - Configura las variables de entorno
   - Despliega automáticamente desde main/master

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.
