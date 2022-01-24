const faker = require('faker');
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const { Op } = require('sequelize');

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await sequelize.models.Product.create(data);
    return newProduct;
  }

  async find({ limit, offset, price, minPrice, maxPrice }) {
    const whereConfig = price
      ? { price: price }
      : maxPrice && minPrice
      ? { price: { [Op.gte]: [minPrice], [Op.lte]: [maxPrice] } }
      : {};

    const options = {
      include: ['category'],
      limit: limit && limit,
      offset: offset && offset,
      where: whereConfig,
    };

    const allProducts = await sequelize.models.Product.findAll(options);
    return allProducts;
  }

  async findOne(id) {
    const product = await sequelize.models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);

    const updatedProduct = await product.update(changes);

    return { updatedProduct };
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { delete: true };
  }
}

module.exports = ProductsService;
