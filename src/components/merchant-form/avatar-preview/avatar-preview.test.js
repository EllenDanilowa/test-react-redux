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

  it('updates preview if file exists', async () => {
    const setState = jest.fn();
    const files = {
      0: new Blob([''], {type: 'image/png'}),
      length: 1
    };
    const convertedImage = 'data:image/png;base64,';
    jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);

    await renderer.act(async () => {
      element = createElement({files, alt});
    });

    expect(setState).toHaveBeenCalledWith(convertedImage);
  });
});
