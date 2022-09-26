import React from 'react'
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';

const ButtonLinks = (props) => {

    const [cookies] = useCookies(['episode']);

    const renderButtonLinks = () => {
        let content = [];
        for (let i = props.num - 99; i <= props.episodeNum; i++) {
            if (i <= cookies.episode) {
                content.push(
                    <Button key={i} className="mb-4 ms-3" variant="primary" onClick={() => props.setShowEpisode(i)}> {i} </Button>
                );
            }
            else {
                content.push(
                    <Button key={i} className="mb-4 ms-3" variant="outline-primary" onClick={() => props.setShowEpisode(i)}> {i} </Button>
                );
            }


            if (props.num === i) {
                break;
            }
        }
        return content;
    }
    return (
        <>
            {renderButtonLinks()}
        </>
    )
}


export default ButtonLinks;