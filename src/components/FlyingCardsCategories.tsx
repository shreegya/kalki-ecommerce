import React, { useState, useEffect, useRef } from 'react';

interface CategoryCard {
  id: string;
  title: string;
  tagline: string;
  image: string;
  productCount: string;
  color: string;
  position: {
    x: number;
    y: number;
    rotate: number;
  };
  size: 'small' | 'large';
}

const categories: CategoryCard[] = [
  {
    id: 'electronics',
    title: 'Electronics',
    tagline: 'Latest Tech & Innovation',
    image: '/hero-image.jpg',
    productCount: '2,500+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: -162, y: -200, rotate: 0 },
    size: 'small'
  },
  {
    id: 'fashion',
    title: 'Fashion',
    tagline: 'Style That Speaks',
    image: '/hero-image1.jpg',
    productCount: '1,800+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: 162, y: -200, rotate: 0 },
    size: 'small'
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    tagline: 'Your Perfect Space',
    image: '/hero-image11.jpg',
    productCount: '3,200+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: -162, y: 80, rotate: 0 },
    size: 'small'
  },
  {
    id: 'sports-fitness',
    title: 'Sports & Fitness',
    tagline: 'Active Lifestyle',
    image: '/hero-image.jpg',
    productCount: '1,500+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: 162, y: 80, rotate: 0 },
    size: 'small'
  },
  {
    id: 'beauty-wellness',
    title: 'Beauty & Wellness',
    tagline: 'Look & Feel Amazing',
    image: '/hero-image.jpg',
    productCount: '2,100+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: -500, y: -50, rotate: 0 },
    size: 'large'
  },
  {
    id: 'books-media',
    title: 'Books & Media',
    tagline: 'Discover Stories',
    image: '/hero-image.jpg',
    productCount: '4,000+ Products',
    color: 'from-gray-500/30 to-black/20',
    position: { x: 500, y: -50, rotate: 0 },
    size: 'large'
  }
];

const FlyingCardsCategories: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true);
            
            // Add landing bounce effect after animation completes
            setTimeout(() => {
              Object.values(cardRefs.current).forEach((card) => {
                if (card) {
                  card.classList.add('landed');
                  setTimeout(() => {
                    card.classList.remove('landed');
                  }, 600);
                }
              });
            }, 1500); // After all cards have finished flying
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  const handleCardClick = (categoryId: string) => {
    // Add click animation
    const card = cardRefs.current[categoryId];
    if (card) {
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = '';
        // Navigate to category page
        window.location.href = `/store?category=${categoryId}`;
      }, 150);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, categoryId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(categoryId);
    }
  };

  const getCardStyle = (category: CategoryCard, index: number) => {
    if (prefersReducedMotion) {
      // Final position for reduced motion
      return {
        transform: `translate(${category.position.x}px, ${category.position.y}px) rotate(0deg) scale(1)`,
        opacity: 1,
        filter: 'blur(0px)',
        transition: 'all 0.3s ease-out'
      };
    }

    // Initial state - all cards stacked in center
    const initialTransform = 'translate(-50%, -50%) scale(0.8) rotate(0deg)';
    const finalTransform = `translate(calc(-50% + ${category.position.x}px), calc(-50% + ${category.position.y}px)) scale(1) rotate(0deg)`;
    
    return {
      transform: isAnimated ? finalTransform : initialTransform,
      opacity: isAnimated ? 1 : 0.8,
      filter: isAnimated ? 'blur(0px)' : 'blur(2px)',
      transition: isAnimated 
        ? `all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 200}ms`
        : `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 100}ms`
    };
  };

  return (
    <section ref={sectionRef} className="py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-rose-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
            Explore Our Categories
            
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
            Discover amazing products across our carefully curated categories
          </p>
        </div>

        {/* Flying Cards Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Cards Container - Centered for initial stacking */}
          <div className="relative w-[1000px] h-[524px] flying-card-container">
            {categories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => {
                  if (el) {
                    cardRefs.current[category.id] = el;
                  }
                }}
                className={`
                  absolute top-1/2 left-1/2
                  group cursor-pointer rounded-2xl overflow-hidden
                  focus:outline-none focus:ring-4 focus:ring-blue-500/50
                  flying-card
                  ${category.size === 'large' ? 'w-[350px] h-[300px] large' : 'w-[300px] h-[250px]'}
                  ${hoveredCard === category.id ? 'z-30' : 'z-10'}
                `}
                style={{
                  ...getCardStyle(category, index),
                  willChange: 'transform, opacity, filter',
                  backfaceVisibility: 'hidden'
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(category.id)}
                onKeyDown={(e) => handleKeyDown(e, category.id)}
                tabIndex={0}
                role="button"
                aria-label={`Browse ${category.title} category with ${category.productCount}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      prefersReducedMotion ? '' : 'group-hover:scale-110'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">

                  {/* Category Title */}
                  <h3 className={`${category.size === 'large' ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-2 leading-tight`} style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
                    {category.title}
                  </h3>

                  {/* Tagline */}
                  <p className={`text-white/90 ${category.size === 'large' ? 'text-base' : 'text-sm'} mb-3 font-normal`} style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
                    {category.tagline}
                  </p>

                  {/* Product Count */}
                  <div className="flex items-center justify-between">
                    <span className={`text-white/80 ${category.size === 'large' ? 'text-sm' : 'text-xs'} font-medium`} style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
                      {category.productCount}
                    </span>
                    <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      prefersReducedMotion ? '' : 'group-hover:opacity-100'
                    }`}>
                      <svg className={`${category.size === 'large' ? 'w-6 h-6' : 'w-5 h-5'} text-white transition-transform duration-300 ${
                        prefersReducedMotion ? '' : 'transform group-hover:translate-x-1'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Subtle shadow for depth */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Categories CTA */}
        <div className="text-center -mt-15">
          <button className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black text-lg font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
            View All Categories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlyingCardsCategories;
