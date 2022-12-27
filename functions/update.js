const handleMessage = require("../../handleMessage");


exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    handleMessage(message);
    return { statusCode: 200 };
};