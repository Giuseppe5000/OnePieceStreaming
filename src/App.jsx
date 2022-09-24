import NavbarJsx from './components/Navbar';
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './App.css';

const App = () => {

  const [episodeNum, setEpisodeNum] = useState();
  const [showEpisode, setShowEpisode] = useState(false);

  const loadEpisodeNum = async () => {
    let response = await fetch(`https://one-piece-streaming-backend.vercel.app/api/episodeNumber`);
    let data = await response.json();
    setEpisodeNum(data.epNum);
  }

  const renderButtonLinks = () => {
    let content = [];
    for (let i = 1; i <= episodeNum; i++) {
      content.push(
        <Col className="my-4">
          <Button variant="dark">{i}</Button>
        </Col>
      );
    }
    return content;
  }

  useEffect(() => {
    loadEpisodeNum();
  })

  return (
    <>
      <NavbarJsx></NavbarJsx>
      <Image></Image>
      <Container className="text-center">
        <Row className='mt-5'>
          {episodeNum && renderButtonLinks()}
        </Row>
      </Container>

    </>
  );
}

export default App;