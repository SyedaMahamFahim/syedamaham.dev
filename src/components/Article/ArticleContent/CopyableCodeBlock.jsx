'use client'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CopyableCodeBlock = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = children?.code;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };



  const codeHighlightCache = new Map();

  const retrieveCodeFromHighlightCache = (language, content) => {
    const cachedItem = codeHighlightCache.get(content);
    if (cachedItem === undefined) {
      const highlighterProps = {
        language,
        children: content,
        style: coldarkDark,
        wrapLines: true,
        customStyle: {
          borderRadius: "10px"
        }
      }
      SyntaxHighlighter(highlighterProps);
      const cachedVar = SyntaxHighlighter(highlighterProps);
      codeHighlightCache.set(content, cachedVar);
      return cachedVar;
    };

    return cachedItem;
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 p-2">
        <button
          onClick={handleCopyClick}
          className="bg-blue-900 text-white p-1 rounded-lg text-sm"
        >

          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {retrieveCodeFromHighlightCache(children?.language, children?.code)}



    </div>
  );
};

export default CopyableCodeBlock;
