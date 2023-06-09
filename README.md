# Helsinki city bike app (Dev Academy pre-assignment)

This is my pre-assignment for Solita Dev Academy Finland 2023

<hr>

## <ins>How to run the project

### 1. Importing data:

* Get a MongoDB Atlas Cluster. In my case, I have the free option.

* Install MongoDB Compass. The GUI for MongoDB.

* <ins>Once you have MongoDB Compass:

* Connect with your MongoDB Atlas Cluster

* Create a new database

    * <ins>Collection stations:

        * Download stations data:<br>
            https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv

        * Import Data

    * <ins>Collection trips:

        * Download trips data:<br>
        https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv<br>
        https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv<br>
        https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv

<hr>
<i>(Note: As I have a free cluster, I have limited data. The following steps are to reduce the data 
randomly and to not import journeys for less than ten seconds and distances covered shorter than 10 meters.)</i> 
<hr>

* Import Data:

    * <ins>Aggregations + Add Stage
        * $sample { size: number }  -->"Only allows 5% at most"

    * <ins>Aggregations + Add Stage

        * $match: {Covered distance (m): { $gt: 10  }
            Duration (sec): { $gt: 10  }
            }
        
<span>The result is 165000 documents in the collection.

<hr>

### 2. Clone the GitHub repository

* https://github.com/ericpastor/helsinki-city-bike-app

<hr>

### 3. Backend: 
    
* npm install
    * It will install the packages
* Create a .env file
* Add your connection string:<br>
    MONGODB_URI=mongodb+srv://XXXXXXXXXXXXXX@clusterX.XXXXXX.mongodb.net/XXXXXXXXX?retryWrites=true&w=majority 
* npm run dev
    * Connection to MongoDB.\ 
      It will open a server ready at <http://localhost:4000/>

<hr>

### 4. Frontend: 

* npm install
    * It will install the packages
* npm start
    * Runs the app in the development mode.\
      Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

* #### <ins>Test E2E with Cypress

    * npm run cypress:open
        * It will open cypress\
            1. Click on E2E testing
            2. Choose a browser
            3. Click on Start E2E Testing 
            4. Click on helsinki_city_bike_app file
    * You will see the tests

<hr>
        
## <ins>Stuff done:

* Import data from the CSV files to a database or in-memory storage
* Validate data before importing
* Don't import journeys that lasted for less than ten seconds
* Don't import journeys that covered distances shorter than 10 meters
        
* Journey list view
    * Pagination Implemented
    * Departure and return stations, covered distance in kilometers and duration in minutes
    * Ordering per column
    * Searching
          
* Station list
    * List all the stations
    * Pagination
    * Ordering per column
    * Searching
    * Single station view
    * Station name
    * Station address

* Test E2E with cypress

### Stuff to do 
* Implement more tests
* Station location on the map
* The average distance of a journey starting from the station
* The average distance of a journey ending at the station
* Top 5 most popular return stations for journeys starting from the station
* Top 5 most popular departure stations for journeys ending at the station
* Ability to filter all the calculations per month
* Endpoints to store new journeys data or new bicycle stations
* Create UI for adding journeys or bicycle stations

<hr>

## <ins>Previews

#### Home 

![image](https://github.com/ericpastor/helsinki-city-bike-app/assets/110885492/f6d99a8c-4b4e-4be0-bd25-2a9c36db4f22)

#### Trips 

![image](https://github.com/ericpastor/helsinki-city-bike-app/assets/110885492/ab0da94f-b80e-476f-baa0-2acd989cc1b9)

#### Stations 

![image](https://github.com/ericpastor/helsinki-city-bike-app/assets/110885492/8270328d-811b-4497-bf20-01986d0a20af)

#### Search a trip

![image](https://github.com/ericpastor/helsinki-city-bike-app/assets/110885492/8eeb1562-914f-42b7-b34e-ff6f3ef0df63)


#### First Cypress tests

![image](https://github.com/ericpastor/helsinki-city-bike-app/assets/110885492/230a95f2-9677-42a3-93a9-5a99def3fda4)



