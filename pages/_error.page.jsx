import React from 'react';

// A simple error page component that does not rely on Vike-specific hooks.
function Page() {
  // Since we cannot use usePageContext, we display a generic message.
  // The actual error details will be logged to the server console.
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}

export { Page };
