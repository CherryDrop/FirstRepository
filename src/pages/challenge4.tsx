import React from 'react';

const SocialCard = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 w-full">
      {/* Card 1 */}
      <div className="rounded-lg shadow-md bg-green-100 p-6 max-w-xs">
        <div className="flex items-center mb-4">
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="Icon" className="h-8 w-8 animate-bounce" />
          <h3 className="font-bold ml-2">Social Network 1</h3>
        </div>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor varius dapibus.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 mt-4 block w-full">
          Read More
        </button>
      </div>

      {/* Card 2 */}
      <div className="rounded-lg shadow-md bg-green-100 p-6 max-w-xs">
        <div className="flex items-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" alt="Icon" className="h-8 w-8" />
          <h3 className="font-bold ml-2">Social Network 2</h3>
        </div>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor varius dapibus.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 mt-4 block w-full">
          Read More
        </button>
      </div>

      {/* Card 3 */}
      <div className="rounded-lg shadow-md bg-green-100 p-6 max-w-xs">
        <div className="flex items-center mb-4">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="Icon" className="h-8 w-8" />
          <h3 className="font-bold ml-2">Social Network 3</h3>
        </div>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor varius dapibus.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 mt-4 block w-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default SocialCard;
