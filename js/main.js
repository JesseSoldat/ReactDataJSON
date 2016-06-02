import React from 'react';
import ReactDom from 'react-dom';

import $ from 'jquery';
import _ from 'underscore';

import {Data} from './data';

console.log(Data);

$('#user').text('Goodbye ' + Data[0].firstName);

// document.getElementById('user').innerHTML = 'Goodbye ' + Data[0].firstName;



