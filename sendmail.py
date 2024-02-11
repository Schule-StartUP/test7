import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# SMTP-Einstellungen für Outlook
smtp_server = "smtp.office365.com"
smtp_port = 587

# E-Mail-Adresse und App-Passwort
sender_email = "schule.startup@outlook.de"
sender_password = "Super197"

# Empfänger-E-Mail-Adresse
receiver_email = "philippheine7g@gmail.com"

# Betreff und Nachricht
subject = "Test-E-Mail"
message_text = "Dies ist eine Test-E-Mail, die mit einem Python-Programm gesendet wurde."

# Nachricht formatieren
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = receiver_email
message["Subject"] = subject

# Textnachricht hinzufügen
message.attach(MIMEText(message_text, "plain"))

# Verbindung zum SMTP-Server herstellen
with smtplib.SMTP(smtp_server, smtp_port) as smtp:
    # Starten Sie die TLS-Verschlüsselung
    smtp.starttls()

    # Authentifizierung mit Benutzername und Passwort
    smtp.login(sender_email, sender_password)

    # E-Mail senden
    smtp.sendmail(sender_email, receiver_email, message.as_string())


 
  
