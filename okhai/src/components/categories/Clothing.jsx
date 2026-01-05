import React from 'react';

const Clothing = () => {
  // Menu data structure
  const menuData = {
    women: {
      title: 'Women',
      items: [
        { name: 'All Clothing', path: '/women/all-clothing' },
        { name: 'New Arrivals', path: '/women/new-arrivals' },
        { name: 'Kurtas & Kurta Sets', path: '/women/kurtas' },
        { name: 'Dresses & Jumpsuits', path: '/women/dresses' },
        { name: 'Tops & Blouses', path: '/women/tops' },
        { name: 'Jackets & Blazers', path: '/women/jackets' },
        { name: 'Co-ord Sets', path: '/women/coord-sets' },
        { name: 'Wrap Dresses', path: '/women/wrap-dresses' },
        { name: 'Kaftans', path: '/women/kaftans' },
        { name: 'Bottom Wear', path: '/women/bottom-wear' },
        { name: 'Dupattas, Scarfs & Stoles', path: '/women/dupattas' },
        { name: 'Night Suits', path: '/women/night-suits' }
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
        { name: 'Kalamkari', path: '/crafts/kalamkari' }
      ]
    }
  };

  const featuredSections = [
    {
      title: 'Artisanal Tops',
      image: '/images/artisanal-tops.jpg',
      path: '/collections/artisanal-tops'
    },
    {
      title: 'Artisanal Dresses',
      image: '/images/artisanal-dresses.jpg',
      path: '/collections/artisanal-dresses'
    }
  ];

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    // Add your navigation logic here (React Router)
  };

  return (
    <div className="absolute mt-2 p-8 bg-white border-t-2 border-orange-500 shadow-2xl left-0 min-w-[1000px] z-50">
      <div className="flex gap-10">
        
        {/* Women Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider">
            {menuData.women.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.women.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-2 text-sm text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Men Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider">
            {menuData.men.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.men.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-2 text-sm text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Kids Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider">
            {menuData.kids.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.kids.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-2 text-sm text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Crafts Section */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider">
            {menuData.crafts.title}
          </h3>
          <ul className="list-none p-0 m-0">
            {menuData.crafts.items.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="py-2 text-sm text-black cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Section */}
        <div className="flex flex-col gap-5 min-w-[200px]">
          {featuredSections.map((section, index) => (
            <div 
              key={index}
              className="cursor-pointer"
              onClick={() => handleNavigation(section.path)}
            >
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-48 object-cover block rounded-lg"
              />
              <p className="text-center mt-2.5 text-sm font-semibold text-gray-800">
                {section.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Clothing;
