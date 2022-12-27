const handleMessage = require("../../../handleMessage");


exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    console.log(message)
    handleMessage(message);
    return { statusCode: 200 };
};
