import React, { useEffect } from 'react';
import { Card } from './components/layout/card';
import axios from 'axios';
import './App.css';
import { useSetState } from './hooks/use-set-state';

function App() {
  const [state, setState] = useSetState({
    data: [],
    contents: [],
    paginated: [],
    currentPage: 1,
    contentPerPage: 6,
    totalPages: 0,
  });

  useEffect(() => {
    async function fetchContent() {
      const res = await axios.get('./db.json');
      setState({ data: res.data.data });
      setState({ contents: res.data.data });
    }
    fetchContent();
  }, []);

  return (
    <div className="App">
      {state.contents.map((content) => (
        <Card key={content.id} {...content} />
      ))}
    </div>
  );
}

export default App;
