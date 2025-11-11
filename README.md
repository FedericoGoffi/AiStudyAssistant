# Proyecto: Asistente Educativo con IA

## Descripción
Este proyecto implementa un asistente educativo basado en inteligencia artificial que responde preguntas de forma clara y detallada, en español o inglés según el idioma del usuario.  
Consta de dos partes principales:
- **Backend (FastAPI + Transformers):** encargado de procesar las consultas y generar las respuestas mediante el modelo TinyLlama.
- **Frontend (React + Vite):** interfaz web donde el usuario ingresa preguntas y recibe las respuestas de la IA.

---

## Tecnologías utilizadas
**Frontend:**
- React + Vite
- TypeScript
- Redux Toolkit
- Axios

**Backend:**
- FastAPI
- Transformers (TinyLlama/TinyLlama-1.1B-Chat-v1.0)
- Torch
- Uvicorn

**Infraestructura:**
- Docker & Docker Compose
- Nginx
- Node.js 20
- Python 3.11

---

## Ejecución con Docker

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/AiStudyAssistant.git
cd AiStudyAssistant
```

### 2. Construir y ejecutar los contenedores
```bash
docker compose up --build
```

Esto levantará automáticamente:
- **ai_backend:** FastAPI con el modelo TinyLlama.
- **ai_frontend:** Interfaz React.

### 2. Acceder a la aplicación
Una vez completado el proceso, el proyecto estará disponible en:
```
http://localhost:5173
```

> **Nota:** El primer build puede tardar varios minutos, especialmente durante la instalación de dependencias y el modelo TinyLlama.  
> Esto es normal y depende del hardware de tu máquina.

### 3. Detener los contenedores
```bash
docker compose down
```

---

## Instalación (modo local)

## Requisitos previos
- Python 3.10 o superior  
- Node.js 18 o superior  
- pip (administrador de paquetes de Python)

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/AiStudyAssistant.git
cd AiStudyAssistant
```

### 2. Configurar el backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Ejecutar el servidor:
```bash
uvicorn main:app --reload
```
El backend estará disponible en:
```
http://127.0.0.1:8000
```

### 3. Configurar el frontend
```bash
cd ../frontend
npm install
npm run dev
```
El frontend estará disponible en:
```
http://localhost:5173
```

---

## Uso
1. Iniciar ambos servidores (backend y frontend).
2. Acceder a `http://localhost:5173`.
3. Escribir una pregunta en el campo de texto.
4. El asistente responderá con una explicación educativa.

---

## Próximos pasos
- Implementar soporte para historial de preguntas.
