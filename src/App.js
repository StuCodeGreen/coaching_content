import React, { useEffect } from 'react';
import { Header } from './components/layout/header';
import { Card } from './components/layout/card';
import { Container, Content } from './components/layout/globals';
import { H2 } from './components/core/typography';
import axios from 'axios';
import { useSetState } from './hooks/use-set-state';
import { CardPagination } from './components/layout/pagination';

function App() {
  const [state, setState] = useSetState({
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

  function loaded(data) {
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    async function fetchContent() {
      const res = await axios.get('./db.json');
      setState({ contents: res.data.data });
    }
    fetchContent();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    pagination(state.contents, state.currentPage);
    // eslint-disable-next-line
  }, [state.contents, state.currentPage]);
  return loaded(state.paginated) ? (
    <Container>
      <Header />
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
  ) : (
    <H2>Loading...</H2>
  );
}

export default App;
