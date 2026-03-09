function parseConfig(text){
    try{
        let config = JSON.parse(text);
        console.log(config);
        return config;
    }
    catch(err){
        console.log("Error Parsing Config: ",err.message);
        return null;
    }
    finally{
        console.log("Finally block executed.");
    }
}
//parseConfig('{"theme":"dark"}');//valid json becoz it has key-value pair in it.
parseConfig('{json}');//invalid json
