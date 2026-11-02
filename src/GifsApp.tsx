import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      <CustomHeader
        title="el busca GdfIFOS"
        description="Aqui busca tus gifs cotorros"
      />

      <SearchBar placeholder="la chida" onQuery={handleSearch} />

      <PreviousSearches
        terms={previousTerms}
        onLabelClick={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
