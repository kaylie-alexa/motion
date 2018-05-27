import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export const CodeSnippet = ({code}) => (
    <div className="example__code-snippet">
        <SyntaxHighlighter language='javascript' style={docco}>{code}</SyntaxHighlighter>
    </div>
)
