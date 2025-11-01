import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import Fromvalidator from "../../Validator/Fromvalidator";
import { Createproperty,Getproperty } from "../../Redux/Actioncreator/Propertyactioncreator"

export default function Propertycreate() {

  let dispatch = useDispatch()
  let navigate = useNavigate();
  let propertyStatedata = useSelector(state => state.propertyStatedata);
  let [data, setdata] = useState({
    state: "",
    city: "",
    active: "",
  })
  let [errormassege, seterrormassege] = useState({
    state: "Field is Mendatory",
    city: "Field is Mendatory",
    active: "Field is Mendatory",
  })
  let [show, setshow] = useState(false)
  function getinputdata(e) {
    let { name, value } = e.target;

    seterrormassege((old) => {
      return {
        ...old,
        [name]: Fromvalidator(e)
      }
    })

    setdata((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value
      }
    })
  }
  function postinputdata(e) {
    e.preventDefault()
    let error = Object.values(errormassege).find(x => x !== "");
    if (error) {
      setshow(true)
    } else {
      let item = propertyStatedata.find(x => x.state === data.state || x.city === data.city);
      if (item) {
        setshow(true);
        seterrormassege((old) => {
          return {
            ...old,
            "state": "Same name of State/city Already exist",
          }
        })
        return
      } else {
        dispatch(Createproperty(data))
        navigate("/admin/property");
      }
    }
  }
  useEffect(()=>{
    dispatch(Getproperty())
  },[propertyStatedata])

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="text-center p-2 bg-primary w-100 text-light">
              Property Create
              <Link to="/admin/property">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <form onSubmit={postinputdata}>
              <div className="mb-3">
                <label>State*</label>
                <input type="text" name="state" onChange={getinputdata} placeholder="please enter your name" className={`form-control border-3 border-primary ${show && errormassege.state ? "border-danger" : "border-primary"}`} />
                {show && errormassege.state ? <p className="text-danger">{errormassege.state}</p> : null}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">

                  <label>City*</label>
                  <input type="text" name="city" onChange={getinputdata} placeholder='Enter city Name' className={`form-control border-3 border-primary ${show && errormassege.city ? 'border-danger' : 'border-primary'}`} />
                  {show && errormassege.city ? (<p className="text-danger">{errormassege.city}</p>) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select name="active" onChange={getinputdata} className="form-select border-primary border-3">
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary text-light text-center w-100">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
