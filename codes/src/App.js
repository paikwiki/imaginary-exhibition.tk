import './scss/App.scss';
import { appData } from './appData';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'

function App() {
  return (
    <div className="App">
      <Header headingText={appData.pageTitle}/>
      <div css={tw`md:w-content-md xl:w-content-lg max:w-content-max m-auto mb-4 flex flex-grow flex-wrap flex-col md:flex-row justify-items-center`}>
        {appData.cards.map(item =>
          <Card
            key={item.id}
            image={process.env.PUBLIC_URL + item.imageUrl}
            title={item.title}
            description={item.description}
            buttons={item.buttons}
            siteUrls={item.siteUrls}
          />
        )}
      </div>
      <Footer footerText={appData.footerText}/>
    </div>
  );
}

export default App;
