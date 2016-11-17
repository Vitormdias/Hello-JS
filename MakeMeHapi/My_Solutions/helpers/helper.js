module.exports = function(context) {
    
    query = context.data.root.query;
    conctanedString = query.name + query.suffix;

    return conctanedString;
}
