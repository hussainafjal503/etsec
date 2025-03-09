import React from 'react'
import Card from '../Card'
import Heading from '../ReusableCmp/Heading'

function CyberSecurity() {
const cyberData=[
	{
		icon:"ri-global-fill",
		title:"SOC (Security Operations Center)",
		text:"Our SOC provides 24/7 monitoring and response to security incidents. We perform threat intelligence analysis and ensure continuous security event monitoring.",
	},
	{
		icon:"ri-home-4-fill",
		title:"NOC (Network Operations Center)",
		text:"Our NOC team monitors network performance, manages incidents, and performs routine maintenance. We ensure optimal uptime and efficient network operations.",
	},
	{
		icon:"ri-book-open-fill",
		title:"VAPT (Vulnerability Assessment and Penetration Testing)",
		text:"We conduct thorough vulnerability assessments and simulate attacks to identify weaknesses. Our experts provide detailed findings and remediation recommendations.",
	},
]

  return (
	<div className='w-full bg-gray-100 py-20'>

			<div className='w-full flex flex-col gap-4 items-center justify-center'>
				<Heading>
					
					<div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
						<span>Cybersecurity</span>
						<span> Services</span>
					</div>
					
					</Heading>

				<h3 className='font-bold text-xl md:text-4xl'>Services We Offer</h3>
			</div>



		<div className='px-6 md:px-28 flex flex-row md:justify-center gap-6 mt-10 flex-wrap'>
			{
				cyberData.map((item,index)=>(
					<Card key={index} title={item.title} text={item.text}>{item.icon}</Card>
				))
			}

		</div>
	  
	</div>
  )
}

export default CyberSecurity
