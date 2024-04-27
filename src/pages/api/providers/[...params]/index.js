export default function handleCostumers(req, res){
   res.status(200).json({
                msg:'Sustituye y Escribe los parametros p1, p2, p3  en la url y pulsa  intro',
               salida: `Providers: ${req.query.params}`})
      
    
   // res.status(200).json({msg: `Providers: ${req.query.params[2]}`})
}