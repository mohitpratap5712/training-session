const StudentController = {
  create(req, res) {
    const request = req.body
    res.send({
      message: "data created successfully",
      request
    });
  },
  readone(req,res) {
    res.send({
      message: "User fechted  successfully",
    });
  },
  readall(req, res) {
    res.send({
      message: "All user fecthed successfully",
    });
  },
  update(req, res) {
    res.send({
      message: "data updated successfully",
    });
  },
  destroy(req, res) {
    res.send({
      message: "data delted successfully",
    });
  },
};

module.exports = StudentController;
