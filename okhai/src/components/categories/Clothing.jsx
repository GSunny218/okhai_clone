import React from 'react';
import FeaturedTop from "../../assets/company/clothingPageImages/artisanal-tops.avif";
import FeaturedDress from "../../assets/company/clothingPageImages/artisanal-dresses.avif";


const Clothing = () => {
  // Menu data structure
  const menuData = {
    women: {
      title: 'Women',
      items: [
        { name: 'All Clothing', path: '../../pages/women/all-clothing' },
        { name: 'New Arrivals', path: '../../pages/women/new-arrivals' },
        { name: 'Kurtas & Kurta Sets', path: '../../pages/women/kurtas' },
        { name: 'Dresses & Jumpsuits', path: '../../pages/women/dresses' },
        { name: 'Tops & Blouses', path: '../../pages/women/tops' },
        { name: 'Jackets & Blazers', path: '../../pages/women/jackets' },
        { name: 'Co-ord Sets', path: '../../pages/women/coord-sets' },
        { name: 'Wrap Dresses', path: '../../pages/women/wrap-dresses' },
        { name: 'Kaftans', path: '../../pages/women/kaftans' },
        { name: 'Bottom Wear', path: '../../pages/women/bottom-wear' },
        { name: 'Dupattas, Scarfs & Stoles', path: '../../pages/women/dupattas' },
        { name: 'Night Suits', path: '../../pages/women/night-suits' }
      ]
    },
    men: {
      title: 'Men',
      items: [
        { name: 'Kurtas', path: '/men/kurtas' },
        { name: 'Ties', path: '/men/ties' },
        { name: 'Shirts', path: '/men/shirts' },
        { name: 'Shorts', path: '/men/shorts' }
      ]
    },
    kids: {
      title: 'Kids',
      items: [
        { name: 'Kids Clothing', path: '/kids/clothing' },
        { name: 'Furnishing', path: '/kids/furnishing' },
        { name: 'Kids Winterwear', path: '/kids/winterwear' }
      ]
    },
    crafts: {
      title: 'Crafts',
      items: [
        { name: 'Mirror Work', path: '/crafts/mirror-work' },
        { name: 'Applique', path: '/crafts/applique' },
        { name: 'Hand Embroidered', path: '/crafts/hand-embroidered' },
        { name: 'Ikat', path: '/crafts/ikat' },
        { name: 'Suf Embroidery', path: '/crafts/suf-embroidery' },
        { name: 'Ajrakh', path: '/crafts/ajrakh' },
        { name: 'Neela - Indigo', path: '/crafts/neela-indigo' },
        { name: 'Tie and Dye', path: '/crafts/tie-dye' },
        { name: 'Mukaish', path: '/crafts/mukaish' },
        { name: 'Handblock Print', path: '/crafts/handblock-print' },
        { name: 'Hand Painted - Apparel', path: '/crafts/hand-painted' },
        { name: 'Gota Patti', path: '/crafts/gota-patti' },
        //{ name: 'Kalamkari', path: '/crafts/kalamkari' }
      ]
    }
  };

  const featuredSections = [
    {
      title: 'Artisanal Tops',
      image: FeaturedDress,
      path: '/collections/artisanal-tops'
    },
    {
      title: 'Artisanal Dresses',
      image: FeaturedTop,
      path: '/collections/artisanal-dresses'
    }
  ];

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    // Add your navigation logic here (React Router)
  };

  return (
    <div className="h-auto w-[1200px] grid grid-cols-6 gap-1 p-1 text-sm font-serif bg-white">
      
        
        {/* Women Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {menuData.women.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.women.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-1.5 text-xs text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Men Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {menuData.men.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.men.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-1.5 text-xs text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Kids Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {menuData.kids.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.kids.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-1.5 text-xs text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Crafts Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {menuData.crafts.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.crafts.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-1.5 text-xs text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Section */}
        <div className="col-span-2 flex gap-5">

          {featuredSections.map((section, index) => (
            <div 
              key={index}
              className="cursor-pointer"
              onClick={() => handleNavigation(section.path)}
            >
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-72 object-cover rounded-none"
              />
              <p className=" mt-2.5 text-sm font-semibold text-gray-800">
                {section.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    
  );
};

export default Clothing;
