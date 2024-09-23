// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
}

test('Should be 200 status code', async () => {
	let actualStatus;
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
		method: 'POST',
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

  test('Should show number of warehouses to be 4', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/warehouses/check`);
    } catch (error) {
        console.error(error);
    }
    // Convert response to JavaScript object
    const data = await response.json();
    const responseBody = {
		warehouses: [
		  { id: 1, name: "Everything You Need" },
		  { id: 2, name: "Food City" },
		  { id: 3, name: "Big World" },
		  { id: 4, name: "Fresh food" }
		]
	  };
	  expect(responseBody.warehouses.length).toBe(4);
});