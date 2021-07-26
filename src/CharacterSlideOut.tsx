import React from "react";

import {
  Alert,
  ProgressBar,
  Offcanvas,
  Badge,
  OffcanvasProps,
  Image,
  Button,
} from "react-bootstrap";
import api, { getId } from "./app/api";
import {
  character as slice,
  location as locationSlice,
} from "./app/selections.slice";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { CharacterStatus } from "./app/types";
import Datum from "./Datum";

export default function CharacterSlideOut(props: OffcanvasProps) {
  const dispatch = useAppDispatch();
  const characterId = useAppSelector((s) => s[slice.name]);
  const [
    trigger,
    { data: character, isLoading, isFetching, isError },
    lastPromiseInfo,
  ] = api.useLazyGetCharacterQuery();
  if (characterId > 0 && characterId !== lastPromiseInfo.lastArg) {
    trigger(characterId);
  }
  const selectLocation = () => {
    dispatch(slice.actions.set(0));
    dispatch(locationSlice.actions.set(getId(character?.location.url)));
  };

  return (
    <Offcanvas
      show={characterId > 0}
      onHide={() => dispatch(slice.actions.set(0))}
      {...props}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{character?.name || "Loading..."} </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {(isLoading || isFetching) && <ProgressBar animated now={45} />}
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
        {character && (
          <>
            <div className="text-center">
              <Image src={character.image} thumbnail fluid />
            </div>
            <Datum label="Status">
              <Badge
                bg={
                  character.status === CharacterStatus.Alive
                    ? "success"
                    : character.status === CharacterStatus.Dead
                    ? "danger"
                    : "primary"
                }
              >
                {character.status}
              </Badge>
            </Datum>
            <Datum label="Type">{character.type || "-"}</Datum>
            <Datum label="Species">{character.species || "-"}</Datum>
            <Datum label="Gender">{character.gender || "-"}</Datum>
            <Datum label="Location">
              {character.location?.url ? (
                <Button variant="link" onClick={() => selectLocation()}>
                  {character.location?.name || "-"}
                </Button>
              ) : (
                character.location?.name || "-"
              )}
            </Datum>
            <Datum label="Episode(s)">{character.episode.length || "-"}</Datum>

            {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
