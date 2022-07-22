import * as React from 'react';
import { Table as AntTable, TableProps as AntTableProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { SortOrder, TablePaginationConfig } from 'antd/lib/table/interface';
import { ArrowsDownUp, CaretLeft, CaretRight, Funnel } from 'phosphor-react';
import { itemRender } from '../Pagination';

import './style.css';

export type TableProps<T> = AntTableProps<T>;
export type HeaderWithSortProps<RecordType extends {}> = {
  sortColumns: {
    column: ColumnType<RecordType>;
    order: SortOrder;
  }[];
  title: string;
};

export const FilterIcon = <Funnel size={16} weight="light" />;
const defaultPagination: TablePaginationConfig = {
  position: ['bottomCenter'],
  itemRender: itemRender(<CaretLeft size={16} />, <CaretRight size={16} />)
}

export const HeaderWithSort = <T extends {}>(props: HeaderWithSortProps<T>) => {
  const { sortColumns, title } = props;
  const sortable = sortColumns ? sortColumns.find(item => item.order) : '';
  const sortClassname = sortable
    ? sortable.order === 'ascend'
      ? 'sort-ascend'
      : 'sort-descend'
    : '';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <span>{title}</span>
      <ArrowsDownUp className={sortClassname} size={16} weight="light" />
    </div>
  );
};

const Table = <T extends {}>(props: TableProps<T>) => {
  const pagination = props.pagination ? { ...props.pagination, ...defaultPagination } : defaultPagination
  return <AntTable {...props} pagination={pagination} />;
};

Table.defaultProps = {
  locale: {
    triggerDesc: 'Sort descending',
    triggerAsc: 'Sort ascending',
    cancelSort: 'Remove sorting'
  },
};

export default Table;
