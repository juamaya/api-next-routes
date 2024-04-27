export default function handleCostumers(req, res){
   


    res.json({ msg:'Sustituye y Escribe el name en la url y pulsa  intro',
               salida: `Costumers: ${req.query.slug}`})   
}