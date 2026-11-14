const batches = require('../data/batches');
const { filterBatches, paginate } = require('../utils/filterBatches');

const getBatches = (req, res) => {
  try {
    const { page, limit, search, status, centre } = req.query;

    const filtered = filterBatches(batches, { search, status, centre });
    const result = paginate(filtered, page, limit);

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Error fetching batches:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch batches',
    });
  }
};

const getCentres = (_req, res) => {
  try {
    const centres = [...new Set(batches.map((batch) => batch.centre))].sort();

    return res.status(200).json({
      success: true,
      data: centres,
    });
  } catch (error) {
    console.error('Error fetching centres:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch centres',
    });
  }
};

module.exports = {
  getBatches,
  getCentres,
};
