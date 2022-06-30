import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert'
export default function Login() {
	const Navigate = useNavigate()
	const [userInfo, setuserInfo] = useState([])
	const formik = useFormik({
		initialValues:{
			mobile:"",
			password:""
		},
		validationSchema:yup.object({
			mobile:yup.string().required("Please Enter Your Email"),
			password:yup.string().required("Please Enter Your Password")
		}),
		onSubmit:async({mobile,password},{resetForm})=>{
			const {data} = await axios.get("http://localhost:5000/user")
			const result = data.find(item => item.mobile == mobile && item.password ==password)
			result ? Navigate("/home"):swal("Please Enter Correct Info")
			resetForm()
		}
	})
  return (
	<div className='container'>
			<div className="row">
			<div className="col-sm-6 offset-sm-3">
				<div className="card my-4">
					<div className="card-header text-center">Login</div>
					<div className="card-body">
						<form onSubmit={formik.handleSubmit}>
							<input 
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.mobile}
							name='mobile'
							type="number" 
							placeholder='Enter Your Email' 
							className={formik.errors.mobile && formik.touched.mobile ?
							 "form-control is-invalid":"form-control"}
							 />
							  {formik.errors.mobile && formik.touched.mobile ? 
							 (<div className='invalid-feedback'>{formik.errors.mobile}</div>):null}
							<br />
							<input 
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							name='password'
							type="password" 
							placeholder='Enter Your Password' 
							className={formik.errors.password && formik.touched.password ?
							 "form-control is-invalid":"form-control"}
							 />
							  {formik.errors.password && formik.touched.password ? 
							 (<div className='invalid-feedback'>{formik.errors.password}</div>):null}
							<br />
							<button type='submit' className="btn btn-success w-100">Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	
	</div>
  )
}
