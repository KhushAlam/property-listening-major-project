import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import Fromvalidator from "../../Validator/Fromvalidator";
import { Createsubcategory, Getsubcategory } from "../../Redux/Actioncreator/Subcategoryactioncreator"
import { Getmaincategory } from "../../Redux/Actioncreator/Maincategoryactioncreator"

export default function Subcategorycreate() {

  let dispatch = useDispatch()
  let navigate = useNavigate();
  let subcategoryStatedata = useSelector(state => state.subcategoryStatedata);
  let maincategoryStatedata = useSelector(state => state.maincategoryStatedata)
  let [data, setdata] = useState({
    state: "",
    city: "",
    property:"",
    active: "",
  })
  let [errormassege, seterrormassege] = useState({
    state: "Field is Mendatory",
    city: "Field is Mendatory",
    property:"Feild is Mendatory",
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
      let item = subcategoryStatedata.find(x => x.state === data.state || x.city === data.city);
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
        dispatch(Createsubcategory(data))
        navigate("/admin/subcategory");
      }
    }
  }

  useEffect(() => {
    dispatch(Getsubcategory())
  }, [subcategoryStatedata]);

  useEffect(() => {
    dispatch(Getmaincategory())
  }, [maincategoryStatedata])
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="text-center p-2 bg-primary w-100 text-light">
              Subcategory
              <Link to="/admin/subcategory">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <form onSubmit={postinputdata}>
              <div className="row">
                <div className="col-md-6">
                <label>State*</label>
                <select name="state" onChange={getinputdata} className="form-select border-primary border-3">
                  <option value="">Select</option>
                  {maincategoryStatedata.filter(x => x.active === true).map((item,index) => {
                    return <option value={item.state} key={index}>{item.state}</option>
                  })}
                </select>
                {show && errormassege.state ? <p className="text-danger">{errormassege.state}</p> : null}
              </div>
              <div className="col-md-6 mb-3">

                  <label>City*</label>
                  <select name="city" onChange={getinputdata} className="form-select border-primary border-3">
                  <option value="">Select</option>
                  {maincategoryStatedata.filter(x => x.active === true).map((item,index) => {
                    return <option value={item.city} key={index}>{item.city}</option>
                  })}
                </select>
                  {show && errormassege.city ? (<p className="text-danger">{errormassege.city}</p>) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">

                  <label>Property Type*</label>
                  <select name="property" onChange={getinputdata} className="form-select border-primary border-3">
                  <option value="">Select</option>
                  <option value="land">Land</option>
                  <option value="flat">Flat</option>
                  <option value="room">Room</option>
                </select>
                  {show && errormassege.property ? (<p className="text-danger">{errormassege.property}</p>) : null}
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
