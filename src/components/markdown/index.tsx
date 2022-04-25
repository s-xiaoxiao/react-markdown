import { useState, useEffect } from 'react';
import markdownIt from 'markdown-it';
import { sampleText } from './config';

import './index.css';

const md = new markdownIt();

function MarkdownEdit() {
  const [value, setValue] = useState(sampleText);
  const [htmlString, setHtmlString] = useState('');

  const parse = (text: string) => setHtmlString(md.render(text));

  useEffect(() => {
    parse(value);
  }, [value]);

  return (
    <div className='markdown-wrapper'>
      {/* 编辑 区域 */}
      <textarea
        className='edit-wrapper'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      {/* 渲染 区域 */}
      <div
        className='render-wrapper'
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    </div>
  );
}

export default MarkdownEdit;
