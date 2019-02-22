# react-external-script-loader

Library for loading external scripts

## Install

```shell
npm install react-external-script-loader
yarn add react-external-script-loader
```

## Usage

```js
import Loader from 'react-external-script-loader';

...

<Loader url="https://vk.com/js/api/openapi.js?160" global="VK" />

```

## Component

### Options

| Property              | Type   | Description                             |
| -------------         |:-----: | :-----                                  |
| **url**(required)     | string | Url of external script                  |
| **global**(required)  | string | name of object if it loads successfully |
| **options**           | object | Script options - possible keys: {type, charset, async, defer}. You can ckeck it [here](https://www.w3schools.com/tags/tag_script.asp)  |
| **onLoad**            | function | Called when script loaded ```(global: object): void```                |
| **onError**           | function | Called when script loading was failed ```void```                |

## Basic example

```js
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
```

You can clone this repository and check example

```shell
git clone https://github.com/mmarkelov/react-external-script-loader.git
cd ./react-external-script-loader/example
yarn && yarn run dev
```

## TODO

- [ ] Add tests
- [ ] Write clearer description
- [ ] Write more examples
