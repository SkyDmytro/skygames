import { CountryPageHeader } from '@/features/countriesGame/components/CountryPageHeader/CountryPageHeader';
import { GuessedLettersComponent } from '@/features/countriesGame/components/GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from '@/features/countriesGame/components/LettersComponent/LettersBlock';

const CountriesGame = () => {
  return (
    <section>
      <CountryPageHeader />
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};

export default CountriesGame;
