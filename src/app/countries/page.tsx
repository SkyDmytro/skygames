import { CountryPageHeader } from '@/features/countriesGame/components/CountryPageHeader/CountryPageHeader';
import { GuessedLettersComponent } from '@/features/countriesGame/components/GuessedLettersComponent/GuessedLettersComponent';
import { LettersBlock } from '@/features/countriesGame/components/LettersComponent/LettersBlock';

const CountriesGame = () => {
  return (
    <section className="flex flex-col items-center justify-between w-screen h-screen">
      <CountryPageHeader />
      <GuessedLettersComponent />
      <LettersBlock />
    </section>
  );
};

export default CountriesGame;
