import express from 'express';
import axios from 'axios';

const router = express.Router();

const key = 'd94fe09f49a14e64afc140712220707';

router.get('/weather', async (req, res) => {
  try {
    const locations = req.query.location.split(',');
    const page = req.query.page;
    let promises = [];
    locations.forEach((e) => {
      const result = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${e}`);
      promises.push(result);
    });
    let result = [];
    Promise.all(promises).then((e) => {
      e.forEach((data) => result.push(data.data));
      res.json({ pages: Number(page), result: result.slice(0, page ? page : result.length) });
    });
  } catch (e) {
    res.json({
      message: 'something went wrong',
      error: e,
    });
  }
});

router.get('/forcast', async (req, res) => {
  try {
    const location = req.query.location;
    const days = req.query.days;
    if (days > 14) days = 14;
    else if (!days) days = 1;
    const result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=${days}`);
    res.json({
      message: 'success',
      result: result.data.forecast,
    });
  } catch (e) {
    res.json({
      message: 'something went wrong',
      error: e,
    });
  }
});

export default router;
