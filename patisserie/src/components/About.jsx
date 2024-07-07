import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
    <div className='accordion'>
    <Accordion defaultActiveKey="0" flush className='accor'>
      <Accordion.Item eventKey="0" className='acc-body'>
        <Accordion.Header className='headers'>Über uns</Accordion.Header>
        <Accordion.Body>
        Unsere Kuchen werden mit Liebe gemacht. Jeder Bissen ist ein Gedicht aus Geschmack und Freude. Bei jeder Zubereitung steckt unser ganzes Herzblut drin. Mit frischen Zutaten und handwerklichem Können zaubern wir einzigartige Köstlichkeiten. Jeder Kuchen ist ein Meisterwerk, das Ihre Sinne verführt und Ihnen ein Lächeln ins Gesicht zaubert. Genießen Sie jeden Moment mit unseren liebevoll kreierten Kreationen.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='acc-body'>
        <Accordion.Header className='headers'>Häufig gestellte Fragen</Accordion.Header>
        <Accordion.Body>
       <ol className='li'>
        <li>Bieten Sie Lieferung an?
        Ja, wir bieten einen Lieferdienst an. Sie können während des Bestellvorgangs die Option "Lieferung" auswählen und Ihre Lieferadresse angeben.</li>
        <li>Bieten Sie Catering-Services an?
        Ja, wir bieten Catering-Services für besondere Anlässe und Veranstaltungen an. Bitte kontaktieren Sie uns für weitere Informationen und individuelle Angebote.</li>
        <li>Gibt es Parkmöglichkeiten in der Nähe?
        Ja, es gibt ausreichend Parkmöglichkeiten in der Nähe unsere Patisserei. Sie können auch eine kurze Parkzeit zum Abholen nutzen.</li>
       </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  

    </div>
    );
  
}

export default About;
