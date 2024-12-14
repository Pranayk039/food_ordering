export function Dosa(){

    const dosa=[
        {id:1,hotel:"varalakshmi",name:'masala dosa',cost:50},
        {id:2,hotel:"Radhika",name:'paneer dosa',cost:100},
        {id:3,hotel:"Ragevendra",name:'onion dosa',cost:40},
        {id:4,hotel:"barkas",name:'plain dosa',cost:20},
        {id:5,hotel:"pista house",name:'carrot dosa',cost:30},
        {id:6,hotel:"manus kitchen",name:'pasara dosa',cost:50}
    ]
   return(
        <div>
            {dosa.map(d =>(
                <div key={d.id} className="item">
                <div className="hotel">{d.hotel}</div>
                <div className="name">{d.name}</div>
                <div className="cost">{d.cost}</div>
        </div>
            ))}
        </div>
   )
}