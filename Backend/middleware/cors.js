const corsOptions = {
  origin: ['http://localhost:5173','https://upset-pocket-lion.cyclic.app/'],
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
};

module.exports = { corsOptions }