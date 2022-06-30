import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
export default function Register() {
	const formik = useFormik({
		initialValues:{
			name:"",
			mobile:"",
			password:"",
		},
		validationSchema:yup.object({
			name : yup.string().required("Please Enter Your Name"),
			mobile:yup.string().required("Please Enter Your mobile"),
			password:yup.string().required("Please Enter Your Password")
		}),
		onSubmit:async(values,{resetForm})=>{
			const {data} = await axios.post("http://localhost:5000/user",values)
			localStorage.setItem("userInfo",values)
			resetForm()
		}
	})
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-6 offset-sm-3">
			<div className="card my-4">
					<div className="card-header text-center">Register</div>
					<div className="card-body">
						<form onSubmit={formik.handleSubmit}>
							<input 
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							name='name'
							type="text" 
							placeholder='Enter Your Name' 
							className={formik.errors.name && formik.touched.name ?
							 "form-control is-invalid":"form-control"}
							 />
							 {formik.errors.name && formik.touched.name ? 
							 (<div className='invalid-feedback'>{formik.errors.name}</div>):null}
							<br />
							<input 
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.mobile}
							name='mobile'
							type="number" 
							placeholder='Enter Your mobile' 
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
