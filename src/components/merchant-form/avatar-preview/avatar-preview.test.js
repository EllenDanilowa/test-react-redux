import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AvatarPreview from './avatar-preview';

describe('AvatarPreview', () => {
  let alt;
  let element;

  const createElement = ({files = {}, ...props}, isSnapshot = true) => {
    const template = (<AvatarPreview files={files} {...props} />);

    return isSnapshot ?
      renderer.create(template).toJSON() :
      shallow(template);
  };

  beforeEach(() => {
    alt = 'preview alt title';
  });

  it('renders preview when default url is defined', () => {
    const defaultImageUrl = 'url/to/image';

    element = createElement({defaultImageUrl, alt});

    expect(element).toMatchSnapshot();
  });

  xit('renders preview when image file is defined', () => {

    const files = {
      0: new Blob([''], {type: 'image/png'}),
      length: 1
    };

    element = createElement({files, alt});
  });
});
