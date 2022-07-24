import { RESPONSE } from "../constants";

const createResponse = (status = RESPONSE.STATUSES.OK, data = {}) => ({
    statusCode: status,
    headers: RESPONSE.HEADERS,
    body: JSON.stringify(data),
});

export default createResponse;