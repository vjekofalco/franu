import styled from 'styled-components'

import { Section } from '../components/common/section'
import { baseUnit, PAGE_CONTENT_NARROW_WIDTH } from '../common/constants'
import { HeadlineTernarry, HeadlineSecondary, Text } from '../components/common/text'

const TandCContent = styled.div`
  margin: 0 auto;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH + 2 * baseUnit}px;
`

export default () => (<Section>
    <TandCContent>
        <HeadlineSecondary marginBottom={2}>Franu Bedingungen und Konditionen:</HeadlineSecondary>
        <Text marginBottom={3}>Diese Webseite ist Eigentum der Franu Gbr.</Text>

        <Text weight={600} marginBottom={1}>Wenn Sie einen Fehler auf unserer Webseite gefunden haben...</Text>
        <Text marginBottom={3}>Zögern Sie bitte nicht uns zu kontaktieren. Ihr Feedback ist uns sehr wichtig</Text>

        <Text weight={600} marginBottom={1}>Wenn Sie eine Frage an uns haben…</Text>
        <Text marginBottom={3}>Sie können uns gerne per E-Mail (E-Mail Link HERE!) kontaktieren.</Text>

        <HeadlineTernarry marginBottom={2} id={"impresum"}>Impressum:</HeadlineTernarry>
        <Text marginBottom={1}><span style={{ fontWeight: 600 }}>Adresse:</span> Adenauerring 16 81737 München</Text>
        <Text marginBottom={1}><span style={{ fontWeight: 600 }}>E-mail:</span> info@franu.de</Text>
        <Text marginBottom={3}><span style={{ fontWeight: 600 }}>Telefonnummer:</span> 0176/215-32-666 oder 0152/024-32-979</Text>

        <HeadlineTernarry marginBottom={2}>Bedingungen und Konditionen:</HeadlineTernarry>
        <Text marginBottom={3}>Die Informationen auf dieser Webseite werden zum Zweck der Förderung unserer Firma und unserer Arbeit verwendet. Fotos von unseren Produkten (Küchen) garantieren nicht, dass Sie ein gleiches Produkt wie unser ehemaliger Kunde bekommen werden. Jede Küche ist eine Einzelanfertigung und wird an die Bedürfnisse des Kunden und an den jeweiligen Standort, auf dem sie montiert wird, angepasst. </Text>

        <HeadlineTernarry marginBottom={2} id={"privacy-policy"}>Datenschutzrichtlinien</HeadlineTernarry>
        <Text weight={600} marginBottom={1}>Cookies</Text>
        <Text marginBottom={1}>Die Webseite verwendet nur Cookies, die für die Funktion der Webseite notwendig sind.</Text>
        <Text marginBottom={3}>Neben den notwendigen Cookies benutzt die Webseite Google Analytics, einen Webdienst zur Analyse der Webseite, den von Google Inc. ("Google"). Google Analytics verwendet Cookies, die uns helfen, besser zu verstehen, wie unsere Nutzer unsere Webseite nutzen. Die von Google Analytics erzeugten Daten zum Nutzerverhalten sind anonymisiert und werden auf Servern von Google in den USA gespeichert. Google Analytics verwendet diese Daten, um Berichte darüber zu erstellen, wie unsere Nutzer unsere Webseite nutzen. Ihre IP-Adresse wird nicht mit den von Google Analytics erfassten Daten in Verbindung gebracht. Mit der Annahme von Cookies erklären Sie sich damit einverstanden, dass Google Analytics Daten über Ihr Verhalten auf unserer Webseite verarbeiten kann. </Text>

        <Text weight={600} marginBottom={1}>Server-Protokolle</Text>
        <Text marginBottom={3}>Unsere Webseite speichert Server-Protokolle zum Zweck der Fehlersuche (Behebung von Softwarefehlern) und der Wartung. Für Sie ist es wichtig zu wissen, dass die Protokolle Ihre IP-Adresse enthalten. Aus diesem Grund ist es wichtig zu wissen, dass Franu die Server- Protokolle nicht länger speichert, als es für die Lösung bestimmter Probleme (Behebung von Softwarefehlern) notwendig ist, und dass unnötige Protokolle e so schnell wie möglich gelöscht werden. Die Reinigung/ Löschung unnötiger Protokolle erfolgt im Rahmen der Wartung der Website und wird in regelmäßigen Abständen wiederholt.</Text>

        <Text weight={600} marginBottom={1}>Benutzerdaten</Text>
        <Text marginBottom={3}>Wenn Sie auf unserer Website eine Anfrage ausfüllen, werden die von Ihnen im Formular eingegebenen personenbezogenen Daten (Vor- und Nachname, Wohnanschrift, Telefonnummer und Email) in einer Datenbank gespeichert. Die Datenbank befindet sich auf Servern von AWS (Web Services) mit Sitz in Frankfurt. Ihre personenbezogenen Daten werden für die Dauer eines Jahres bzw. maximal für die Dauer der Gewährleistung gespeichert, wenn wir eine Vereinbarung über die Erbringung unserer Dienstleistungen treffen.
            Es ist wichtig, dass Sie wissen, dass Sie sich jederzeit an uns wenden und die Löschung Ihrer personenbezogenen Daten verlangen können.
        </Text>

        <Text weight={600} marginBottom={1}>Marketing und Werbung </Text>
        <Text marginBottom={3}>Die Website verwendet keine Marketing- und Werbemechanismen. Franu.de ist nicht verantwortlich für die Inhalte anderer Websites und Dienste, die Sie über die Weblinks auf unserer Website erreichen können.</Text>

        <Text weight={600} marginBottom={1}>Standort-Disclaimer</Text>
        <Text marginBottom={10}>Franu bietet seine Dienste zurzeit nur für den Raum München an. Bitte beachten Sie, dass wir Ihnen unseren Service nicht anbieten können, wenn Sie nicht in München wohnen. Ihre Anfrage kann daher leider nicht weiterbearbeitet werden.</Text>
    </TandCContent>
</Section>)
