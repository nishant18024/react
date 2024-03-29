import React from 'react';
import Section from '../Section/Section';
import Footer from './Footer';

const Footerwrapper = () => {
	return (
		<Section
			id="footer_section"
			style={{
				// minWidth: '1200px',
				backgroundColor: '#28328c',
				padding: ' 48px 0',
				color: '#fff',
				fontSize: '14px'
			}}
		>
			<div
				id="footer_top"
				style={{
					// width: '1180px',
					maxWidth: "100rem",
					margin: 'auto'
				}}
			>
				<Footer>
					<div className='footerdata'>
						<h3>Healthy India</h3>

						<p>About</p>
						<p>Blog</p>
						<p>Careers</p>
						<p>Press</p>
						<p>Contact Us</p>
					</div>
					<div className='footerdata'>
						<h3>For Patients</h3>

						<p>Search for doctors</p>
						<p>Serch for clinic</p>
						<p>Search for hospitals</p>
						<p>Book diaginistics checks</p>
						<p>Book Full Body checkup</p>
						<p>Healthy India plus</p>
					</div>
					<div className='footerdata'>
						<h3>For Clinics</h3>

						<p>Ray by Pacto</p>
						<p>Healthy India Reach</p>
						<p>Ray Tab</p>
						<p>Healthy India Pro</p>
					</div>
					<div className='footerdata'>
						<h3>For hospitals</h3>

						<p>Insta by Healthy India</p>
						<p>Quickwell by Pacto</p>
						<p>Healthy India Profile</p>
						<p>Healthy India Reach</p>
					</div>
					<div className='footerdata'>
						<h3>More</h3>

						<p>Help</p>
						<p>Developers</p>
						<p>Privacy Policy</p>
						<p>Terms and Conditions</p>
						<p>Healthcare directory</p>
					</div>
					<div className='footerdata'>
						<h3>Social</h3>

						<p>Facebook</p>
						<p>Twitter</p>
						<p>Linkedin</p>
						<p>Youtube</p>
						<p>Github</p>
					</div>
				</Footer>
			</div>
			<div id="footer_img_div" style={{ textAlign: 'center' }}>
				<span>
					<img
						src='/logo.png'
						alt='Healthy India_logo'
						style={{ margin: '28px 0px', border: '0px', maxWidth: '210px', maxHeight: '48px' }}
					/>
				</span>
				<div style={{ color: '#b8bbd9', fontWeight: 700 }}>
					<span>Copyright © 2024, Healthy India. </span>
					<span>All rights reserved.</span>
				</div>
			</div>
		</Section>
	);
};

export default Footerwrapper;
