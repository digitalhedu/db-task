const { task, user } = require("../database/models/index");
const methods = {};

methods.index = async (req, res) => {
  try {
    let all = await task.findAll({
      include: { all: true },
      order: [["id", "DESC"]],
    });
    let page = req.query && req.query.page ? Number(req.query.page) : 0;
    let isAdmin = req.session.user && req.session.user.isAdmin;
    let isUser = req.session.user && !req.session.user.isAdmin;
    let useFilter = (task) => task.user.id == req.session.user.id;
    let results = isAdmin ? all : isUser ? all.filter(useFilter) : [];
    let pagination = results.splice(5 * page, 5);
    return res.render("index", {
      tasks: pagination,
      page,
      next: pagination.length == 5,
    });
  } catch (error) {
    return res.send(error);
  }
};
methods.create = async (req, res) => {
  try {
    let users = await user.findAll();
    return res.render("create", {
      users: users.filter((user) => !user.isAdmin),
    });
  } catch (error) {
    return res.send(error);
  }
};

methods.storage = async (req, res) => {
  try {
    let create = await task.create({ ...req.body, isComplete: false });
    return res.redirect("/tasks");
  } catch (error) {
    return res.send(error);
  }
};

methods.change = async (req, res) => {
  try {
    let search = await task.findByPk(req.body.id);
    if (search) {
      await search.update({ isComplete: !search.isComplete });
    }
    return res.redirect("/tasks");
  } catch (error) {
    return res.send(error);
  }
};

methods.edit = async (req, res) => {
  try {
    let search = await task.findByPk(req.body.id);
    if (search) {
      let users = await user.findAll();
      return res.render("edit", {
        task: search,
        users: users.filter((user) => !user.isAdmin),
      });
    }
    return res.redirect("/tasks");
  } catch (error) {
    return res.send(error);
  }
};

methods.update = async (req, res) => {
  try {
    let search = await task.findByPk(req.body.id);
    if (search) {
      await search.update({ ...req.body, isComplete: false });
    }
    return res.redirect("/tasks");
  } catch (error) {
    return res.send(error);
  }
};

methods.remove = async (req, res) => {
  try {
    let search = await task.findByPk(req.body.id);
    if (search) {
      await search.destroy();
    }
    return res.redirect("/tasks");
  } catch (error) {
    return res.send(error);
  }
};

module.exports = methods;
