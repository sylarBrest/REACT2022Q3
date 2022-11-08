import { ImageInfoContentType } from 'data/types';
import { CountItem } from './CountItem';

import downloadIcon from 'assets/svg/download.svg';
import likeIcon from 'assets/svg/like.svg';
import viewIcon from 'assets/svg/view.svg';
import commentIcon from 'assets/svg/comment.svg';
import personIcon from 'assets/svg/person.svg';
import './ImageInfo.css';

export const ImageInfoContent = ({
  largeImageURL,
  userImageURL,
  user,
  likes,
  views,
  comments,
  downloads,
  tags,
}: ImageInfoContentType) => {
  return (
    <div className="image-info" data-testid={'image-info'}>
      <img className="image-info-image" src={largeImageURL} alt="image-info photo" />
      <div className="image-info-info">
        <div className="image-info-user-info">
          <img className="image-info-user-icon" src={userImageURL || personIcon} alt="User icon" />
          <p className="image-info-user-name">{user}</p>
        </div>
        <div className="image-info-image-info">
          <div className="image-info-image-tags">
            <span>
              <b>tags: </b>
            </span>
            {tags}
          </div>
          <div className="image-info-image-counts">
            <CountItem label="views" icon={viewIcon} value={views} />
            <CountItem label="comments" icon={commentIcon} value={comments} />
            <CountItem label="likes" icon={likeIcon} value={likes} />
            <CountItem label="downloads" icon={downloadIcon} value={downloads} />
          </div>
        </div>
      </div>
    </div>
  );
};
