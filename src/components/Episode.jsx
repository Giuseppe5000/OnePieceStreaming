import React from 'react'
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

const Episode = (props) => {

    const [episodeLink, setEpisodeLink] = useState(false);

    const getEpisode = async (epNum) => {
        let response = await fetch(`https://one-piece-streaming-backend.vercel.app/api/episode/${epNum}`);
        let data = await response.json();
        setEpisodeLink(data.link);
    }

    useEffect(() => {
        getEpisode(props.epNum);
    })

    return (
        <Container>
            <h1 className="text-center mb-5">Episode {props.epNum}</h1>
            {episodeLink &&
                <div class="embed-responsive embed-responsive-16by9">
                    <video style={{maxWidth:"100%"}} id="episode" controls="controls" autoplay="autoplay" controlslist="nodownload" src={episodeLink} ></video>
                </div>
            }
        </Container>

    )
}

export default Episode