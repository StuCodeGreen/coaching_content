import React, { useEffect } from 'react';
import { Card } from './components/layout/card';
import { Container, Content } from './components/layout/globals';
import axios from 'axios';
import { useSetState } from './hooks/use-set-state';
import { CardPagination } from './components/layout/pagination';

function App() {
  const [state, setState] = useSetState({
    data: [],
    contents: [],
    paginated: [],
    currentPage: 1,
    contentPerPage: 6,
    totalPages: 4,
  });

  const pagination = (content, currentPage) => {
    const indexOfLastCard = currentPage * state.contentPerPage;
    const indexOfFirstCard = indexOfLastCard - state.contentPerPage;
    const currentContent = content.slice(indexOfFirstCard, indexOfLastCard);
    setState({
      paginated: currentContent,
    });
  };

  const pageIndication = (event) => {
    let span = document.querySelectorAll('.pages');
    let element = document.getElementById(event);
    for (var i = 0; i < span.length; i++) {
      span[i].classList.remove('active');
    }
    element.classList.add('active');
  };

  const selectedPage = ({ target }) => {
    pageIndication(target.id);
    setState({
      currentPage: Number(target.id),
    });
    pagination(state.contents, Number(target.id));
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
      <CardPagination
        currentPage={state.currentPage}
        totalPages={state.totalPages}
        selectedPage={selectedPage}
      />
    </Container>
  );
}

export default App;
