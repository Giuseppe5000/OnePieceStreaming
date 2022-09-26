import NavbarJsx from './components/Navbar';
import Episode from './components/Episode';
import ButtonLinks from './components/ButtonLinks';
import { useEffect, useState, useRef } from "react";
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image'
import './App.css';
import image from './assets/images/onepiece.jpg';

const App = () => {

  const [episodeNum, setEpisodeNum] = useState();
  const [showEpisode, setShowEpisode] = useState(false);
  const [cookies] = useCookies(['episode']);

  const containerList = useRef();

  useEffect(() => {
    loadEpisodeNum();
  })

  const loadEpisodeNum = async () => {
    let response = await fetch(`https://one-piece-streaming-backend.vercel.app/api/episodeNumber`);
    let data = await response.json();
    setEpisodeNum(data.epNum);
  }

  const rederNavItems = () => {
    let content = [];
    for (let i = 1; i <= (episodeNum / 100) + 1; i++) {
      content.push(
        <Nav.Item key={i}>
          <Nav.Link eventKey={i}>{i * 100 - 99}-{i * 100}</Nav.Link>
        </Nav.Item>
      );
    }
    return content;
  }

  const renderTabPane = () => {
    let content = [];
    for (let i = 1; i <= (episodeNum / 100) + 1; i++) {
      content.push(
        <Tab.Pane key={i} eventKey={i}>
          <Col className="my-4">
            <ButtonLinks num={i * 100} setShowEpisode={setShowEpisode} episodeNum={episodeNum}></ButtonLinks>
          </Col>
        </Tab.Pane>
      );
    }
    return content;

  }


  return (
    <>
      <NavbarJsx setShowEpisode={setShowEpisode}></NavbarJsx>

      {!showEpisode &&
        <>
          <Image src={image} fluid />
          <h1 className="text-center my-5">Episode List</h1>

          <Container className="text-center mb-5" >
            <Tab.Container defaultActiveKey={cookies.episode ? Math.ceil(cookies.episode/100) : 1}>
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" menuvariant="dark" className="flex-column">
                    {rederNavItems()}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {renderTabPane()}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>


            <button className="scrollButton"
              onClick={() => {
                containerList.current.scrollIntoView({ behavior: "smooth" });
              }}
            >▼</button>
            <span ref={containerList}></span>
          </Container>
        </>
      }

      {showEpisode &&
        <>
          <Episode epNum={showEpisode}></Episode>
          <Container className="text-center my-5">
            <Button variant="outline-primary" onClick={() => setShowEpisode(false)}>Return to list</Button>
          </Container>
        </>
      }

    </>
  );
}

export default App;