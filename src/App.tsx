import { FunctionComponent } from 'react';

interface AppProps {
  message: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default App;
