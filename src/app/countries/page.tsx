import { GuessedLettersComponent } from '@/features/countriesGame/components/GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from '@/features/countriesGame/components/LettersComponent/LettersBlock';

const CountriesGame = () => {
  return (
    <section>
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};

export default CountriesGame;
