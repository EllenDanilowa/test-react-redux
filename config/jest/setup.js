'use strict';
/* enzyme - react 16 hooks support */

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const FetchMock = require('jest-fetch-mock');

enzyme.configure({ adapter: new Adapter() });

FetchMock.enableMocks();
