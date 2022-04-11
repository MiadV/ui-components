import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ColumnsType, TableRowSelection } from 'antd/lib/table/interface';
import { arrayMoveImmutable } from 'array-move';
import {
  parseISO,
  format as fnFormat,
  differenceInMilliseconds
} from 'date-fns';
import { CaretDown, List } from 'phosphor-react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';
import { default as Button } from '../../Button';
import { default as Tag } from '../../Tag';
import { default as Tooltip } from '../../Tooltip';
import {
  default as Table,
  FilterIcon,
  HeaderWithSort,
  TableProps
} from '../index';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
    },
    checked: {
      options: ['checked?'],
      control: { type: 'check' }
    },
    withFooter: {
      options: ['Footer'],
      control: { type: 'check' }
    }
  }
} as ComponentMeta<typeof Table>;

const format = (date: string) =>
  fnFormat(typeof date === 'string' ? parseISO(date) : date, 'dd MMM yyyy');

const SubmissionStatus = {
  NotStarted: 'Not started',
  Submitted: 'Submitted',
  Approved: 'Approved'
};

type RecordType = {
  key: number;
  submissionDate: string;
  merchantName: string;
  outletLocation: string;
  submissionStatus: string;
  productType: string;
};

type ArgsType = TableProps<RecordType> & {
  label: string;
  checked?: string[];
  withFooter?: string[];
};

const dataSource = [
  {
    key: 1,
    submissionDate: new Date(2022, 1, 3).toISOString(),
    merchantName: 'Dunkin Donuts',
    outletLocation: 'Subang Jaya',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay',
    children: [
      {
        key: 13,
        merchantName: 'Another Dunkin Donuts Shop!',
        outletLocation: 'Subang Jaya',
        submissionStatus: SubmissionStatus.NotStarted,
        productType: 'FavePay'
      }
    ]
  },
  {
    key: 2,
    submissionDate: new Date(2022, 1, 1).toISOString(),
    merchantName: 'Puma Sdn Bhd',
    outletLocation: 'One Pavilion',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 3,
    submissionDate: new Date(2022, 1, 2).toISOString(),
    merchantName: 'ArtFriend',
    outletLocation: 'Jaya One',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 4,
    submissionDate: new Date(2022, 1, 3).toISOString(),
    merchantName: 'Dunkin Donuts 2',
    outletLocation: 'One Pavilion, 123A, Jalan Pavilion, 47000 Kuala Lumpur.',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 5,
    submissionDate: new Date(2022, 1, 1).toISOString(),
    merchantName: 'Puma Sdn Bhd 2',
    outletLocation: 'One Pavilion',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 6,
    submissionDate: new Date(2022, 1, 2).toISOString(),
    merchantName: 'ArtFriend 2',
    outletLocation: 'Jaya One',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 7,
    submissionDate: new Date(2022, 1, 3).toISOString(),
    merchantName: 'Dunkin Donuts 3',
    outletLocation: 'Subang Jaya',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 8,
    submissionDate: new Date(2022, 1, 1).toISOString(),
    merchantName: 'Puma Sdn Bhd 3',
    outletLocation: 'One Pavilion',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 9,
    submissionDate: new Date(2022, 1, 2).toISOString(),
    merchantName: 'ArtFriend 3',
    outletLocation: 'Jaya One',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 10,
    submissionDate: new Date(2022, 1, 3).toISOString(),
    merchantName: 'Dunkin Donuts 4',
    outletLocation: 'One Pavilion, 123A, Jalan Pavilion, 47000 Kuala Lumpur.',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 11,
    submissionDate: new Date(2022, 1, 1).toISOString(),
    merchantName: 'Puma Sdn Bhd 4',
    outletLocation: 'One Pavilion',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  },
  {
    key: 12,
    submissionDate: new Date(2022, 1, 2).toISOString(),
    merchantName: 'ArtFriend 4',
    outletLocation: 'Jaya One',
    submissionStatus: SubmissionStatus.NotStarted,
    productType: 'FavePay'
  }
];

const nameFilters = dataSource.map(({ merchantName }) => {
  return { text: merchantName, value: merchantName };
});

const dataColumns: ColumnsType<RecordType> & any = [
  {
    title: ({ sortColumns }) => <HeaderWithSort sortColumns={sortColumns} title={'Submission Date'}/>,
    dataIndex: 'submissionDate',
    render: text => (text ? format(text) : ''),
    sorter: ({ submissionDate: a }, { submissionDate: b }) =>
      differenceInMilliseconds(parseISO(a), parseISO(b))
  },
  {
    title: ({ sortColumns }) => <HeaderWithSort sortColumns={sortColumns} title={'Merchant Name'} />,
    dataIndex: 'merchantName',
    sorter: ({ merchantName: a }, { merchantName: b }) => a.localeCompare(b),
    filters: nameFilters,
    filterMode: 'tree',
    onFilter: (value, { merchantName }) => merchantName === value,
    filterIcon: FilterIcon
  },
  {
    title: 'Outlet Location',
    dataIndex: 'outletLocation',
    ellipsis: {
      showTitle: false
    },
    render: address => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    )
  },
  {
    title: 'Submission Status',
    dataIndex: 'submissionStatus',
    render: (_, { submissionStatus }) => (
      <>
        {submissionStatus === SubmissionStatus.NotStarted && (
          <Tag color={'default'}>Not started</Tag>
        )}
      </>
    )
  },
  {
    title: 'Product',
    dataIndex: 'productType',
    render: productType => <Tag color={'default'}>{productType}</Tag>
  },
  {
    title: 'Action(s)',
    key: 'action',
    render: (_, { merchantName }) => (
      <a onClick={() => confirm(`cancel submission for ${merchantName}?`)}>
        Cancel Submission
      </a>
    ),
    fixed: 'right'
  }
];

const args: ArgsType = {
  size: 'large',
  checked: undefined,
  dataSource: dataSource,
  columns: dataColumns,
  label: 'Table'
};

const Template: Story<ArgsType> = (
  { checked, withFooter, ...restProps }: ArgsType,
  context
) => {
  const { setSelectedRows, columns, dataSource, components } = context;

  const rowSelection: TableRowSelection<RecordType> =
    checked?.length > 0
      ? {
        type: 'checkbox',
        onChange: (
          selectedRowKeys: React.Key[],
          selectedRows: RecordType[]
        ) => restProps.rowSelection || setSelectedRows(selectedRows),
        columnWidth: 40
      }
      : undefined;

  const footerFn = withFooter?.length > 0 ? () => withFooter[0] : undefined;

  // when table has checkboxes or drag sorts, the column index changes
  const expandIconColumnIndex =
    checked?.length > 0 ? 3 : restProps.components || components ? 2 : 1;

  return (
    <Table
      columns={restProps.columns || columns}
      dataSource={restProps.dataSource || dataSource}
      rowSelection={rowSelection}
      footer={footerFn}
      components={restProps.components || components}
      expandable={{
        indentSize: 0,
        expandIconColumnIndex: expandIconColumnIndex,
        expandIcon: ({ expanded, expandable, onExpand, record }) => {
          return (
            expandable && (
              <CaretDown
                size={16}
                weight="light"
                style={{ transform: expanded ? 'rotate(180deg)' : '' }}
                onClick={(e: any) => onExpand(record, e)}
              />
            )
          );
        }
      }}
      {...restProps}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  ...args
};

export const Checked = Template.bind({});

Checked.args = {
  ...args,
  checked: ['checked']
};

Checked.decorators = [
  Story => {
    const [selectedRows, setSelectedRows] = useState<RecordType[]>([]);

    const handleClick = () =>
      confirm(
        `Cancel [${selectedRows.length}] submissions: ${selectedRows
          .map(r => r.merchantName)
          .join(', ')}?`
      );

    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column'
        }}
      >
        {selectedRows.length > 0 && (
          <div 
            style={{
              marginBottom: '10px',
              alignSelf: 'flex-end'
            }}
          >
            <span>{`Selected ${selectedRows.length} ${selectedRows.length > 1 ? 'items' : 'item'}`}</span>
            <Button
              style={{ marginLeft: '12px' }}
              type={'primary'}
              onClick={handleClick}
              disabled={selectedRows.length === 0}
            >
              Cancel submissions
            </Button>
          </div>
        )}
        <Story setSelectedRows={setSelectedRows} />
      </div>
    );
  }
];

export const FixedHeaderAndColumn = Template.bind({});

FixedHeaderAndColumn.args = {
  scroll: { y: '78vh', x: 1500 },
  ...args
};

export const SortWithHandle = Template.bind({});

const DragHandle = SortableHandle(() => <List size={16} weight="light" />);
const sortWithHandleColumns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 80,
    className: 'drag-visible',
    render: () => <DragHandle />
  },
  ...args.columns
];

SortWithHandle.decorators = [
  Story => {
    const [data, setData] = React.useState(dataSource);

    const onSortEnd = ({ oldIndex, newIndex }) => {
      if (oldIndex !== newIndex) {
        const newData = arrayMoveImmutable(
          [].concat(data),
          oldIndex,
          newIndex
        ).filter(el => !!el);
        setData(newData);
      }
    };

    const SortableItem = SortableElement(props => <tr {...props} />);
    const SortableBody = SortableContainer(props => <tbody {...props} />);
    const DraggableContainer = props => (
      <SortableBody
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortEnd={onSortEnd}
        {...props}
      />
    );

    const DraggableBodyRow = (
      props: {} & {
        'data-row-key': number;
      }
    ) => {
      const index = data.findIndex(x => x.key === props['data-row-key']);
      return <SortableItem index={index} {...props} />;
    };
    return (
      <Story
        columns={sortWithHandleColumns}
        dataSource={data}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow
          }
        }}
      />
    );
  }
];
