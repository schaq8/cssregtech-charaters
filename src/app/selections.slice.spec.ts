import { character } from "./selections.slice";

describe("character reducer", () => {
  const initialState = 0;
  it("should handle initial state", () => {
    expect(character.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle selecting a character by id", () => {
    const actual = character.reducer(initialState, character.actions.set(13));
    expect(actual).toEqual(13);
  });

  it("should handle clearing character seletion", () => {
    const actual = character.reducer(initialState, character.actions.set(0));
    expect(actual).toEqual(0);
  });
});
