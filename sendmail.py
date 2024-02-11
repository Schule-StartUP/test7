import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
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

    # Anhang hinzufügen (Beispiel: ein Bild mit dem Dateinamen "example.jpg")
    attachment_path = r"C:\Mail Python\Businessplan_Vorlage.pdf"

    attachment = open(attachment_path, "rb")

    part = MIMEBase("application", "octet-stream")
    part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header("Content-Disposition", f"attachment; filename=Businessplan_Vorlage.pdf")

    message.attach(part)

    # Verbindung zum SMTP-Server herstellen
    with smtplib.SMTP(smtp_server, smtp_port) as smtp:
        # Starten Sie die TLS-Verschlüsselung
        smtp.starttls()

        # Authentifizierung mit Benutzername und Passwort
        smtp.login(sender_email, sender_password)

        # E-Mail senden
        smtp.sendmail(sender_email, receiver_email, message.as_string())

 
  
