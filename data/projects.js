const projects = [
	{
		name: 'Eventpro',
		description: `An Highly Responsive, User-friendly Event Ticketing platform with separate CMS for agencies and admin, and
 an event CRM for creating and managing events, transaction and tickets. Led the entire project lifecycle from initial planning and system design to full-stack development, including
 both frontend and backend components. Integrated SSLcommerz as the payment gateway to facilitate secure online transactions and implemented
 PDF ticket generation with Puppeteer, incorporating email notifications with attached tickets using
 Nodemailer. Enabled user-friendly ticket purchasing for registered and guest users, with options to download tickets
 directly from the platform.
`,
		pic: '/eventpro.png',
		tech: [
			'Next.Js',
			'Express.Js',
			'MongoDB',
			'TypeScript',
			'Chakra Ui',
			'Redux Toolkit',
			'Framer Motion',
		],
		links: [
			{
				label: 'Demo',
				icon: 'link',
				url: 'https://eventpro-ticketing.vercel.app/',
			},
		],
	},
	{
		name: 'Fish & Meat Club',
		description: `E-commerce solution with Responsive UI, Framer Motion animations and built an Admin Dashboard for
 streamlined product and order management. Implemented JWT authentication for secure user login and Redux Toolkit for state management. 
 Created RESTful APIs and managed MongoDB for backend operations and scalable data storage. 
 Deployed for production and maintained the website for optimal performance.
`,
		pic: '/fishnmeat.png',
		tech: [
			'Next.Js',
			'Express.Js',
			'MongoDB',
			'Chakra Ui',
			'Redux Toolkit',
			
		],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://www.fishnmeatclub.com/',
			},
		],
	},
	{
		name: 'Shohoz Air',
		description: `Contributed to integrating external flight API services. Worked on the flight booking, reissuing, refunding, and payment systems. 
		Developed advanced flight data filtering, a dynamic Markup system, and a complete payment pipeline. 
		Built the backend and admin CMS for the platform.
`,
		pic: '/shohoz.png',
		tech: [
			'React.Js',
			'Express.Js',
			'Sequelize',
			'Joi',
			'Redux Toolkit',
		],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://air.shohoz.com/',
			},
		],
	},
	{
		name: 'Bazar365',
		description: `As part of a dynamic team, I contributed to a comprehensive e-commerce solution designed to elevate user engagement and streamline performance. Utilizing Next.js, TypeScript, Chakra UI, and Redux Toolkit, the application delivers a responsive interface, customizable dark mode, and fluid animations. My role involved frontend development tasks, such as integrating APIs, managing state, and crafting visually appealing UI components.`,
		pic: '/bazar365.png',
		tech: [
			'Next.Js',
			'TypeScript',
			'Chakra Ui',
			'Redux Toolkit',
			'Framer Motion',
		],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://www.bazar365.com/',
			},
		],
	},
	{
		name: 'Scary Pacman',
		description: `This is a simple javascript based pacman game which is a lot different from the usual pacman game we have played in our childhood. It is developed using HTML, CSS and JavaScript.`,
		pic: '/pacman.png',
		tech: ['HTML', 'CSS', 'JavaScript'],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://aminulhaqueshihab.github.io/Scary-Pacman-game/',
			},
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/Scary-Pacman-game',
			},
		],
	},
	
];

export const extraProjects = [
	{
		name: 'Artisan - E-commerce Website Clone',
		description: `This is an Artisan E-commerce website clone, designed with a focus on responsiveness and user experience. Built with Next.js, TypeScript, Chakra UI, Framer Motion, and Redux Toolkit, the frontend offers a seamless browsing experience with intuitive product filtering by categories and price. Created solely for educational purposes, the site utilizes Redux Toolkit for efficient state management, ensuring a smooth and interactive interface for users to explore and engage with products dynamically.`,
		pic: '/artisan.png',
		tech: [
			'Next.Js',
			'TypeScript',
			'Chakra Ui',
			'Redux Toolkit',
			'Framer Motion',
		],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://artisan-clone.vercel.app/',
			},
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/artisan-clone',
			},
		],
	},
	{
		name: 'YumCart - Food Ordering Website',
		description: `This responsive food ordering website frontend, developed using React and Tailwind CSS, offers users an intuitive interface for browsing and filtering food items by categories and price. Leveraging React hooks like useState(), the site ensures smooth functionality and dynamic user interaction.`,
		pic: '/yumcart.png',
		tech: ['React.js', 'Tailwind CSS'],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://yumcart-online.web.app/',
			},
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/yumcart-food-delivery-app-reactjs-tailwind',
			},
		],
	},
	{
		name: 'Babbu Toy Shop - Simple e-commerce Website',
		description: `This simple e-commerce website frontend, crafted with React and CSS, integrates essential concepts like routing through React Router Dom and state management via useContext(), enabling seamless global state control. Users enjoy a fluid shopping experience, with the ability to add multiple items to their cart, review and remove selections, and view the final price for their purchases, all within an intuitive interface.`,
		pic: '/babbu.png',
		tech: ['React.Js', 'CSS'],
		links: [
			{
				label: 'Website',
				icon: 'link',
				url: 'https://babbu.netlify.app/',
			},
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/e-commerce_shopping_cart',
			},
		],
	},
	{
		name: 'Photography Portfolio Website',
		type: 'Academy Project',
		description: `The website, built on the MVC pattern with HTML, CSS, and PHP, allows photographers to upload images for a personalized portfolio. Users can share portfolios, follow photographers, and engage through comments.`,
		tech: ['HTML', 'CSS', 'PHP'],
		links: [
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/Photography-Portfolio-Website',
			},
		],
	},
	{
		name: 'Computer Network infrastructure',
		type: 'Academy Project',
		description: `The Brac University Computer Network course project entails building network infrastructure in CISCO Packet Tracer per a provided scenario. It involves DNS, DHCP, Email, and Web servers, along with routers and switches, covering IP addressing, routing, DHCP, and other essential networking concepts.`,
		tech: ['DHCP', 'TCP/IP', 'Routing', 'DNS', 'IP addressing'],
		links: [
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/CSE421_Computer-Networks_project',
			},
		],
	},
	{
		name: 'Hand Tracking Module Based Projects',
		type: 'Personal',
		description: `These projects are made for learining purposes. There are projects like Volume controller using Hand gesture, Virtual painter etc. All the projects are based on the Hand tracking module video tutorial from YouTube.`,
		tech: ['Python, OpenCV'],
		links: [
			{
				label: 'Github',
				icon: 'github',
				url: 'https://github.com/AminulHaqueShihab/Hand-tracking-module-based-projects--Opencv-Python-',
			},
		],
	},
];

export default projects;
