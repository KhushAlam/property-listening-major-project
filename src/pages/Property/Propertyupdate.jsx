import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Formvalidator from '../../Validator/Fromvalidator'
import { Getproperty, Updateproperty } from "../../Redux/Actioncreator/Propertyactioncreator"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Propertyupdate() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let propertyStatedata = useSelector(state => state.propertyStatedata)

    let { id } = useParams()
    let [data, setdata] = useState({
        state: "",
        city: "",
        active: ""
    })
    let [errormassege, seterrormassege] = useState({
        state: "",
        city: "",
        active: ""
    })
    let [show, setshow] = useState(false)

    function getinputdata(e) {
        let { name, value } = e.target;

        seterrormassege((old) => {
            return {
                ...old,
                [name]: Formvalidator(e)
            }
        })

        setdata((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }

    async function postinputdata(e) {
        e.preventDefault()
        let error = Object.values(errormassege).find(x => x !== "")
        if (error) {
            setshow(true)
        }
        else {
            let item = propertyStatedata.find(x => x.id !== id && x.state.toLowerCase() === data.state.toLowerCase())
            if (item) {
                setshow(true)
                seterrormassege((old) => {
                    return {
                        ...old,
                        'name': 'Same Name in brand is Already exits!'
                    }
                })
                return
            }
            dispatch(Updateproperty(data));
            navigate("/admin/property");
        }
    }

    useEffect(() => {
        dispatch(Getproperty())
        if (propertyStatedata.length) {
            setdata(propertyStatedata.find(x => x.id === id))
        }
    }, [])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className="text-center p-2 bg-primary w-100 text-light">
                            Property Update
                            <Link to="/admin/property">
                                <i className="fa fa-long-arrow-left text-light float-end"></i>
                            </Link>
                        </h5>
                        <form onSubmit={postinputdata}>
                            <div className="mb-3">
                                <label>State*</label>
                                <input type="text" name="state" value={data.state} onChange={getinputdata} placeholder="please enter your name" className={`form-control border-3 border-primary ${show && errormassege.state ? "border-danger" : "border-primary"}`} />
                                {show && errormassege.state ? <p className=" text-danger">{errormassege.state}</p> : null}
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">

                                    <label>City</label>
                                    <input type="text" name="city" onChange={getinputdata} placeholder='Enter city name'value={data.city} className={`form-control border-3 border-primary ${show && errormassege.city ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormassege.city ? (<p className=" text-danger">{errormassege.city}</p>) : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Active</label>
                                    <select name="active" value={data.active ? "1" : '0'} onChange={getinputdata} className="form-select border-primary border-3">
                                        <option value="">Select</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary text-light text-center w-100">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
