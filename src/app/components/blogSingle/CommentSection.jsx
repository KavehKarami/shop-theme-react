import React from 'react';

const CommentSection = (props) => {
  return (
    <div className="comments-section">
      <h4 className="my-4 text-center">نظرات (03)</h4>

      {props.children}
    </div>
  );
}

export default CommentSection;