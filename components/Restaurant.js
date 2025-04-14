

export const Restaurant=({resname})=>{
    const {name,cloudinaryImageId,cuisines,avgRating}=resname?.info;

    return(
        <div className="restcard">
        <div> {name} </div>
       <div><img className="biryani"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/></div>

       <h1 className="price">$100</h1>
       <h2 className="si">{cuisines}</h2>
       <div> {avgRating} </div>
 
        </div>

    )
    
   
}