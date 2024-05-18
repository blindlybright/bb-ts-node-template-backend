type TSex = 'female' | 'male'

type TCatColor = 'red' | 'green' | 'blue'

type TCat = {
  name: string;
  color: TCatColor;
  sex: TSex
}

const cat: TCat = {
  name: 'Meowrry',
  color: 'blue',
  sex: 'female',
}



console.log('cat is: ', JSON.stringify(cat));
