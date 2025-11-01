import { all } from "redux-saga/effects";
import Checkousagas from "./CheckoutSagas"
import ContactSagas from "./ContactSagas"
import MaincategorySagas from "./MaincategorySagas"
import SubcategorySagas from "./SubcategorySagas"
import TestimonialSagas from "./TestimonialSagas"
import UsersSagas from "./UsersSagas"
import PropertySagas from "./PropertySagas";

export default function* Rootsagas() {
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        Checkousagas(),
        ContactSagas(),
        TestimonialSagas(),
        UsersSagas(),
        PropertySagas(),
    ])
}