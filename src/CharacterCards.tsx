import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Character } from "./app/types";
import { character as slice } from "./app/selections.slice";
import { useAppDispatch } from "./app/hooks";

export default function CharacterCards({
  characters,
}: Record<"characters", Character[] | undefined>) {
  const dispatch = useAppDispatch();
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-2 g-md-5">
      {characters?.map((character: Character) => (
        <Col>
          <Card
            className=""
            role="button"
            onClick={(e) => dispatch(slice.actions.set(character.id))}
          >
            <Card.Body>
              <Row>
                <Col xs={3} md={12} className="mb-md-4">
                  <Card.Img src={character.image} />
                </Col>
                <Col xs={9} md={12} className="text-md-center">
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    {character.status} - {character.species}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
