export default {
  "nodes": [
    {
      "id": 0,
      "name": "a",
      "value": 1,
    },
    {
      "id": 1,
      "name": "b",
      "value": 1,
    },
    {
      "id": 2,
      "name": "add",
      "args": ["x", "y"],
      "body": "console.log(x + y)",
    },
  ],
  "edges": {
    0: [2],
    1: [2],
    2: [],
  },
};
