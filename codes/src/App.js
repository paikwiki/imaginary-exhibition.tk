import './scss/App.scss';
import { appData } from './appData';
import Card from './Card';
import Header from './Header';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'



function App() {
  return (
    <div className="App">
      <Header headingText={appData.pageTitle}/>
      <div css={tw`md:w-content-md xl:w-content-lg max:w-content-max m-auto flex flex-grow flex-wrap flex-col md:flex-row justify-items-center`}>
        {appData.cards.map(item =>
          <Card
            image={item.imageUrl}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        )}
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
        <Card title="More Dummy Card" />
      </div>
    </div>
  );
}

export default App;
