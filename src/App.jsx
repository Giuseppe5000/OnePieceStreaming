import NavbarJsx from './components/Navbar';
import Episode from './components/Episode';
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './App.css';
import image from './assets/images/onepiece.jpg';

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
        <Col key={i} className="my-4">
          <Button  variant="dark" onClick={() => setShowEpisode(i)}> {i} </Button>
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
      <NavbarJsx setShowEpisode={setShowEpisode}></NavbarJsx>
      {!showEpisode &&
        <>
          <Image src={image} fluid/>
          <h1 className="text-center mt-5">Episode List</h1>
        </>
      }
      {!showEpisode &&
        <Container className="text-center">
          <Row className='mt-5'>
            {episodeNum && renderButtonLinks()}
          </Row>
        </Container>
      }

      {showEpisode &&
        <Episode epNum={showEpisode}></Episode>
      }

    </>
  );
}

export default App;