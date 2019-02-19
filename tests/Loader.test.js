/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../src';

describe('Loader', () => {
  test('should throw error when url prop is not provided', () => {
    try {
      shallow(<Loader global="$" />);
    } catch (e) {
      expect(e.message).toEqual('url parameter is required');
    }
  });

  test('should throw error when global prop is not provided', () => {
    try {
      shallow(<Loader url="tes.com/test.js" />);
    } catch (e) {
      expect(e.message).toEqual('global parameter is required');
    }
  });
});
