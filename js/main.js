import React from 'react';
import ReactDom from 'react-dom';

import $ from 'jquery';
import Router from './router'

import {Data} from './data';

// console.log(Data);
// let appElement = $('.app');

let appElement = document.querySelector('.app');


// $('#user').text('Goodbye ' + Data[0].firstName);

new Router(appElement).start();

// document.getElementById('user').innerHTML = 'Goodbye ' + Data[0].firstName;



