const QuoteGen = () => {
	return fetch('https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(res=>{
		return res.json()
		// console.log(res)
	}).then(json=>{
		console.log(json)
		return json;
	})
}

export default QuoteGen;