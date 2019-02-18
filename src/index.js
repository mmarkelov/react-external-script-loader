import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  componentDidMount() {
    if (
      typeof window !== 'undefined'
      && window.document
      && window.document.createElement
    ) {
      this.loadScript();
    }
  }

  loadScript() {
    const {
      url,
      global,
      options: {
        type, charset, async, defer,
      },
      onLoad,
      onError,
    } = this.props;

    // Create script element and set attributes
    const script = document.createElement('script');
    script.type = type;
    script.async = async;
    script.defer = defer;
    script.charset = charset;
    script.src = url;

    // Append the script to the DOM
    document.head.appendChild(script);

    script.addEventListener('load', () => {
      if (window[global]) {
        onLoad(window[global]);
      }
    });

    script.addEventListener('error', () => {
      onError();
      throw new Error(`${url} failed to load.`);
    });
  }

  render() {
    return null;
  }
}

Loader.propTypes = {
  url: PropTypes.string.isRequired,
  global: PropTypes.string.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string,
    charset: PropTypes.string,
    async: PropTypes.bool,
    defer: PropTypes.bool,
  }),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

Loader.defaultProps = {
  options: {
    type: 'text/javascript',
    async: true,
    charset: 'UTF-8',
  },
  onLoad: () => {},
  onError: () => {},
};

export default Loader;
