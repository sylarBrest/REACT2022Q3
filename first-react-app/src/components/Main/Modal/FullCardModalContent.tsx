import React from 'react';
import { ModalPropsType } from 'data/types';
import { CountItem } from './CountItem';

import closeIcon from 'assets/svg/close.svg';
import downloadIcon from 'assets/svg/download.svg';
import likeIcon from 'assets/svg/like.svg';
import viewIcon from 'assets/svg/view.svg';
import commentIcon from 'assets/svg/comment.svg';

export const FullCardModalContent = (props: ModalPropsType) => {
  const {
    id,
    onCloseModal,
    largeImageURL,
    userImageURL,
    user,
    likes,
    views,
    comments,
    downloads,
    tags,
  } = props;

  return (
    <div
      className="modal"
      data-testid={`modal-${id}`}
      onClick={(event: React.MouseEvent) => event.stopPropagation()}
    >
      <img className="modal-image" src={largeImageURL} alt="Modal photo" />
      <div className="modal-info">
        <div className="modal-user-info">
          <img className="modal-user-icon" src={userImageURL} alt="User icon" />
          <p className="modal-user-name">{user}</p>
        </div>
        <div className="modal-image-info">
          <div className="modal-image-tags">
            <span>
              <b>tags: </b>
            </span>
            {tags}
          </div>
          <div className="modal-image-counts">
            <CountItem label="views" icon={viewIcon} value={views} />
            <CountItem label="comments" icon={commentIcon} value={comments} />
            <CountItem label="likes" icon={likeIcon} value={likes} />
            <CountItem label="downloads" icon={downloadIcon} value={downloads} />
          </div>
        </div>
      </div>
      <button
        className="modal-close"
        onClick={onCloseModal}
        style={{ backgroundImage: `url(${closeIcon})` }}
        data-testid="modal-close"
      />
    </div>
  );
};
