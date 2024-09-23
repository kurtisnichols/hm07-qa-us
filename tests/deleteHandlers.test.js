// eslint-disable-next-line no-undef
const config = require('../config');

test('Should be 200 status code', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
  
		actualStatus = response.status;
	
		expect(actualStatus).toBe(200);

	} catch (error) {
		console.error(error);
	}
});

test('Should delete the kit', async () => {
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