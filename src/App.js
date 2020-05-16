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

  const pagination = (content, currentPage) => {
    const indexOfLastCard = currentPage * state.contentPerPage;
    const indexOfFirstCard = indexOfLastCard - state.contentPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard);
    setState({
      paginated: currentContent,
    });
  };

  useEffect(() => {
    async function fetchContent() {
      const res = await axios.get('./db.json');
      setState({ data: res.data.data });
      setState({ contents: res.data.data });
    }
    fetchContent();
  }, []);

  useEffect(() => {
    pagination(state.contents, state.currentPage);
  }, [state.contents, state.currentPage]);
  return (
    <Container>
      <Content>
        {state.paginated.map((content) => (
          <Card key={content.id} {...content} />
        ))}
      </Content>
    </Container>
  );
}

export default App;
