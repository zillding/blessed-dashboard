const config = [
  {
    boxConfig: {
      label: ' Program 1 ',
      top: '0%',
      left: '0%',
      width: '50%',
      height: '50%',
    },
    programParams: [
      'node',
      ['p1.js'],
      {
        cwd: `${__dirname}/../programs`,
      },
    ],
  },
  {
    boxConfig: {
      label: ' Program 2 ',
      top: '0%',
      left: '50%',
      width: '50%',
      height: '50%',
    },
    programParams: [
      'node',
      ['p2.js'],
      {
        cwd: `${__dirname}/../programs`,
      },
    ],
  },
  {
    boxConfig: {
      label: ' Program 3 ',
      top: '50%',
      left: '0%',
      width: '50%',
      height: '50%',
    },
    programParams: [
      'node',
      ['p3.js'],
      {
        cwd: `${__dirname}/../programs`,
      },
    ],
  },
  {
    boxConfig: {
      label: ' Program 4 ',
      top: '50%',
      left: '50%',
      width: '50%',
      height: '50%',
    },
    programParams: [
      'node',
      ['p4.js'],
      {
        cwd: `${__dirname}/../programs`,
      },
    ],
  },
];

export default config;
