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
    // {"electronic_type":"goat", "cost":12, "size":"large"}
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
exports.electronics_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
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
