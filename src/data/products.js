// Product data - in a real app, this would come from a database or CMS
export const products = {
  'skagen-watch': {
    id: 'skagen-watch',
    name: 'Minimal Watch',
    shortName: 'Minimal Watch',
    category: 'Gear',
    categorySlug: 'gear',
    description: 'Elevate your style with the sophisticated Lryx Watch, a perfect blend of elegance and functionality.',
    longDescription: 'The Skagen Black Men Analogue Watch combines minimalist Scandinavian design with premium craftsmanship. This timepiece features a sleek black dial with silver-tone hands and markers, housed in a durable stainless steel case. The genuine leather strap provides comfort and style, making it perfect for both casual and formal occasions.',
    price: 349.99,
    
    images: [
      { src: '/api/placeholder/400/400', alt: 'Skagen Watch Front View' },
      { src: '/api/placeholder/400/400', alt: 'Skagen Watch Side View' },
      { src: '/api/placeholder/400/400', alt: 'Skagen Watch Strap Detail' },
      { src: '/api/placeholder/400/400', alt: 'Skagen Watch Lifestyle' }
    ],
    features: [
      'Swiss quartz movement',
      'Stainless steel case',
      'Genuine leather strap',
      'Water resistant to 30m',
      'Minimalist design',
      'Scratch-resistant crystal'
    ],
    specifications: {
      'Case Diameter': '40mm',
      'Case Thickness': '8mm',
      'Band Width': '20mm',
      'Movement': 'Swiss Quartz',
      'Water Resistance': '30m',
      'Material': 'Stainless Steel'
    },
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        text: 'Absolutely love this watch! The minimalist design is perfect for everyday wear and the quality is outstanding.'
      },
      {
        name: 'Sarah Miller',
        rating: 5,
        text: 'Great value for money. The design is sleek and modern, perfect for both casual and formal occasions.'
      },
      {
        name: 'Mike Johnson',
        rating: 5,
        text: 'Excellent craftsmanship and comfortable to wear. Highly recommend for anyone who appreciates clean design.'
      }
    ]
  },
  'watch-screen-protector': {
    id: 'watch-screen-protector',
    name: 'Watch Screen Protector',
    shortName: 'Screen Protector',
    category: 'Accessory',
    categorySlug: 'accessory',
    description: 'Premium protection for your Apple Watch with military-grade durability and crystal-clear clarity.',
    longDescription: 'Our Watch Screen Protector is engineered with the latest in protective technology to keep your Apple Watch looking pristine. Made from ultra-tough tempered glass with oleophobic coating, it provides superior scratch resistance while maintaining the original touch sensitivity and visual clarity of your device. The precise fit ensures perfect alignment and edge-to-edge coverage.',
    price: 24.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'Watch Screen Protector Front View' },
      { src: '/api/placeholder/400/400', alt: 'Watch Screen Protector Side View' },
      { src: '/api/placeholder/400/400', alt: 'Watch Screen Protector Installation' },
      { src: '/api/placeholder/400/400', alt: 'Watch Screen Protector on Device' }
    ],
    features: [
      '9H hardness tempered glass',
      'Oleophobic coating',
      'Military-grade drop protection',
      'Crystal-clear transparency',
      'Touch sensitivity maintained',
      'Easy installation kit included'
    ],
    specifications: {
      'Compatibility': 'Apple Watch Series 4-9',
      'Material': 'Tempered Glass',
      'Hardness': '9H',
      'Thickness': '0.33mm',
      'Protection': 'Military Grade Drop Test',
      'Coating': 'Oleophobic & Anti-fingerprint'
    },
    reviews: [
      {
        name: 'Emma Wilson',
        rating: 5,
        text: 'Perfect fit and excellent protection! My watch screen looks brand new even after months of use.'
      },
      {
        name: 'David Chen',
        rating: 5,
        text: 'Easy to install and provides great protection. The clarity is amazing - you can barely tell it\'s there.'
      },
      {
        name: 'Lisa Rodriguez',
        rating: 5,
        text: 'Saved my watch screen multiple times! The quality is outstanding and installation was a breeze.'
      }
    ]
  },
  'buds-2-wireless': {
    id: 'buds-2-wireless',
    name: 'Buds 2 Wireless',
    shortName: 'Buds 2',
    category: 'Gear',
    categorySlug: 'gear',
    description: 'Experience immersive sound with our premium wireless earbuds featuring active noise cancellation.',
    longDescription: 'The Buds 2 Wireless deliver studio-quality audio in a compact, comfortable design. With advanced active noise cancellation technology, these earbuds block out ambient noise so you can focus on your music or calls. The ergonomic fit ensures hours of comfortable wear, while the long battery life keeps you connected throughout the day. Perfect for music lovers, professionals, and anyone who demands the best in wireless audio.',
    price: 179.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'Buds 2 Wireless Front View' },
      { src: '/api/placeholder/400/400', alt: 'Buds 2 Wireless Case View' },
      { src: '/api/placeholder/400/400', alt: 'Buds 2 Wireless in Ear' },
      { src: '/api/placeholder/400/400', alt: 'Buds 2 Wireless Charging' }
    ],
    features: [
      'Active noise cancellation',
      'Studio-quality audio',
      'Ergonomic fit design',
      '24-hour total battery life',
      'Touch controls',
      'Water resistant (IPX4)'
    ],
    specifications: {
      'Driver Size': '12mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '6 hours (24 hours with case)',
      'Connectivity': 'Bluetooth 5.2',
      'Water Resistance': 'IPX4',
      'Charging': 'USB-C & Wireless'
    },
    reviews: [
      {
        name: 'Alex Thompson',
        rating: 5,
        text: 'Incredible sound quality! The noise cancellation is amazing and the battery life exceeds expectations.'
      },
      {
        name: 'Maria Garcia',
        rating: 5,
        text: 'Perfect fit and amazing audio. These are the best wireless earbuds I\'ve ever owned.'
      },
      {
        name: 'James Kim',
        rating: 5,
        text: 'Excellent value for money. The sound is crisp and clear, and the ANC works perfectly.'
      }
    ]
  },
  'ewatch-sf-4': {
    id: 'ewatch-sf-4',
    name: 'eWatch SF 4',
    shortName: 'eWatch SF 4',
    category: 'Technology',
    categorySlug: 'technology',
    description: 'Next-generation smartwatch with advanced health monitoring and seamless connectivity.',
    longDescription: 'The eWatch SF 4 represents the pinnacle of smartwatch technology, combining cutting-edge health monitoring with powerful connectivity features. Track your fitness goals with precision GPS, monitor your heart rate continuously, and stay connected with notifications, calls, and messages. The sleek design features a vibrant AMOLED display that\'s always visible, even in bright sunlight. With water resistance up to 50m, it\'s perfect for swimming and outdoor activities.',
    price: 299.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'eWatch SF 4 Front View' },
      { src: '/api/placeholder/400/400', alt: 'eWatch SF 4 Side View' },
      { src: '/api/placeholder/400/400', alt: 'eWatch SF 4 Health App' },
      { src: '/api/placeholder/400/400', alt: 'eWatch SF 4 Lifestyle' }
    ],
    features: [
      'Advanced health monitoring',
      'GPS tracking',
      'Always-on AMOLED display',
      'Water resistant to 50m',
      '7-day battery life',
      'Smart notifications'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Resolution': '454 x 454 pixels',
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Connectivity': 'Bluetooth 5.0, WiFi',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    },
    reviews: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        text: 'This smartwatch is incredible! The health tracking is accurate and the battery life is impressive.'
      },
      {
        name: 'Michael Brown',
        rating: 5,
        text: 'Perfect for fitness tracking. The GPS is accurate and the heart rate monitor works flawlessly.'
      },
      {
        name: 'Jennifer Lee',
        rating: 5,
        text: 'Love the always-on display and the sleek design. It\'s comfortable to wear all day long.'
      }
    ]
  },
  'logitech-mx-master-3': {
    id: 'logitech-mx-master-3',
    name: 'Logitech MX Master 3',
    shortName: 'MX Master 3',
    category: 'Technology',
    categorySlug: 'technology',
    description: 'Ultra-precise wireless mouse designed for creative professionals and power users.',
    longDescription: 'The Logitech MX Master 3 is the ultimate wireless mouse for creative professionals and power users. Featuring the revolutionary MagSpeed electromagnetic scrolling wheel, it provides ultra-fast scrolling with precision control. The ergonomic design fits perfectly in your hand, reducing fatigue during long work sessions. With up to 70 days of battery life and seamless multi-device connectivity, it\'s the perfect companion for your workflow.',
    price: 99.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'Logitech MX Master 3 Front View' },
      { src: '/api/placeholder/400/400', alt: 'Logitech MX Master 3 Side View' },
      { src: '/api/placeholder/400/400', alt: 'Logitech MX Master 3 Bottom' },
      { src: '/api/placeholder/400/400', alt: 'Logitech MX Master 3 in Use' }
    ],
    features: [
      'MagSpeed electromagnetic scrolling',
      'Ultra-precise 4000 DPI sensor',
      'Ergonomic design',
      '70-day battery life',
      'Multi-device connectivity',
      'Customizable buttons'
    ],
    specifications: {
      'Sensor': 'Darkfield 4000 DPI',
      'Battery Life': '70 days',
      'Connectivity': 'Bluetooth & USB receiver',
      'Compatibility': 'Windows, macOS, Linux',
      'Weight': '141g',
      'Dimensions': '124.9 x 84.3 x 51mm'
    },
    reviews: [
      {
        name: 'Robert Davis',
        rating: 5,
        text: 'The best mouse I\'ve ever used! The MagSpeed scrolling is incredible and the ergonomics are perfect.'
      },
      {
        name: 'Amanda White',
        rating: 5,
        text: 'Perfect for design work. The precision is amazing and the battery life is outstanding.'
      },
      {
        name: 'Chris Martinez',
        rating: 5,
        text: 'Excellent build quality and performance. The multi-device switching works flawlessly.'
      }
    ]
  },
  'edisplay-xe': {
    id: 'edisplay-xe',
    name: 'eDisplay XE TV',
    shortName: 'eDisplay XE',
    category: 'Technology',
    categorySlug: 'technology',
    description: 'Upgrade your workspace with the eDisplay XE and take your productivity to new heights.',
    longDescription: 'The eDisplay XE is a revolutionary display solution designed for modern workspaces. With its ultra-thin bezel design and stunning 4K resolution, this display transforms how you work, create, and collaborate. Perfect for designers, developers, and professionals who demand the best visual experience.',
    price: 199.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'eDisplay XE Front View' },
      { src: '/api/placeholder/400/400', alt: 'eDisplay XE Side View' },
      { src: '/api/placeholder/400/400', alt: 'eDisplay XE Ports' },
      { src: '/api/placeholder/400/400', alt: 'eDisplay XE in Workspace' }
    ],
    features: [
      '4K Ultra HD resolution',
      'Ultra-thin bezel design',
      'HDR support',
      'Multiple connectivity options',
      'Built-in speakers',
      'VESA mount compatible'
    ],
    specifications: {
      'Screen Size': '27 inches',
      'Resolution': '3840 x 2160',
      'Panel Type': 'IPS',
      'Response Time': '5ms',
      'Refresh Rate': '60Hz',
      'Ports': 'HDMI, DisplayPort, USB-C'
    },
    reviews: [
      {
        name: 'Alex Chen',
        rating: 5,
        text: 'Incredible display quality! The 4K resolution makes a huge difference for design work and the thin bezels look amazing.'
      },
      {
        name: 'Emma Wilson',
        rating: 5,
        text: 'Perfect for my home office. The colors are vibrant and the text is crystal clear. Highly recommend for professionals.'
      },
      {
        name: 'David Kim',
        rating: 5,
        text: 'Excellent value for a 4K monitor. The build quality is solid and the performance exceeds my expectations.'
      }
    ]
  },
  'hash-headphones': {
    id: 'hash-headphones',
    name: 'Headphone 21-Bass',
    shortName: 'Headphone 21-Bass',
    category: 'Gear',
    categorySlug: 'gear',
    description: 'Experience deep, powerful bass and crystal-clear audio with the Headphone 21 Bass, perfect for music enthusiasts.',
    longDescription: 'Immerse yourself in premium sound quality with the Hash Active Noise Cancellation Headphones. These over-ear headphones feature advanced noise-canceling technology that blocks out ambient noise, allowing you to focus on your music. The enhanced bass response delivers rich, deep sound that brings your music to life.',
    price: 499.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'Hash Headphones Front View' },
      { src: '/api/placeholder/400/400', alt: 'Hash Headphones Side View' },
      { src: '/api/placeholder/400/400', alt: 'Hash Headphones Folded' },
      { src: '/api/placeholder/400/400', alt: 'Hash Headphones Case' }
    ],
    features: [
      'Active noise cancellation',
      'Enhanced bass response',
      'Bluetooth 5.0',
      '40-hour battery life',
      'Premium build quality',
      'Comfortable ear cushions'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '40 hours',
      'Connectivity': 'Bluetooth 5.0, 3.5mm',
      'Weight': '280g',
      'Foldable': 'Yes'
    },
    reviews: [
      {
        name: 'Lisa Park',
        rating: 5,
        text: 'Amazing sound quality! The bass is deep and rich, and the noise cancellation works perfectly for my daily commute.'
      },
      {
        name: 'Tom Anderson',
        rating: 5,
        text: 'These headphones are incredibly comfortable for long listening sessions. The battery life is impressive too.'
      },
      {
        name: 'Rachel Green',
        rating: 5,
        text: 'Premium build quality and exceptional audio performance. Worth every penny for music lovers.'
      }
    ]
  },
  'phone-case': {
    id: 'phone-case',
    name: 'Phone Black Matte Case',
    shortName: 'Phone Case',
    category: 'Accessory',
    categorySlug: 'accessory',
    description: 'Protect your Phone in style with our sleek and durable iPhone case, combining protection and aesthetics.',
    longDescription: 'Our premium Phone case offers superior protection without compromising on style. The matte black finish provides a sophisticated look while the durable materials ensure your device stays safe from drops and scratches. Perfect fit and easy installation make this case a must-have accessory.',
    price: 29.99,
    images: [
      { src: '/api/placeholder/400/400', alt: 'Phone Case Front View' },
      { src: '/api/placeholder/400/400', alt: 'Phone Case Side View' },
      { src: '/api/placeholder/400/400', alt: 'Phone Case Back View' },
      { src: '/api/placeholder/400/400', alt: 'Phone Case on Device' }
    ],
    features: [
      'Premium matte finish',
      'Drop protection',
      'Scratch resistance',
      'Perfect fit',
      'Easy installation',
      'Lightweight design'
    ],
    specifications: {
      'Compatibility': 'iPhone 14/15 Series',
      'Material': 'Thermoplastic Polyurethane',
      'Protection': 'Military Grade Drop Test',
      'Weight': '25g',
      'Thickness': '2mm',
      'Finish': 'Matte Black'
    },
    reviews: [
      {
        name: 'Chris Taylor',
        rating: 5,
        text: 'Perfect fit and great protection. The matte finish looks premium and feels great in hand.'
      },
      {
        name: 'Maria Garcia',
        rating: 5,
        text: 'Excellent case! Dropped my phone twice and it survived without a scratch. Highly recommend.'
      },
      {
        name: 'James Wilson',
        rating: 5,
        text: 'The quality is outstanding for the price. Fits perfectly and provides excellent protection.'
      }
    ]
  }
};
