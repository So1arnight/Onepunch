
import { Container, Card, Button} from "react-bootstrap";
import genos from "./photos/genos.jpg";
import sonic from "./photos/sonic.jpg";
import bang from "./photos/bang.jpg";
import saitama from "./photos/saitama.jpg";

const Bootstrap = () => {
  return (
    <Container style={{display: "flex", }}>
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={saitama} style={{width: "286px", height:"160px"}}/>
        <Card.Body>
          <Card.Title>Saitama</Card.Title>
          <Card.Text style={{height:"320px"}}>
          Saitama (サイタマ, Saitama) is the main protagonist of the series and the titular One-Punch Man.
          He is the most powerful being to exist in the series.
          Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={genos} style={{width: "286px", height:"160px"}}/>
        <Card.Body>
          <Card.Title>Genos</Card.Title>
          <Card.Text style={{height:"320px"}}>
          Genos (ジェノス, Jenosu) is the deuteragonist of One-Punch Man. He is a 19-year-old cyborg and the disciple of Saitama.
          He is always aiming to become more powerful and he fights for justice. Under the Hero Association, he is given the name Demon Cyborg (鬼サイボーグ, Oni Saibōgu) and is currently S-Class Rank 14

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={sonic} style={{width: "286px", height:"160px"}}/>
        <Card.Body>
          <Card.Title>Speed-o'-Sound Sonic</Card.Title>
          <Card.Text style={{height:"320px"}}>
          Speed-o'-Sound Sonic (音速のソニック, Onsoku no Sonikku), more commonly called Sonic (ソニック, Sonikku), is a recurring villain and occasional anti-hero. He first appeared as a bodyguard hired by Zeniru. He is a former member of the 44th Graduation Class of the Ninja Village, nicknamed The End (終わり, Owari; Viz: The Final). Sonic is also a self-declared eternal rival of Saitama.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bang} style={{width: "286px", height:"160px"}}/>
        <Card.Body>
          <Card.Title>Bang, white fang</Card.Title>
          <Card.Text style={{height:"320px"}}>
          Bang (バング, Bangu), also known by his hero alias Silver Fang (シルバーファング, Shirubā Fangu), is a professional hero, a martial arts master, and the creator and teacher of Water Stream Rock Smashing Fist. He is the 3rd highest ranked S-Class hero of the Hero Association and is recognized as one of its most powerful heroes. He is currently settled in Z-City. In his youth, he was nicknamed Wind of Blood (血の風, Chi no Kaze; Viz: BloodWind).
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </Container>
  );
};

export default Bootstrap;
