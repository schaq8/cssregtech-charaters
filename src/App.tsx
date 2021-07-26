import React, { useState } from "react";
import { Container, Alert, Navbar, Nav, ProgressBar } from "react-bootstrap";
import api, { getPageNumber } from "./app/api";
import { PaginationInfo } from "./app/types";
import CharacterCards from "./CharacterCards";
import CharacterSlideOut from "./CharacterSlideOut";
import LocationSlideOut from "./LocationSlideOut";

const getPaginationHandlers = (info?: PaginationInfo) => ({
  canGoPrevPage: !!info?.prev,
  canGoNextPage: !!info?.next,
  prev: getPageNumber(info?.prev),
  next: getPageNumber(info?.next),
});

export default function App() {
  const [page, setPage] = useState<number>(1);
  const {
    data: { info, results: characters } = {},
    isLoading,
    isFetching,
    isError,
  } = api.useGetCharactersQuery(page);
  const paginationHandlers = getPaginationHandlers(info);

  window.scrollTo(0, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="https://cssregtech.com">
            cssregtech.com
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Text className="d-none-lg">
              Page {page} of {info?.pages}
            </Navbar.Text>
            {/* <Nav.Link href="#home">Characters</Nav.Link>
            <Nav.Link href="#features">Episodes</Nav.Link>
            <Nav.Link href="#pricing">Locations</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link
              disabled={!paginationHandlers.canGoPrevPage}
              onClick={() => setPage(paginationHandlers.prev)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </Nav.Link>
            <Nav.Link
              disabled={!paginationHandlers.canGoNextPage}
              onClick={() => setPage(paginationHandlers.next)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Container className="p-3">
        {isError && (
          <Alert
            variant="danger"
            onClose={() => window.location.reload()}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Let's refresh the page and try again</p>
          </Alert>
        )}
        {(isLoading || isFetching) && (
          <ProgressBar animated now={45} className="mb-3" />
        )}
        <CharacterCards characters={characters} />
        {(isLoading || isFetching) && (
          <ProgressBar animated now={45} className="mt-3" />
        )}
      </Container>
      <CharacterSlideOut placement="start" />
      <LocationSlideOut placement="end" />
    </>
  );
}
