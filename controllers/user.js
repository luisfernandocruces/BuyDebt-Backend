var User = require("../models/user");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

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
        password: bcrypt.hashSync(user.password, 8),
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
        password: bcrypt.hashSync(user.password, 8),
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

exports.signin = async function (req, res, next) {
  let { email, password } = req.body;
  await User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      console.log("aqui: ", password, " - ", user.password);
      var passwordIsValid = bcrypt.compareSync(password, user.password);
      console.log("vamos aqui: " + passwordIsValid);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña inválida",
        });
      }

      var token = jwt.sign({ id: user.email }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        email: user.email,
        rol: user.rol,
        accessToken: token,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    });
};
