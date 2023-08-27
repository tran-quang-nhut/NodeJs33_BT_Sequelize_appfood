import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import { successCode, failCode, errorCode } from "../config/response.js";

const models = initModels(sequelize);
const createLike = async (req, res) => {
  try {
    // client data request body
    let { user_id, res_id } = req.body;

    let data = await models.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });

    let newData = {
      user_id,
      res_id,
      date_like: new Date(),
    };
    if (data) {
      await data.destroy();
      res.status(200).send("Đã unlike thành công");
    } else {
      await models.like_res.create(newData);
      res.status(200).send("Đã like thành công");
    }

    // INSERT INTO food VALUES ()
  } catch {
    res.status(500).send("Lỗi BE");
  }
};
const getLikeRes = async (req, res) => {
  try {
    let data = await models.like_res.findAll({
      include: ["re"],
    });
    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const getLikeUser = async (req, res) => {
  try {
    let data = await models.like_res.findAll({
      include: ["user"],
    });
    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};

const createRate = async (req, res) => {
  try {
    // client data request body
    let { user_id, res_id } = req.body;

    let data = await models.rate_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    let Data = {
      user_id,
      res_id,
      amount: 1,
      date_rate: new Date(),
    };

    if (data) {
      let newData = {
        user_id,
        res_id,
        amount: data.amount + 1,
        date_rate: new Date(),
      };
      await models.rate_res.update(newData, {
        where: {
          user_id,
          res_id,
        },
      });
      successCode(res, "", "Update Rate thành công");
    } else {
      await models.rate_res.create(Data);
      successCode(res, "", "Thêm Rate thành công");
    }

    // INSERT INTO food VALUES ()
  } catch {
    failCode(res);
  }
};
const getRateRes = async (req, res) => {
  try {
    let data = await models.rate_res.findAll({
      include: ["re"],
    });
    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const getRateUser = async (req, res) => {
  try {
    let data = await models.rate_res.findAll({
      include: ["user"],
    });
    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};

const createOrder = async (req, res) => {
  try {
    // client data request body
    let { user_id, food_id } = req.body;

    let data = await models.order.findOne({
      where: {
        user_id,
        food_id,
      },
    });
    let Data = {
      user_id,
      food_id,
      amount: 1,
      code: "",
      arr_sub_id: "",
    };

    if (data) {
      let newData = {
        user_id,
        food_id,
        amount: data.amount + 1,
        code: "",
        arr_sub_id: "",
      };
      await models.order.update(newData, {
        where: {
          user_id,
          food_id,
        },
      });
      successCode(res, "", "Update order thành công");
    } else {
      await models.order.create(Data);
      successCode(res, "", "Thêm order thành công");
    }

    // INSERT INTO food VALUES ()
  } catch {
    failCode(res);
  }
};

const getUserbyId = async (req, res) => {
  try {
    let { user_id } = req.body;
    let data = await models.user.findOne({
      where: {
        user_id,
      },
    });

    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const getFoodbyId = async (req, res) => {
  try {
    let { food_id } = req.body;
    let data = await models.food.findOne({
      where: {
        food_id,
      },
    });

    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const getResbyId = async (req, res) => {
  try {
    let { res_id } = req.body;
    let data = await models.restaurant.findOne({
      where: {
        res_id,
      },
    });

    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const getSubbyId = async (req, res) => {
  try {
    let { sub_id } = req.body;
    let data = await models.sub_food.findOne({
      where: {
        sub_id,
      },
    });

    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};
const gettypebyId = async (req, res) => {
  try {
    let { type_id } = req.body;
    let data = await models.food_type.findOne({
      where: {
        type_id,
      },
    });

    successCode(res, data, "Lấy danh sách thành công");
  } catch {
    failCode(res);
  }
};

export {
  createLike,
  getLikeRes,
  getLikeUser,
  createRate,
  getRateUser,
  getRateRes,
  createOrder,
  getUserbyId,
  getFoodbyId,
  getResbyId,
  getSubbyId,
  gettypebyId,
};
