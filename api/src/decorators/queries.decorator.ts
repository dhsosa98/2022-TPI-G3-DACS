import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Pagination } from '../shared/interfaces/queries';
import { Op, Sequelize } from 'sequelize';

export const CreateQueries = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest();

    const paginationParams: Pagination = {
      skip: 0,
      limit: 10,
      sort: [],
      search: [],
      date: [],
    };

    paginationParams.limit = req.query.limit
      ? parseInt(req.query.limit.toString())
      : 10;
    paginationParams.skip = req.query.page
      ? (parseInt(req.query.page.toString()) - 1) * paginationParams.limit
      : 0;

    // create array of sort
    if (req.query.sort) {
      const sortArray = req.query.sort.toString().split(',');
      paginationParams.sort = sortArray.map((sortItem) => {
        const sortBy = sortItem[0];
        switch (sortBy) {
          case '-':
            return {
              field: sortItem.slice(1),
              by: 'ASC',
            };
          case '+':
            return {
              field: sortItem.slice(1),
              by: 'ASC',
            };
          default:
            return {
              field: sortItem.trim(),
              by: 'DESC',
            };
        }
      });
    }

    // create array of search
    if (req.query.search) {
      const searchArray = req.query.search.toString().split(',');
      paginationParams.search = searchArray.map((searchItem) => {
        const field = searchItem.split(':')[0];
        const value = searchItem.split(':')[1];
        return {
          field,
          value,
        };
      });
    }

    // create array of date
    if (req.query.date) {
      const dateArray = req.query.date.toString().split(',');
      paginationParams.date = dateArray.map((dateItem) => {
        const field = dateItem.split(':')[0];
        const value = dateItem.split(':')[1];
        const from = value.split('TO')[0];
        const to = value.split('TO')[1];
        return {
          field,
          from,
          to,
        };
      });
    }

    const { skip, limit, sort, date, search } = paginationParams;
    //Create Database Query
    const options = {
      offset: skip,
      limit,
      order: sort.map((order) => [order.field, order.by]),
      where: {
        [Op.and]: [
          ...search.map(({ field, value }) => {
            return { [field]: { [Op.like]: `%${value}%` } };
          }),
          ...date.map(({ field, from, to }) => {
            return {
              [field]: { [Op.between]: [from, to || Sequelize.fn('NOW')] },
            };
          }),
        ],
      },
    };

    return options;
  },
);
