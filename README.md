# Rick and Morty API with Next.js and Mocha

Demo for tutorials that help you create a new Next.js app that can dynamically pull in character information and add animations with Framer.js.

Learn how to create your own with [How to Create a Dynamic Rick and Morty Wiki Web App with Next.js](https://github.com/TravelXML/RICK-AND-MORTY-API-NEXT)

[🖕 Here you can find Rick and Morty API Document for REST implementation.](https://rickandmortyapi.com/documentation/#rest)

## Implementation

GET any 2 characters from the Rick and Morty API that interest you using the 'character' API that are
* Male AND Alive OR
* Female AND Dead
* List all the locations that are of type planet.


## Getting started locally
* Run the below commands.
* `yarn install`
* `yarn dev`
* 🚀

## Endpoints

### `http://localhost:3000/` - Male AND Alive OR / default
### `http://localhost:3000/female` - Female AND Dead
### `http://localhost:3000/locations` - locations that are planet
### `http://localhost:3000/character/{id}` - Individual Character Details

## Screenshots

### `http://localhost:3000/` - Male AND Alive OR / default


![image](https://user-images.githubusercontent.com/8361967/148732362-a39e3e36-3e16-4117-8974-5f0884ee803f.png)

### `http://localhost:3000/female` - Female AND Dead


![image](https://user-images.githubusercontent.com/8361967/148732431-93214111-03f7-433f-8fec-8de3e3a2bfe5.png)


### `http://localhost:3000/locations` - locations that are planet


![image](https://user-images.githubusercontent.com/8361967/148732488-1c9adc44-bed2-44b8-bf74-47d66510ca41.png)

### `http://localhost:3000/character/{id}` - Individual Character Details


![image](https://user-images.githubusercontent.com/8361967/148732523-798d58b9-ce5d-4b4c-8606-527c8e17d1f5.png)


## Logs

logs are saved into `/logs` folder in JSON Format.


![image](https://user-images.githubusercontent.com/8361967/148732767-d11784be-8029-4e61-895f-5ba18c609eda.png)


## Testing

Testing file you can locate in `/test` folder, you can add more test cases into this, but here fouced at very basic test cases for the endpoints.

## How to Run?

Just Go to your Project Directory and run command `mocha`, it will execute all test cases written on that folder.


![image](https://user-images.githubusercontent.com/8361967/148733223-a360f282-5d70-4857-81c8-4687a085aac2.png)


Happy Coding! ❤️


