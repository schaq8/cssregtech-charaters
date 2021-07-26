import React from "react";

import { Alert, ProgressBar, Offcanvas, OffcanvasProps } from "react-bootstrap";
import api from "./app/api";
import { location as slice } from "./app/selections.slice";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Datum from "./Datum";

export default function LocationSlideOut(props: OffcanvasProps) {
  const dispatch = useAppDispatch();
  const locationId = useAppSelector((s) => s[slice.name]);
  const [
    trigger,
    { data: location, isLoading, isFetching, isError },
    lastPromiseInfo,
  ] = api.useLazyGetLocationQuery();
  if (locationId > 0 && locationId !== lastPromiseInfo.lastArg) {
    trigger(locationId);
  }
  return (
    <Offcanvas
      show={locationId > 0}
      onHide={() => dispatch(slice.actions.set(0))}
      {...props}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{location?.name || "Loading..."}</Offcanvas.Title>
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
        {location && (
          <>
            <Datum label="Type">{location.type || "-"}</Datum>
            <Datum label="Dimension">{location.dimension || "-"}</Datum>
            <Datum label="Residents">{location.residents?.length || "-"}</Datum>

            {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
