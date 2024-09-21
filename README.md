# Sprint 7 project
Description of project:
My project consists of test that are written using Jest. They test the API using GET, POST, PUT, and DELETE operations.

Description of technologies and techniques:
I used GitHub to submit this project, linking my account directly to my TripleTen account. 
Next I cloned the repository to my computer using Git Bash in a directory named "projects" using the command "git clone https://github.com/kurtisnichols/hm07-qa-us.git"(note that your own username will be used in place of kurtisnichols).
I ran npm install and worked locally on the project using VS Code.

Running tests:
GET
I ran this test with the endpoint /api/v1/warehouses
The tests ran were to validate the status code of 200 and that the opening hour is earlier than the closing hour

POST
This test was run with the endpoint /api/v1/warehouses/check
These tests were run to validate the status code of 200 and the number of warehouses

PUT
This test was run with the endpoint /api/v1/products/7
The tests were run to validate the status code of 200 and to that the price of item 7 is 2

DELETE
This test was run with the endpoint /api/v1/kits/6
The tests were run to validate the status code of 200 and that the kit was deleted