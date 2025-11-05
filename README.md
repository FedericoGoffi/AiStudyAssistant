# Proyecto: Asistente Educativo con IA

## Descripción
Este proyecto implementa un asistente educativo basado en inteligencia artificial que responde preguntas de forma clara y detallada, en español o inglés según el idioma del usuario.  
Consta de dos partes principales:
- **Backend (FastAPI + Transformers):** encargado de procesar las consultas y generar las respuestas mediante el modelo TinyLlama.
- **Frontend (React + Vite):** interfaz web donde el usuario ingresa preguntas y recibe las respuestas de la IA.

---

## Requisitos previos
- Python 3.10 o superior  
- Node.js 18 o superior  
- pip (administrador de paquetes de Python)  

---

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/asistente-educativo.git
cd asistente-educativo
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

## Tecnologías utilizadas
**Frontend:**
- React
- Vite
- Axios

**Backend:**
- FastAPI
- Transformers
- TinyLlama 1.1B Chat
- Torch

---

## Próximos pasos
- Incorporar Docker para simplificar la ejecución del entorno.
- Mejorar el diseño visual del frontend.
- Implementar soporte para historial de preguntas.
