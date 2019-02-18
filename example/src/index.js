import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-external-script-loader';

class App extends React.Component {
  state = {
    load: false,
  };

  render() {
    const { load } = this.state;

    return (
      <div className="App">
        <h1>React External Script Loader Example</h1>
        <button onClick={() => this.setState({ load: true })}>
          Load external script
        </button>
        <Loader
          url="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
          global="jQuery"
        />

        {load && (
          <>
            <div id="vk_playlist_-2000646569_646569" />
            <Loader
              url="https://vk.com/js/api/openapi.js?160"
              global="VK"
              onLoad={VK =>
                VK.Widgets.Playlist(
                  'vk_playlist_-2000646569_646569',
                  -2000646569,
                  646569,
                  'ae82627d6c8bb4500d',
                )
              }
            />
          </>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
