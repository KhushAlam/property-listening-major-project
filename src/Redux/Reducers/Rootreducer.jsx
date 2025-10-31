import {combineReducers} from "redux";
import Maincategoryreducer from "./Maincategoryreducer";
import Subcategoryreducer from "./Subcategoryreducer";
import Contectreducer from "./Contectreducer";
import Checkoutreducer from "./Checkoutreducer"
import Propertyreducer from "./Propertyreducer"
import Testimonialreducer from "./Testimonialreducer";
import Usersreducer from "./Usersreducer";

export default combineReducers({
    maincategoryStatedata:Maincategoryreducer,
    subcategoryStatedata : Subcategoryreducer,
    contectStatedata:Contectreducer,
    checkoutStatedata:Checkoutreducer,
    propertyStatedata:Propertyreducer,
    testimonialStatedata:Testimonialreducer,
    userStatedata:Usersreducer
})