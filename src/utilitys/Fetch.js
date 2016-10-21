const Fetch = function (endpoint, method, params){
	const options = {
		API: "http://example.com",
		cache: "no-cache"
	};

	const headers = {
		"Accept"       : "application/json",
		"Content-Type" : "application/json"
	};

	let opts = {
		headers: {},
		method: method || "GET",
		body  : params || null
	};

	opts.headers = headers;
	console.log("Fetch:", Object.assign(opts,{ URL: options.API + endpoint} ) );
	opts.headers = new Headers(headers);

	return fetch(
		options.API + endpoint,
		opts
	)
	.then( (res) => {
		console.log(res);
		if(res.ok){
			return res.json();
		}else{
			return new Promise((resolve, reject) => {
				res.json().then((r) => {
					reject(r);
				})
			});
		}
	});
};

module.exports = Fetch;
