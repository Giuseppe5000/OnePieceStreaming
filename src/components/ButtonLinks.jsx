import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonLinks = (props) => {

    const renderButtonLinks = () => {
        let content = [];
        for (let i = props.num - 99; i <= props.episodeNum; i++) {
            content.push(
                <Button className="mb-4 ms-3" variant="outline-primary" onClick={() => props.setShowEpisode(i)}> {i} </Button>
            );
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