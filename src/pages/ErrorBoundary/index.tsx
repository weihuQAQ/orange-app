import { type FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary: FC = () => {
  const error = useRouteError() as Error;

  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error?.message}</pre>
      <button onClick={() => (window.location.href = '/')}>Click here to reload the app</button>
    </div>
  );
};

export default ErrorBoundary;
