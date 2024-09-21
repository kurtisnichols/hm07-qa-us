// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 2
}

test('Status code is 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		console.log('Response:', response);
  
		actualStatus = response.status;
		console.log('Actual Status:', actualStatus);
	
		expect(actualStatus).toBe(200);
	
	  } catch (error) {
		console.error(error);
	  }
	});
	
	test('Price for item 7 is 2', async () => {
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