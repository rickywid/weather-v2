export const Const = {
	slider: {
		settings: {
	      dots: false,
	      infinite: false,
	      speed: 500,
	      slidesToShow: 7,
	      slidesToScroll: 1,
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 5
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 3
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1
	          }
	        }
	      ],	      
		},
		label: "5 DAY FOREACAST",
		backgroundColor: '#0074ff0f',
		borderColor: "#85919f",
		borderWidth: 1,
		pointBackgroundColor: "#85919f",	
	},
	mapsAPIKey: 'AIzaSyAdOrgGoSsaX6ApmqF8WlnhNKNzbhqQuIU'
}

export default Const;