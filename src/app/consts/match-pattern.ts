export const matchPattern = {
  'victory': [
    {
      str: 'WIN-WIN',
      val: {
        game1: 'victory',
        game2: 'victory',
        game3: 'victory'
      }
    },
    {
      str: 'LOSE-WIN-WIN',
      val: {
        game1: 'defeat',
        game2: 'victory',
        game3: 'victory'
      }
    },
    {
      str: 'WIN-LOSE-WIN',
      val: {
        game1: 'victory',
        game2: 'defeat',
        game3: 'victory'
      }
    }
  ],
  'defeat': [
    {
      str: 'LOSE-LOSE',
      val: {
        game1: 'defeat',
        game2: 'defeat',
        game3: ''
      }
    },
    {
      str: 'LOSE-WIN-LOSE',
      val: {
        game1: 'defeat',
        game2: 'victory',
        game3: 'defeat'
      }
    },
    {
      str: 'WIN-LOSE-LOSE',
      val: {
        game1: 'victory',
        game2: 'defeat',
        game3: 'defeat'
      }
    }
  ],
  'draw': [
    {
      str: 'DRAW',
      val: {
        game1: 'draw',
        game2: '',
        game3: ''
      }
    },
    {
      str: 'WIN-DRAW',
      val: {
        game1: 'victory',
        game2: 'draw',
        game3: ''
      }
    },
    {
      str: 'LOSE-DRAW',
      val: {
        game1: 'defeat',
        game2: 'draw',
        game3: ''
      }
    },
    {
      str: 'WIN-LOSE-DRAW',
      val: {
        game1: 'victory',
        game2: 'defeat',
        game3: 'draw'
      }
    },
    {
      str: 'LOSE-WIN-DRAW',
      val: {
        game1: 'defeat',
        game2: 'victory',
        game3: 'draw'
      }
    }
  ]
};
