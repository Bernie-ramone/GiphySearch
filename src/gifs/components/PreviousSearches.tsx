import type { FC } from "react";

interface Props {
  terms: string[];
  onLabelClick: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ terms, onLabelClick }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {terms.map((term) => (
          <li key={term} onClick={() => onLabelClick(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
