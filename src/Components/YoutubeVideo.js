import React from 'react'

const YoutubeVideo = ({ video }) => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YoutubeVideo