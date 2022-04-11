import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Avatar } from '../../Avatar';
import { default as Button } from '../../Button';
import {
  default as List,
  ListItem,
  ListItemMetaSkeleton,
  ListProps
} from '../index';
import 'antd/lib/skeleton/style/index.css';

export default {
  title: 'List',
  component: List
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args: ListProps<any>) => (
  <List {...args} />
);

const description =
  'Ant Design, a design language for background applications, is refined by Ant UED Team';
const dataSource = [
  {
    avatar: 'KS',
    title: 'Racing car sprays burning fuel into crowd.',
    description
  },
  { avatar: 'KS', title: 'Japanese princess to wed commoner.', description },
  {
    avatar: 'KS',
    title: 'Australian walks 100km after outback crash.',
    description
  },
  {
    avatar: 'KS',
    title: 'Man charged over missing wedding girl.',
    description
  },
  { avatar: 'KS', title: 'Los Angeles battles huge wildfires.', description }
];

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  header: 'List Header',
  footer: 'List Footer',
  label: 'List',
  dataSource: dataSource,
  renderItem: item => <ListItem>{item.title}</ListItem>
};

Default.argTypes = {
  size: {
    options: ['small', 'default', 'large'],
    control: {
      type: 'radio'
    }
  }
};

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export const LoadMoreList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {}
        }))
      )
    );
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const localData = data.concat(res.results);
        setData(localData);
        setList(localData);
        setLoading(false);
      });
  };

  const LoadMoreButton = () => (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px'
      }}
    >
      <Button type={'primary'} onClick={onLoadMore}>
        Load more
      </Button>
    </div>
  );

  const loadMore = !initLoading && !loading ? <LoadMoreButton /> : null;
  return (
    <List
      loadMore={loadMore}
      bordered={false}
      dataSource={list}
      renderItem={(item, _) => (
        <ListItem
          actions={[
            <Button key={_} type={'text'}>
              Button
            </Button>
          ]}
          key={_}
        >
          <ListItemMetaSkeleton
            avatar={<Avatar size={32}>KS</Avatar>}
            title={item.name.last}
            description={description}
            loading={item.loading}
          />
        </ListItem>
      )}
    />
  );
};
