import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Queries } from '../shared/interfaces/queries';
import { Op, Sequelize } from 'sequelize';

export const CreateQueries = createParamDecorator(
  (data, ctx: ExecutionContext): Queries => {
    const req: Request = ctx.switchToHttp().getRequest();

    const queriesParams: Queries = {
      skip: 0,
      limit: 10,
      sort: [],
      search: [],
      date: [],
    };

    queriesParams.limit = req.query.limit
      ? parseInt(req.query.limit.toString())
      : 10;
    queriesParams.skip = req.query.page
      ? (parseInt(req.query.page.toString()) - 1) * queriesParams.limit
      : 0;

    // create array of sort
    if (req.query.sort) {
      const sortArray = req.query.sort.toString().split(',');
      queriesParams.sort = sortArray.map((sortItem) => {
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
      queriesParams.search = searchArray.map((searchItem) => {
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
      queriesParams.date = dateArray.map((dateItem) => {
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

    const { skip, limit, sort, date, search } = queriesParams;
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
