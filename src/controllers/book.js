

function getAllBooks (req, res){
    res.json ([
        {name:"book1", price: 150000},
        {name:"book2", price: 110000},
    ]
);
}

module.exports={getAllBooks}