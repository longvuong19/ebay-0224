"use client";

const SubMenu = () => {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Saved" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Motors" },
    { id: 5, name: "Fashion" },
    { id: 6, name: "Art" },
    { id: 7, name: "Sport" },
    { id: 8, name: "Health & Beauty" },
    { id: 9, name: "Garden" },
    { id: 10, name: "Industrial Equipment" },
    { id: 11, name: "Toys" },
    { id: 12, name: "Sell" },
  ];

  return (
    <div id="SubMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-[12px] text-[#333] px-2 h-8"
        >
          {menuItems.map((item) => (
            <li key={item.id} className="px-3 hover:underline cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
