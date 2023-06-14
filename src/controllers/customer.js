// var urlencodedParser = bodyParser.urlencoded({ extended: false })  
const listCustomer = [
    {
        name: "nguyen van a",
        age: 18
    },
    {
        name: "nguyen van b",
        age: 18
    },
    {
        name: "nguyen van c",
        age: 18
    },
    {
        name: "nguyen van d",
        age: 18
    },
    {
        name: "nguyen van e",
        age: 18
    },
];
function getAllCustomers(req, res) {
    res.send(listCustomer);
}
function addCustomer(req, res) {
    const cus = { name: req.body.name, age: req.body.age };
    listCustomer.push(cus)
    console.log("customer:", cus)
    res.send(listCustomer);
}

function getCustomerById(req, res) {
    const userId = req.params.id;
    console.log("userId: ", userId);
    res.send({ userId });

}
function getCustomerByNameAndId(req, res) {
    const { name, age } = req.query;
    console.log(name)
    console.log(age)
    console.log(listCustomer)
    const cus = listCustomer.filter((item) => {
        if (item.name == name && item.age == age) {
            return true;
        } else {
            return false;
        }

    });
    // console.log(listCustomer.find())
    console.log("customer:", cus)
    res.send(cus && cus.length > 0 ? { response: cus[0] } : { response: null });
}
function createCustomer(req, res) {
    const { name, age } = req.body;
    console.log("name:", name)
    res.send({
        name, age
    });

}
function createManyCustomer(req, res) {
    // const list=[]
    for (let i = 0; i < req.body.length; i++) {
        listCustomer.push(req.body[i]);
    }
    console.log(listCustomer);
    res.send(listCustomer);
}
module.exports = { getAllCustomers, getCustomerById, addCustomer, getCustomerByNameAndId, createCustomer, createManyCustomer }
