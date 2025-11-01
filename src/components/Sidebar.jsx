import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
       <div className="list-group">
                <Link to="/admin" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Home <i className='fa fa-home fs-4 float-end'></i></Link>
                <Link to="/admin/maincategory" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Maincategory <i className='fa fa-university fs-5 float-end'></i></Link>
                <Link to="/admin/subcategory" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Subcategory <i className='fa fa-file-text fs-5 float-end'></i></Link>
                <Link to="/admin/property" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Property <i className='fa fa-credit-card fs-5 float-end'></i></Link>
                <Link to="/admin/testimonial" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Testimonials<i className='fa fa-comments fs-5 float-end'></i></Link>
                <Link to="/admin/users" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Users<i className='fa fa-user fs-5 float-end'></i></Link>
                <Link to="/admin/contactus" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Contact Us<i className='fa fa-phone fs-5 float-end'></i></Link>
                {/* <Link to="/admin/newslatter" className="list-group-item  bg-dark text-light p-3 mb-1 w-100">Newslatters<i className='fa fa-envelope-open fs-5 float-end'></i></Link> */}
            </div>
    </>
  )
}
