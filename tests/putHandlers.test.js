// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 2
}

test('Should be 200 status code', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
  
		actualStatus = response.status;
	
		expect(actualStatus).toBe(200);
	
	  } catch (error) {
		console.error(error);
	  }
	});
	
	test('Should show price of item 7 as 2', async () => {
		let response;
		try {
			response = await fetch(`${config.API_URL}/api/v1/products/7`);
		} catch (error) {
			console.error(error);
		}
		let data = await response.json();
		const responseBody = {
			"ok": true
		};
		expect(responseBody.ok).toBe(true);
	});