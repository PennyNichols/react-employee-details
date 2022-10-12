import React from 'react'
import data from '../../helpers/data'

const EmployeeCard = (props) => {
  
    return (
      <div className="col-md-6 col-lg-5 item">
        <div className="box">
          <img className="rounded-circle" src={data.image[props.index]} alt={data.name} />
          <h3 className="name">{data.name[props.index]}</h3>
          <p className="title">{data.email[props.index]}</p>
          <p className="description">{data.age[props.index]} years</p>
          <div className="social">
            <p>
              <i class="fa-brands fa-facebook"></i>
            </p>
            <p>
              <i class="fa-brands fa-twitter"></i>
            </p>
            <p>
              <i class="fa-brands fa-instagram"></i>
            </p>
          </div>
        </div>
      </div>
  )
}

export default EmployeeCard