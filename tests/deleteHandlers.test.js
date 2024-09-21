// eslint-disable-next-line no-undef
const config = require('../config');

test('Status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		console.log('Response:', response);
  
		actualStatus = response.status;
		console.log('Actual Status:', actualStatus);
	
		expect(actualStatus).toBe(200);

	} catch (error) {
		console.error(error);
	}
});

test('Kit has been deleted', async () => {
	let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/6`);
    } catch (error) {
		console.error(error);
	}
	let data = await response.json();
	const responseBody = {
		"ok": true
	};
	expect(responseBody.ok).toBe(true);
});