import React, { useState } from 'react';
import db from '../../DataBase/Database';


const HNYwish=()=>{
    const [data,setData]=useState({
        wish:'',
        author:''
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        })
    };


    let Id =db.ref('/HNYWishes')
    let addItem=(item1,item2)=>{
        Id.push({
            wish:item1,
            author:item2
        });
    };

    const formSubmit=()=>{
        addItem(data.wish,data.author)
    }
    return(
        <div>
            <h2 className="text-center">HNY Wishes Data</h2>
            <form className="form" onSubmit={formSubmit}>
                <div className="">
                    <label>Write You Wish ::</label>
                    <textarea 
                     name="wish"
                     required
                     value={data.wish}
                     onChange={InputEvent}
                     placeholder="Enter Your wishes.." 
                     />
                </div>
                <div>
                    <label>Name Of Author ::</label>
                    <input 
                     name="author"
                     required
                     value={data.author}
                     onChange={InputEvent}
                     placeholder="Enter Your Name"
                    />
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default HNYwish;