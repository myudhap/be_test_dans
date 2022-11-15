const axios = require('axios');
const _ = require('lodash');

exports.list = async (req, res) => {
    const { query } = req;
    let { description, location, full_time, page } = query;
    let queryArr = [];
    _.isEmpty(description) ? "" : queryArr.push(`description=${description}`);
    _.isEmpty(location) ? "" : queryArr.push(`location=${location}`);
    _.isEmpty(full_time) ? "" : queryArr.push(`full_time=${full_time}`);
    _.isEmpty(page) ? "" : queryArr.push(`page=${page}`);
    let base_url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?`;
    for (let i=0; i<queryArr.length; i++) {
        if (i>0) base_url += `&${queryArr[i]}`;
        else base_url += queryArr[i];
    }
    const jobs = await axios(base_url);
    res.json({
        data: jobs.data
    });
}

exports.detail = async (req, res) => {
    const { id } = req.params;
    const base_url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
    const jobs = await axios(base_url);
    res.json({
        data: jobs.data
    });
}