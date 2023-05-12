const { Router } = require('express');
// const videogameRouter=require('./videogameRouter');
const tipoSala=require('./tipo_salaRoute');
const persona=require('./personaRoute')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/tiposala',tipoSala)
router.use('/persona',persona)
module.exports = router;
