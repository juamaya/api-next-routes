export default function produts(req, res) {



  res.status(200).json({
    message:"produts endpoint",
    produts:[
      {
        "name": "Harry Potter and the Philosopher's Stone",
        "price": "20.00",
        "year": "1997"
      },
      {
        "name": "The Hobbit",
        "price": "15.00",
        "year": "1937"
      },
      {
        "name": "1984",
        "price": "12.50",
        "year": "1949"
      },
      {
        "name": "To Kill a Mockingbird",
        "price": "10.00",
        "year": "1960"
      },
      {
        "name": "The Great Gatsby",
        "price": "8.99",
        "year": "1925"
      },
      {
        "name": "Pride and Prejudice",
        "price": "9.50",
        "year": "1813"
      },
      {
        "name": "The Catcher in the Rye",
        "price": "11.25",
        "year": "1951"
      },
      {
        "name": "The Lord of the Rings",
        "price": "30.00",
        "year": "1954"
      },
      {
        "name": "Animal Farm",
        "price": "7.75",
        "year": "1945"
      },
      {
        "name": "The Chronicles of Narnia",
        "price": "18.50",
        "year": "1950"
      }
    ]
})












  // res.status(200).json(`Method: ${req.method}`);

  /*  if (req.method === "GET") {
    res.status(200).json({ msg: `Method: ${req.method}` });
  } else {
    res.status(500).json({ msg: ` Error Method: ${req.method}` });
  } */

/*   switch (req.method) {
    case "GET":
      res.status(200).json({ msg: `Method: ${req.method}` });
      break;
    case "POST":
      res.status(200).json({ msg: `Method: ${req.method}` });
      break;
    case "PUT":
      res.status(200).json({ msg: `Method: ${req.method}` });
      break;
    case "DELETE":
      res.status(200).json({ msg: `Method: ${req.method}` });
      break;
    default:
      res.status(200).json({ msg: `Error Method: ${req.method}` });
      break;
  } */
}
