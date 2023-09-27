var catalogue = [
    {
        "title": "Big Cucumber",
        "category": "grocery",
        "price": 12.99,
        "image": "Cucumber.jpg",
        "_id": "1"
    },
    {
        "title": "mangoes",
        "category": "grocery",
        "price": 1.99,
        "image": "Mangoes.jpg",
        "_id": "2"
    },
    {
        "title": "strawberry",
        "category": "grocery",
        "price": 2.99,
        "image": "Strawberry.jpg",
        "_id": "3"
    },
    {
        "title": "watermelon",
        "category": "grocery",
        "price": 3.99,
        "image": "Watermelon.jpg",
        "_id": "4"
    },
    {
        "title": "Potatoes",
        "category": "grocery",
        "price": 3.99,
        "image": "Potatoes.jpg",
        "_id": "5"
    },
    {
        "title": "ammo",
        "category": "guns and ammo",
        "price": 1200.00,
        "image": "Ammunition.jpg",
        "_id": "6"
    },
    {
        "title": "Classic Guns",
        "category": "guns and ammo",
        "price": 1500.00,
        "image": "Classic Guns.jpeg",
        "_id": "7"
    },
    {
        "title": "chick on bikes",
        "category": "chick on bikes",
        "price": 3.99,
        "image": "chick on Bike.jpeg",
        "_id": "8"
    },
    {
        "title": "Chick on Dirtbike",
        "category": "chick on Bikes",
        "price": 2.99,
        "image": "chick on dirtbike.jpg",
        "_id": "9"
    },
    {
        "title": "Scuds",
        "category": "guns and ammo",
        "price": 3.99,
        "image": "Missile.jpeg",
        "_id": "10"
    },
    {
        "title": "Sir Gatlin",
        "category": "guns and ammo",
        "price": 30000,
        "image": "Sir Gatlin.jpeg",
        "_id": "11"
    },
    {
        "title": "Cake",
        "category": "grocery",
        "price": 3.99,
        "image": "Cake.jpg",
        "_id": "12"
    }

];

class DataService{
    getProducts()
    {
        return catalogue;
    }

}

export default DataService;

//please create at least 7 of these objects. create pic folder in public as images. want to impart something from the computer