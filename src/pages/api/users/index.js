export default function users(req, res){
    res.status(200).json({
        message:"users endpoint",
        users:[
            {
              "name": "Russia",
              "capital": "Moscow",
              "country_code": "RU",
              "description": "It is the most populous country in Europe and one of the world's largest countries in terms of area."
            },
            {
              "name": "Germany",
              "capital": "Berlin",
              "country_code": "DE",
              "description": "Germany has a social market economy with a highly skilled labor force, large capital stock, a low level of corruption, and a high level of innovation."
            },
            {
              "name": "United Kingdom",
              "capital": "London",
              "country_code": "GB",
              "description": "The UK, a leading trading power and financial center, is the third-largest economy in Europe after Germany and France."
            },
            {
              "name": "France",
              "capital": "Paris",
              "country_code": "FR",
              "description": "France is a semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial center."
            },
            {
              "name": "Italy",
              "capital": "Rome",
              "country_code": "IT",
              "description": "Italy has a developed industrial north, dominated by private companies, and a less-developed, highly subsidized agriculture-based south."
            },
            {
              "name": "Spain",
              "capital": "Madrid",
              "country_code": "ES",
              "description": "Spain is a secular parliamentary democracy and a parliamentary monarchy, with King Felipe VI as head of state."
            },
            {
              "name": "Ukraine",
              "capital": "Kyiv",
              "country_code": "UA",
              "description": "Ukraine includes the Crimean Peninsula, which Russia annexed in 2014 but is still recognized by most international bodies as part of Ukraine."
            },
            {
              "name": "Poland",
              "capital": "Warsaw",
              "country_code": "PL",
              "description": "Poland's economy is considered to be one of the healthiest among the post-Communist countries and is currently one of the fast-growing within the EU."
            },
            {
              "name": "Romania",
              "capital": "Bucharest",
              "country_code": "RO",
              "description": "Romania is the twelfth-largest country in Europe, and the sixth-most populous member state of the European Union."
            },
            {
              "name": "Netherlands",
              "capital": "Amsterdam",
              "country_code": "NL",
              "description": "The Netherlands has a developed economy and has been playing a special role in the European economy for many centuries."
            }
          ]
    })
}