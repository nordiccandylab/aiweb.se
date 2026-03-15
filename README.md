# AiWeb.se - Modern AI Solutions Website

En komplett fullstack-webbplats för AiWeb.se med AI-lösningar och webbdesign-tjänster.

## 🚀 Features

- ✨ Modern, responsiv design med Framer Motion
- 📧 Fullt fungerande kontaktformulär med email-notifieringar
- 🤖 6 tjänstesidor (Virtuell Assistans, AI-Automatisering, Digital Marknadsföring, etc.)
- 💾 MongoDB integration
- 📱 Mobilanpassad design
- 🎨 Professionell UI med Shadcn komponenter

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Framer Motion
- Tailwind CSS
- Shadcn UI
- React Router

**Backend:**
- FastAPI (Python)
- MongoDB
- SMTP Email Service
- Pydantic

## 📦 Installation

### 1. Klona repositoryt
```bash
git clone https://github.com/ditt-användarnamn/aiweb-pro.git
cd aiweb-pro
```

### 2. Backend Setup
```bash
cd backend

# Skapa .env från example
cp .env.example .env

# Redigera .env och fyll i dina uppgifter
nano .env

# Installera dependencies
pip install -r requirements.txt

# Starta servern
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### 3. Frontend Setup
```bash
cd frontend

# Installera dependencies
yarn install

# Starta utvecklingsservern
yarn start
```

## 📧 Email-konfiguration

För att få email-notifieringar när någon fyller i kontaktformuläret:

1. Öppna `/backend/.env`
2. Ändra `EMAIL_TO` till din email:
```env
EMAIL_TO=din@email.se
```

3. Konfigurera SMTP (Gmail exempel):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din.email@gmail.com
SMTP_PASSWORD=ditt-app-lösenord
EMAIL_FROM=din.email@gmail.com
```

Se `/SMTP_SETUP.md` för detaljerade instruktioner.

## 🌐 Deploy

### Miljövariabler som behövs:
**Backend:**
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Databasnamn
- `SMTP_USER` - SMTP användarnamn
- `SMTP_PASSWORD` - SMTP lösenord
- `EMAIL_TO` - Email där kontaktförfrågningar skickas

**Frontend:**
- `REACT_APP_BACKEND_URL` - Backend URL

## 📂 Projektstruktur

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/     # UI komponenter
│   │   ├── pages/         # Sidkomponenter
│   │   └── data/          # Mock data
│   └── package.json
├── backend/
│   ├── models/           # Datamodeller
│   ├── routes/           # API endpoints
│   ├── services/         # Business logic
│   └── server.py         # Huvudserver
└── README.md
```

## 🔐 Säkerhet

- **.env filer är INTE inkluderade** i Git (innehåller känsliga uppgifter)
- Skapa din egen `.env` från `.env.example`
- Använd app-lösenord för Gmail, inte ditt vanliga lösenord

## 📞 Kontakt

Email: hej@aiweb.se
Website: https://aiweb.se

## 📄 License

© 2025 AiWeb.se - Alla rättigheter förbehållna
