import Container from 'react-bootstrap/Container';
import NavbarJsx from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbar = (props) => {
    return (

        <NavbarJsx bg="dark" variant="dark">
            <Container>
                <NavbarJsx.Brand>OnePiece Streaming</NavbarJsx.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => props.setShowEpisode(false)}>Home</Nav.Link>
                </Nav>
            </Container>
        </NavbarJsx>

    )
}

export default Navbar;