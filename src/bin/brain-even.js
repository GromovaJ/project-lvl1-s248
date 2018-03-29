#!/usr/bin/env node
import getData from '../games/evenGame';
import getGame from '..';

getGame('Answer "yes" if number even otherwise answer "no".', 3, getData);
