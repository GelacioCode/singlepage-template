// src/data/propertyData.js
import logo from '../assets/irg_logo.jpg';
// import section1Image from '../assets/13 Family Room.jpg';
// import section2Image from '../assets/1 Living.jpg';
import section1Image from '../assets/Candlewood Shores.webp';
import section2Image from '../assets/outside/1.jpg';

import galleryImage1 from '../assets/2 Living.jpg';
import galleryImage2 from '../assets/3 Living.jpg';
import galleryImage3 from '../assets/4 Dining.jpg';
import galleryImage4 from '../assets/5 Dining.jpg';
import galleryImage5 from '../assets/7 Master.jpg';
import galleryImage6 from '../assets/8 Master.jpg';

import galleryImage7 from '../assets/10 Bedroom 2.jpg';
import galleryImage8 from '../assets/11 Bedroom 3.jpg';

import galleryImage9 from '../assets/13 Family Room.jpg';
import galleryImage10 from '../assets/14 Family Room.jpg';

import galleryImage11 from '../assets/Office.jpg';
import galleryImage12 from '../assets/Office 1.jpg';


import propertyImage from '../assets/16 Family Room.jpg';

import house1 from '../assets/outside/5.jpg';
import house2 from '../assets/House2.jpg';
import house3 from '../assets/House3.jpg';
import house4 from '../assets/House4.jpg';
import house5 from '../assets/House5.jpg';
import house6 from '../assets/House6.jpg';


const propertyData = {
    title: "75 South Lake Shore",
    subheading: "Perfect for Nature Lovers",
    longDescription: `
        Nestled within the sought-after Candlewood Shores community, 75 South Lake Shore Drive is a quintessential example of lakeside living at its finest. This charming Cape Cod–style home, built in 1950, offers 1,572 square feet of thoughtfully designed living space, featuring three spacious bedrooms and two well-appointed bathrooms. Perched on an elevated lot, the residence commands breathtaking, unobstructed views of Candlewood Lake, immersing you in the beauty of nature from nearly every room. The home’s warm and inviting interior boasts an open-concept layout, seamlessly blending the living, dining, and kitchen areas to create a perfect space for both everyday living and entertaining. The kitchen is a chef’s delight, complete with sleek stainless steel appliances, ample cabinetry, and modern finishes, while the cozy living area, highlighted by a rustic stone fireplace, offers the perfect spot to unwind after a day on the water.

        The primary bedroom serves as a private sanctuary, complete with soaring cathedral ceilings, a walk-in closet, and a private balcony that provides stunning views of the lake—an ideal setting to enjoy your morning coffee or an evening sunset. Outdoor living is equally inviting, with a wrap-around deck perfect for hosting gatherings, and a partially fenced yard offering privacy and room for recreation. The property’s location within the exclusive Candlewood Shores community grants residents access to exceptional amenities, including a private beach, boat docks, a playground, and community events that foster a vibrant neighborhood spirit. Whether you’re seeking a serene retreat or a place to entertain and create lasting memories, 75 South Lake Shore Drive offers an unparalleled combination of comfort, style, and a deep connection to the natural beauty of Candlewood Lake.`,
    longImage: propertyImage,
    address: "Brookfield, CT 06804",
    description: "Experience the serene beauty of Candlewood Lake with all the comforts in your home.",
    headerLogo: logo,
    section1Image: section1Image,
    section2Image: section2Image,
    images: [
      galleryImage1,
      galleryImage2,
      galleryImage3,
      galleryImage4,
      galleryImage5,
      galleryImage6,
      galleryImage7,
      galleryImage8,
      galleryImage9,
      galleryImage10,
      galleryImage11,
      galleryImage12
    ],
    videoUrl: "/path/to/video.mp4",
    details: {
      paragraphDescription: "Candlewood Shores, nestled along the eastern shore of Candlewood Lake in Brookfield, Connecticut, is a private residential community renowned for its picturesque landscapes and vibrant community spirit. Established in 1948 as a summer retreat, it has evolved into a year-round haven offering residents exclusive access to a pristine beach, boating facilities, and a playground. The community fosters a close-knit atmosphere through various planned activities, enhancing the serene lakeside living experience. Its strategic location provides a tranquil environment while ensuring convenient access to nearby urban amenities, making it an ideal setting for both relaxation and active lifestyles.",
      bedrooms: 3,
      baths: 2,
      lot: 6969,
      squareFeet: 1572,
      stainless: "Yes",
      graniteCounterTops: "Yes",
      poolArea: "Yes",
      waterFront: "Yes",
      dock: "Yes"
      
    },
    floorplanimages: [
      house1,
      house2,
      house3,
      house4,
      house5,
      house6
    ],
    iframe3d: "https://my.matterport.com/show/?m=GnhhusnJJPs&play=1&qs=1",
};

export default propertyData;
