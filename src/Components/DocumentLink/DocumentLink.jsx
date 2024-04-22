import React from 'react';

function DocumentLink({ href, text }) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
  );
}

export default DocumentLink;
