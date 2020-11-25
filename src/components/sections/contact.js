/*eslint  jsx-a11y/control-has-associated-label: "off"*/
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

import '../../styles/sections/contact.scss'

const Contact = () => {
	return (
		<div className="contact-section">
			<div className="contact-cont">
				<h1>Feel free to reach out.</h1>
				<p>Direct Email</p>
				<a href="mailto:capriodev@gmail.com" target="_blank" rel="noreferrer">
					<button><HiOutlineMail /></button>
				</a>
			</div>
		</div>
	)
}

export default Contact
