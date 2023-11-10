var Electronics = require('../models/electronics');
// List of all electronicss
// exports.electronics_list = function(req, res) {
// res.send('NOT IMPLEMENTED: electronics list');
// };

// List of all electronicss
exports.electronics_list = async function(req, res) {
    
    try{
    theelectronics = await Electronics.find();
    res.send(theelectronics);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);

    }
    };

// for a specific electronics.
// exports.electronics_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: electronics detail: ' + req.params.id);
// };


exports.electronics_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Electronics.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle electronics create on POST.
// exports.electronics_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: electronics create POST');
// };

exports.electronic_create_post = async function(req, res) {
    console.log(req.body)
    let document = new electronic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"electronic_type":"goat", "Price":12, "Storage":"large"}
    document.Gadget = req.body.Gadget;
    document.Price = req.body.Price;
    document.Storage = req.body.Storage;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle electronics delete form on DELETE.
exports.electronics_delete = function(req, res) {
res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
// exports.electronics_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
// };

// Handle electronics update form on PUT.
exports.electronics_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Electronics.findById( req.params.id)
// Do updates of properties
if(req.body.Gadget)toUpdate.Gadget = req.body.Gadget;
if(req.body.Price) toUpdate.Price = req.body.Price;
if(req.body.Storage) toUpdate.Storage = req.body.Storage;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
try{
theelectronics = await Electronics.find();
console.log(theelectronics)
res.render('electronics', { title: 'electronics Search Results', results: theelectronics });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
