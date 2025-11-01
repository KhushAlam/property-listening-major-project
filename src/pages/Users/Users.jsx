import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import $ from 'jquery'
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { Getusers, Deleteusers } from '../../Redux/Actioncreator/Usersactioncreator';
import { useDispatch, useSelector } from "react-redux";

export default function Adminusers() {
  let dispach = useDispatch()
  let userStatedata = useSelector(state => state.userStatedata)

  async function deleteitem(id) {
      if (window.confirm("Are you sure to delete item")) {
        let item = userStatedata?.find(x => x.id === id);
        dispach(Deleteusers(item))
        getapidata();
      }
    }
  function getapidata() {
    dispach(Getusers())

    if (userStatedata.length) {
      let time = setTimeout(() => {
        $('#myTable').DataTable()
      }, 300)
      return time
    }

  }
  useEffect(() => {
    let time = getapidata()
    return () => clearTimeout(time)
  }, [userStatedata])
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="text-center p-2 bg-primary w-100 text-light">
              User
              <Link to="/admin/users/create">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table id="myTable" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userStatedata?.map((item) => {
                      return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td>{item.active ? "Yes" : "No"}</td>
                        <td> {item.role !== "Buyer" ? <Link to={`/admin/users/update/${item.id}`}><button className="btn btn-primary"><i className="fa fa-edit "></i></button></Link> : null}</td>
                        <td><button className="btn btn-danger" onClick={() => { deleteitem(item.id) }}><i className="fa fa-trash "></i></button></td>
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