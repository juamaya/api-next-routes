export default function handlePost(req, res) {
    
  //  res.json({msg: `Params: ${  req.query }`})

  // res.json({msg: `Params: ${JSON.stringify(req.query)}`})

  // res.json({msg: `Params: ${JSON.stringify(req.query.id)}`})

  res.json({ msg:'Sustituye y Escribe el numero de ID el la url y pulsa  intro',
  salida:`Parametro capturado de la url: ${req.query.id}` });
}
