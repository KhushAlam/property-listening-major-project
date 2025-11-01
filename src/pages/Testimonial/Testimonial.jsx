import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import $ from 'jquery'
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { Gettestimonial ,Deletetestimonial} from '../../Redux/Actioncreator/Testimonialactioncreator';
import { useDispatch, useSelector } from "react-redux";

export default function AdminTestimonial() {
  let dispach = useDispatch()
  let testimonialStatedata = useSelector(state => state.testimonialStatedata)
  let [data, setdata] = useState([])

  async function deleteitem(id) {
      if (window.confirm("Are you sure to delete item")) {
        let item = testimonialStatedata?.find(x => x.id === id);
        dispach(Deletetestimonial(item))
        getapidata();
      }
    }
  function getapidata() {
    dispach(Gettestimonial())

    if (testimonialStatedata.length) {
      setdata(testimonialStatedata);
      let time = setTimeout(() => {
        $('#myTable').DataTable()
      }, 300)
      return time
    } else {
      setdata([])
    }
  }
  useEffect(() => {
    (() => {
      let time = getapidata()
      return () => clearTimeout(time)
    })()
  }, [testimonialStatedata])

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="text-center p-2 bg-primary w-100 text-light">
              Testimonial
              <Link to="/admin/testimonial/create">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table id="myTable" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data?.map((item) => {
                      return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><Link to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} target="_blank">
                          <img src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} height={80} width={60} /></Link></td>
                        <td><div className="testimonial-message">{item.message}</div></td>
                        <td> <Link to={`/admin/testimonial/update/${item.id}`}><button className="btn btn-primary"><i className="fa fa-edit "></i></button></Link></td>
                        <td ><button className="btn btn-danger" onClick={() => { deleteitem(item.id) }}><i className="fa fa-trash "></i></button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}