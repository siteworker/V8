async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { message: 'Snoopy at your Service..' }
    })
  }
  
  module.exports = routes