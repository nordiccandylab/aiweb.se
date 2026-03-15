# AiWeb.se - Email Konfiguration (SMTP)

## 📧 Hur man aktiverar email-notifieringar

För att få email när någon skickar kontaktformuläret, följ dessa steg:

### Steg 1: Välj email-leverantör

#### **Option A: Gmail (Enklast)**

1. Gå till ditt Google-konto: https://myaccount.google.com/
2. Aktivera 2-faktor autentisering
3. Gå till "App passwords": https://myaccount.google.com/apppasswords
4. Skapa ett nytt app-lösenord för "Mail"
5. Kopiera det 16-siffriga lösenordet

#### **Option B: SendGrid (Professionellt)**

1. Skapa konto på https://sendgrid.com/
2. Skapa en API-nyckel
3. Använd denna nyckel som lösenord

#### **Option C: Ditt eget företag email**

Kontakta din email-leverantör för SMTP-inställningar

---

### Steg 2: Uppdatera konfiguration

Öppna filen `/app/backend/.env` och fyll i dina uppgifter:

#### För Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din.email@gmail.com
SMTP_PASSWORD=ditt-16-siffriga-app-lösenord
EMAIL_FROM=din.email@gmail.com
EMAIL_TO=hej@aiweb.se
```

#### För SendGrid:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=ditt-sendgrid-api-key
EMAIL_FROM=noreply@aiweb.se
EMAIL_TO=hej@aiweb.se
```

#### För Outlook:
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=din.email@outlook.com
SMTP_PASSWORD=ditt-lösenord
EMAIL_FROM=din.email@outlook.com
EMAIL_TO=hej@aiweb.se
```

---

### Steg 3: Starta om backend

```bash
sudo supervisorctl restart backend
```

---

### Steg 4: Testa

1. Öppna hemsidan
2. Fyll i kontaktformuläret
3. Skicka
4. Kolla din email (hej@aiweb.se)

---

## 🔍 Felsökning

**"Email service not configured"** i loggarna är normalt innan du konfigurerar SMTP. 

Efter konfiguration kommer du se:
```
INFO: Contact notification email sent to hej@aiweb.se
```

**Gmail fungerar inte?**
- Använd app-lösenord, INTE ditt vanliga lösenord
- Aktivera 2-faktor autentisering först
- Vissa Gmail-konton kräver "Less secure apps" aktiverat

**Email kommer inte fram?**
- Kolla spam-mappen
- Verifiera EMAIL_TO adressen är korrekt
- Kolla backend-loggar: `tail -f /var/log/supervisor/backend.*.log`

---

## 📊 Nuvarande status

**Kontaktformuläret fungerar redan!** 
- ✅ Data sparas i databasen
- ✅ Användare får bekräftelse
- ⚠️ Emails skickas inte förrän SMTP är konfigurerat

Detta är perfekt för utveckling. När du vill börja ta emot emails, följ stegen ovan.

---

## 💡 Tips

- **Testmiljö**: Använd en separat email för testning
- **Produktion**: Använd en professionell email-tjänst som SendGrid
- **Säkerhet**: Använd alltid app-lösenord, aldrig ditt vanliga lösenord

---

För frågor: hej@aiweb.se
