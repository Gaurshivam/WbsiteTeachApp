import React from 'react';
import './Categories.css'

const Categories = () => {
    const Language = "https://i.cbc.ca/1.5627054.1593107392!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/language.jpg"
    const Cooking  = "https://wallpapercave.com/wp/wp1955211.jpg"
    const Music = "https://wallpapercave.com/wp/wp3413579.jpg"
    const Arts$Craft = "https://images.creativemarket.com/0.1.0/ps/7060886/1820/1213/m1/fpnw/wm1/jgem4t3x1dvdfy1iuhv0hrbmz09pobzey6i6kim6mef6jiribuujg6xo0ykpfcp2-.jpg?1569918428&s=2ad58ae0e186a81269a8c5890627971f"
    const Yoga = "https://th.bing.com/th/id/R.f6e0a8e4d634c813fb400bf409ea6c4e?rik=5iQ70BIYpF9Y4w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2fe%2f1171243-large-yoga-desktop-wallpaper-1920x1080-picture.jpg&ehk=YvLNz9YmCzKvtkmIlXW44V5PK6irdrrteZhMh2bJzq0%3d&risl=&pid=ImgRaw&r=0"
    const Academics = "https://wallpapercave.com/wp/wp7328077.jpg"
    const BacktoRoots = "https://wallpapercave.com/wp/wp2089219.jpg"
    const Funteresting = "https://wallpaperaccess.com/full/1485253.jpg"

    const category = [Language,Cooking,Music,Arts$Craft,Yoga,Academics, BacktoRoots,Funteresting]
    const Name = ["Language","Cooking","Music","Arts$Craft","Yoga","Academics", "BacktoRoots","Funteresting"]
  return (
    <div className='Categories'>
      <h2>Browse by category</h2>
      <div className='CategoryImage'>
        {
            category.map((items,i)=>{
                return(
                    <div className='ImageConatiner' key={i}>
                        <img src={items} alt='Imaged' className='MainImaged' />
                        <h6 className='CategoryH6'>{Name[i]}</h6>
                        <hr className='hrTag' />
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default Categories;
