interface YouTubeVideoProps {
  videoId: string;
  height: number;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, height }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        title="promo-video"
        width="100%"
        height={height}
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
