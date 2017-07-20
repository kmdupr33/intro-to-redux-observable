var countries = [
  { name: "United States", population: 300e6 },
  { name: "Canada", population: 36e6 },
  { name: "Mexico", population: 107e6 }
];

function getPopulations(countries) {
  var populations = [];
  for (var index = 0; index < countries.length; index++) {
    var element = countries[index];
    populations[index] = element.population;
  }
  return populations;
}

const node3 = { value: { name: "Mexico", population: 107e6 }, 
  next: null };
const node2 = { value: { name: "Canada", population: 36e6 }, 
  next: node3 };
const node1 = { value: { name: "United States", population: 300e6 }, 
  next: node2 };
const countriesLinkedList = node1;

let object = {};
object[Symbol.iterator] = () => ({
  next: () => ({ value: null, done: true})
});

countriesLinkedList[Symbol.iterator] = function* () {
  let currentNode = this;
  while (currentNode != null) {
    yield currentNode.value;
    currentNode = currentNode.next;
  }
};

// for (let item of linkedList) {
//   console.log(item);
// }

const countries = [
  { name: "United States", population: 300e6 },
  { name: "Canada", population: 36e6 },
  { name: "Mexico", population: 107e6 }
];

_.map(...countriesLinkedList, 
  country => country.population)

for (var index in countries) {
  console.log(countries[index]);
}

[
  { type: TYPE_QUERY_STRING, payload: '' },
  { type: TYPE_QUERY_STRING, payload: 'F' },
  { type: TYPE_QUERY_STRING, payload: 'Fr' },
  { type: TYPE_QUERY_STRING, payload: 'Fra' },
  { type: TYPE_QUERY_STRING, payload: 'Fran' },
  { type: TYPE_QUERY_STRING, payload: 'Franc' },
  { type: TYPE_QUERY_STRING, payload: 'France' }
]
// how do we debounce?
.filter(({payload}) => payload > 2)
.map(({payload}) => makeReplaceResultsAction(payload)) 
// also, querying a datasource from the string should be async

const epic = (action$, store) => newActionObservable