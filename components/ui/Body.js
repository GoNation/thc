import React from 'react';
import draftJS from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const Body = ({ body }) => {
  if (body.includes('{"blocks":')) {
    const parsedBody = JSON.parse(body);

    const contentState = draftJS.convertFromRaw(parsedBody); // convert into contentState

    const editorState = draftJS.EditorState.createWithContent(contentState); // convert into Editorstate from contentState

    const rawContentState = draftJS.convertToRaw(
      editorState.getCurrentContent()
    ); // convert into rawContentState from editorState

    const plainText = rawContentState.blocks
      .map(block => (!block.text.trim() && '\n') || block.text)
      .join('\n'); // create plain text with no html tags from blocks

    const htmlMarkUp = draftToHtml(rawContentState, {
      trigger: '#',
      separator: ' ',
    }); // creates the html
    return <div dangerouslySetInnerHTML={{ __html: htmlMarkUp }}></div>;
  } else {
    return <div dangerouslySetInnerHTML={{ __html: body }}></div>;
  }
};

export default Body;
