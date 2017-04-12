import React from 'react';
import VideoListItem from './VideoListItem';

// Class Component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //console.log(video.etag);
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
