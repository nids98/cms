import {combineReducers} from 'redux';
import ListingDuck from "./listingDuck";
import fixedTemplateDuck from "./fixedTemplateDuck";

export default combineReducers({
    ListingDuck,
    fixedTemplateDuck
})