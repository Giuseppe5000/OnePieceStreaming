import React from 'react'
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';

const Episode = (props) => {

    const [episodeLink, setEpisodeLink] = useState(false);
    const [, setCookie] = useCookies(['episode']);

    const getEpisode = async (epNum) => {
        let response = await fetch(`https://one-piece-streaming-backend.vercel.app/api/episode/${epNum}`);
        let data = await response.json();
        setEpisodeLink(data.link);
    }

    useEffect(() => {
        getEpisode(props.epNum);
        
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 1);
        setCookie('episode', props.epNum, { path: '/', expires: nextYear});
    })

    return (
        <Container>
            <h1 className="text-center mb-5 mt-3">Episode {props.epNum}</h1>
            {episodeLink &&
                <div className="embed-responsive embed-responsive-16by9">
                    <video style={{ maxWidth: "100%" }} id="episode" controls="controls" autoPlay controlsList="nodownload" src={episodeLink} ></video>
                </div>
            }
        </Container>

    )
}

export default Episode
