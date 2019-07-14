import React from 'react';
import { useContext } from 'react';
import {RoomContext} from '../contex';
import Title from '../components/Title'; 

// get unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
       <section className="filter-container">
           <Title title="search rooms"></Title>
           <form className="filter-form">
               {/*select type */}
               <div className="form-group">
                   <label htmlFor="type">room type</label>
                   <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                       {types}
                   </select>
               </div>
               {/*end of select type */}

               {/*guests */}
                <div className="form-group">
                   <label htmlFor="capacity">Guests</label>
                   <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                       {people}
                   </select>
               </div>
               {/*end of guests */}

               {/*room price */}
               <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
                     onChange={handleChange} className="form-control"></input>
               </div>
               {/*end of room price */}


               {/*size */}
               <div className="form-group">
                   <label htmlFor="size">room size</label>
                   <div className="class-inputs">
                       <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange}
                       className="size-input"></input>
                       <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange}
                       className="size-input"></input>
                   </div>
               </div>
               {/*end of size */}
               
               
               {/* extra filters*/}
               <div className="form-group">
                   <div className="single-extra">
                       <input 
                       type="checkbox" 
                       name="breakfast" 
                       id="breakfast" 
                       checked={breakfast} 
                       onChange={handleChange}></input>
                       <label htmlFor="breakfast">Breakfast</label>
                   </div>
                   <div className="single-extra">
                       <input 
                       type="checkbox" 
                       name="pets" 
                       id="pets" 
                       checked={pets} 
                       onChange={handleChange}></input>
                       <label htmlFor="pets">Pets</label>
                   </div>
               </div>
               {/*end of extra filters */}
           </form>
       </section>
    )
}
