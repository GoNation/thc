import React, { useEffect, useState } from 'react';
import draftJS from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const Body = ({ body }) => {
  const [finalHtml, setFinalHtml] = useState('');

  useEffect(() => {
    const removeTrailingEmptyPTags = html => {
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const pElements = tempDiv.querySelectorAll('p');
      for (let i = pElements.length - 1; i >= 0; i--) {
        if (pElements[i].textContent.trim() === '') {
          pElements[i].remove();
        } else {
          break;
        }
      }
      setFinalHtml(tempDiv.innerHTML);
    };

    if (body.includes('{"blocks":')) {
      const parsedBody = JSON.parse(body);
      const contentState = draftJS.convertFromRaw(parsedBody);
      const editorState = draftJS.EditorState.createWithContent(contentState);
      const rawContentState = draftJS.convertToRaw(
        editorState.getCurrentContent()
      );
      let htmlMarkUp = draftToHtml(rawContentState, {
        trigger: '#',
        separator: ' ',
      });
      removeTrailingEmptyPTags(htmlMarkUp);
    } else {
      removeTrailingEmptyPTags(body);
    }
  }, [body]);

  return <div dangerouslySetInnerHTML={{ __html: finalHtml }}></div>;
};

export default Body;
