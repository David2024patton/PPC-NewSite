import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';

function Page() {
  const pageContext = usePageContext();
  const { is404, errorInfo } = pageContext;

  let message;
  if (is404) {
    message = 'This page does not exist.';
  } else {
    message = 'Something went wrong. We are already notified and working on a fix.';
    // In development, show the error details
    if (import.meta.env.DEV && errorInfo) {
      console.error(errorInfo);
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{is404 ? '404 Not Found' : '500 Internal Error'}</h1>
      <p>{message}</p>
      {import.meta.env.DEV && errorInfo && (
        <pre style={{ textAlign: 'left', background: '#eee', padding: '20px', whiteSpace: 'pre-wrap' }}>
          {errorInfo}
        </pre>
      )}
    </div>
  );
}

export { Page };
