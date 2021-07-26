import { useGetCharacterByIdQuery } from "./characterAPI";

export const Character = ({
  id,
  pollingInterval,
}: {
  id: string;
  pollingInterval: number;
}) => {
  const { data, error, isLoading, isFetching } = useGetCharacterByIdQuery(id, {
    pollingInterval,
  });

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.id} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.id} />
        </>
      ) : null}
    </>
  );
};
