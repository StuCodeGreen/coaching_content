import React, { useReducer, useEffect } from 'react';
import ContentCard from './components/ContentCard';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useReducer((prev, next) => ({ ...prev, ...next }), {
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
        <ContentCard key={content.id} {...content} />
      ))}
    </div>
  );
}

export default App;
