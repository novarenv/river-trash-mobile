import LocalizedStrings from 'react-native-localization';
import {id} from './indonesian';
import {en} from './english';

export const LANGUAGES = ['id', 'en'];

export const Strings = new LocalizedStrings({
   id,
   en,
});