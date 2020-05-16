import React, { useEffect } from 'react';
import { Card } from './components/layout/card';
import { Container, Content } from './components/layout/globals';
import axios from 'axios';
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
    <Container>
      <Content>
        {state.contents.map((content) => (
          <Card key={content.id} {...content} />
        ))}
      </Content>
    </Container>
  );
}

export default App;
