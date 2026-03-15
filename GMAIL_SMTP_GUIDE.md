# 📧 Gmail SMTP Setup Guide - Steg för Steg

Denna guide visar hur du aktiverar email-notifieringar för kontaktformuläret på AiWeb.se.

---

## 🎯 Vad du kommer uppnå:
När någon fyller i kontaktformuläret på din hemsida får du automatiskt ett email till **hej@aiweb.se**

---

## 📋 Förberedelser (5 minuter)

### Steg 1: Skaffa Gmail App-lösenord

1. **Gå till ditt Google-konto:**
   - Öppna: https://myaccount.google.com/

2. **Aktivera 2-Faktor Autentisering** (om du inte redan har det):
   - Gå till "Säkerhet" → "2-stegsverifiering"
   - Följ instruktionerna
   - ⚠️ **OBS:** Du MÅSTE ha 2FA aktiverat för att skapa App-lösenord

3. **Skapa App-lösenord:**
   - Gå till: https://myaccount.google.com/apppasswords
   - Välj "Mail" som app
   - Välj "Annan (anpassat namn)" som enhet
   - Skriv: "AiWeb Contact Form"
   - Klicka "Generera"
   - **KOPIERA det 16-siffriga lösenordet** (t.ex. `abcd efgh ijkl mnop`)
   - ✅ Spara detta lösenord - du kommer inte se det igen!

---

## ⚙️ Konfigurera Backend (3 minuter)

### Steg 2: Öppna .env filen

```bash
cd backend
nano .env
```

### Steg 3: Fyll i dina uppgifter

**Ersätt tomma värden med dina riktiga uppgifter:**

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din.email@gmail.com          # ← Din Gmail-adress
SMTP_PASSWORD=abcd efgh ijkl mnop       # ← App-lösenordet du kopierade
EMAIL_FROM=din.email@gmail.com          # ← Din Gmail-adress (samma som SMTP_USER)
EMAIL_TO=hej@aiweb.se                   # ← Redan korrekt!
```

**Exempel med riktiga värden:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=john.doe@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
EMAIL_FROM=john.doe@gmail.com
EMAIL_TO=hej@aiweb.se
```

### Steg 4: Spara och stäng
- Tryck `Ctrl + X`
- Tryck `Y` för att spara
- Tryck `Enter`

---

## 🚀 Starta om Backend

```bash
# Om du använder supervisorctl (på Emergent)
sudo supervisorctl restart backend

# Om du kör lokalt med uvicorn
# Stoppa servern (Ctrl+C) och kör:
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

---

## ✅ Testa att det fungerar

### Metod 1: Via hemsidan
1. Gå till din hemsida
2. Scrolla ner till kontaktformuläret
3. Fyll i alla fält:
   - Namn: Test Användare
   - Email: test@example.com
   - Meddelande: Detta är ett test
4. Klicka "Skicka meddelande"
5. ✅ Kolla din inbox på hej@aiweb.se - du bör få ett email!

### Metod 2: Kolla backend-loggar
```bash
tail -f /var/log/supervisor/backend.*.log
```

**Vad du bör se:**
✅ **Framgång:**
```
INFO: Contact notification email sent to hej@aiweb.se
```

❌ **Problem:**
```
ERROR: Failed to send email: [felmeddelande]
```

---

## 🐛 Felsökning

### Problem 1: "Email service not configured"
**Orsak:** SMTP_USER eller SMTP_PASSWORD är tomma
**Lösning:** Kontrollera att du fyllt i båda i .env

### Problem 2: "Authentication failed"
**Orsak:** Fel lösenord eller 2FA inte aktiverat
**Lösning:** 
- Dubbelkolla att du använder App-lösenord (16 tecken), INTE ditt vanliga Gmail-lösenord
- Kontrollera att 2FA är aktiverat

### Problem 3: "Connection refused"
**Orsak:** Fel SMTP-inställningar eller brandvägg
**Lösning:**
- Kontrollera att SMTP_HOST=smtp.gmail.com
- Kontrollera att SMTP_PORT=587

### Problem 4: Emails hamnar i spam
**Lösning:**
- Lägg till din Gmail-adress som säker avsändare
- Första gången kan emails hamna i spam - markera som "Inte spam"

---

## 🔐 Säkerhetstips

✅ **GÖR:**
- Använd App-lösenord, ALDRIG ditt vanliga Gmail-lösenord
- Ha 2-Faktor Autentisering aktiverat
- Förvara .env-filen säkert (laddas aldrig upp till GitHub)

❌ **GÖR INTE:**
- Dela ditt App-lösenord med någon
- Committa .env till GitHub
- Använda samma lösenord för flera tjänster

---

## 📱 Mobilapp-notifieringar (Bonus)

För att få push-notifieringar på mobilen:
1. Installera Gmail-appen
2. Aktivera notifieringar för hej@aiweb.se
3. Nu får du notis direkt när någon fyller i formuläret! 🔔

---

## 🎉 Klart!

Nu får du automatiskt email varje gång någon kontaktar dig via hemsidan!

**Email-innehållet visar:**
- Namn på personen
- Företag (om ifyllt)
- Email-adress
- Webbplats (om ifyllt)
- Meddelande
- Tidsstämpel
- IP-adress

---

## 📞 Behöver du hjälp?

Om något inte fungerar:
1. Kolla backend-loggarna: `tail -f /var/log/supervisor/backend.*.log`
2. Kontrollera att alla värden i .env är korrekta
3. Se till att backend har startats om efter ändringar

**Support:** hej@aiweb.se

---

**Skapad för AiWeb.se**
*Uppdaterad: Mars 2025*
