# Solution

## Prerequisites

Make sure you have yarn, node and npx installed.

## To Run Express Server

In order to run the server, first install packages from the _package.json_

```
git clone https://github.com/Skoob1905/EF_TechTest.git
cd EFTechTest
yarn
```

Now run the server by using

```
npx ts-node src/api/express.ts
```

## Tests

Feel free to run the tests as shown written in the _src/api/express.test.ts_ file by running

```
yarn jest
```

## Endpoints

I also wrote some middleware to hit the api and get a response for each of the 4 endpoints created.

Each solution (except the test in step 3.) can be found inside the _src_ folder

Step 1.
For each solution run its corresponding solution using
|step|filename|
|-|-|
|1|getPrograms.ts|
|2|addPrograms.ts
|4|deletePrograms.ts|
|5|updatePrograms.ts|

```
ts-node <filename>
```

The console with show the output for each file/endpoint hit.
