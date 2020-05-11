var User = require("../models/user");

exports.index = function (req, res, next) {
  console.log(req.body);
  res.send("recibido");
};

exports.registerNaturalPerson = async function (req, res, next) {
  const user = req.body;
  console.log(user);
  try {
    let newUser = await User.create(
      {
        email: user.email,
        password: user.password,
        rol: user.rol,
        type_document: user.type_document,
        number_document: user.number_document,
        full_name: user.full_name,
      },
      {
        fields: [
          "email",
          "password",
          "rol",
          "type_document",
          "number_document",
          "full_name",
        ],
      }
    );
    console.log(newUser);
    if (newUser) {
      res.json({
        message: "El usuario se ha creado correctamente",
        data: newUser,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error internodel servidor",
      data: {},
    });
  }
};

exports.registerJudicialPerson = async function (req, res, next) {
  const user = req.body;
  console.log(user);
  try {
    let newUser = await User.create(
      {
        email: user.email,
        password: user.password,
        rol: user.rol,
        nit: user.nit,
        phone: user.phone,
      },
      {
        fields: ["email", "password", "rol", "nit", "phone"],
      }
    );
    console.log(newUser);
    if (newUser) {
      res.json({
        message: "El usuario se ha creado correctamente",
        data: newUser,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error internodel servidor",
      data: {},
    });
  }
};

exports.getUsers = async function (req, res, next) {
  const users = await User.findAll();
  res.json({
    data: users,
  });
};

exports.getUserById = async function (req, res, next) {
  try {
    const email = req.params.id;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    res.json({
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async function (req, res, next) {
  const email = req.params.id;
  const deleteRowCount = User.destroy({
    where: {
      email: email,
    },
  });
  res.json({
    message: "El proyecto se elimino    ",
    data: deleteRowCount,
  });
};
