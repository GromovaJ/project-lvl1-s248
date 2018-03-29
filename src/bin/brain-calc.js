#!/usr/bin/env node
import getData from '../games/calcGame';
import getGame from '..';

getGame('What is the result of the expression?', 3, getData);
