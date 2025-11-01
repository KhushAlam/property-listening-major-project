import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar"
import $ from 'jquery'
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Getmaincategory, Deletemaincategory } from "../../Redux/Actioncreator/Maincategoryactioncreator"

export default function Maincategory() {
  let dispach = useDispatch()
  let maincategoryStatedata = useSelector(state => state.maincategoryStatedata)

  async function deleteitem(id) {
    if (window.confirm("Are you sure to delete item")) {
      let item = maincategoryStatedata?.find(x => x.id === id);
      dispach(Deletemaincategory(item))
      getapidata();
    }
  }
  function getapidata() {
    dispach(Getmaincategory())
    if (maincategoryStatedata.length) {
      let time = setTimeout(() => {
        $('#myTable').DataTable()
      }, 300)
      return time
    }

  }
  useEffect(() => {
    let time = getapidata()
    return () => clearTimeout(time)
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
              Maincategory
              <Link to="/admin/maincategory/create">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table id="myTable" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    maincategoryStatedata?.map((item, index) => {
                      return (
                        <tr key={item.id || index}>
                          <td>{item.id}</td>
                          <td>{item.state}</td>
                          <td>{item.city}</td>
                          <td>{item.active === true ? "Yes" : "No"}</td>
                          <td>
                            <button className="btn btn-primary">
                              <Link to={`/admin/maincategory/update/${item.id}`}><i className="fa fa-edit text-light"></i></Link>
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" onClick={() => deleteitem(item.id)}>
                              <i className="fa fa-trash text-light"></i>
                            </button>
                          </td>
                        </tr>
                      );
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