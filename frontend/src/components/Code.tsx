import { ClipboardIcon, DocumentDuplicateIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  children: string;
  language: string;
} 

const Code = ({ children, language }: CodeProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="code">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <ClipboardIcon className="size-6" /> : <DocumentDuplicateIcon className='size-6'/>}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={dracula}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code