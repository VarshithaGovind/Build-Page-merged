const Major = require('../models/Major')

exports.getMajorProjects = async (req, res) => {
    try {
        const majors = await Major.find({});
        res.json(majors);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

