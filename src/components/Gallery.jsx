import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/gallery/layout.css';
import './styles/gallery/masonry.css';
import './styles/gallery/modal.css';
import './styles/gallery/animations.css';
import './styles/gallery/responsiveness.css';
// import './styles/gallery/swatches.css';

const Gallery = () => {
    const navigate= useNavigate();

  useEffect(() => {

    // Swatches.js functionality with animations
    const swatches = document.querySelectorAll('.swatch');
  
    swatches.forEach(swatch => {
      const color = swatch.getAttribute('data-color');
  
      // Create and append tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = color;
      swatch.appendChild(tooltip);
  
      // Hover animation for tooltip and swatch scaling
      swatch.addEventListener('mouseover', () => {
        tooltip.style.opacity = '1';
        swatch.style.transform = 'scale(1.1)';
      });
  
      swatch.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
        swatch.style.transform = 'scale(1)';
      });
    });
    

    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.masonry-item');

      items.forEach(item => {
        const title = item.querySelector('.masonry-item-title').textContent.toLowerCase();
        const artist = item.querySelector('.masonry-item-artist').textContent.toLowerCase();

        if (title.includes(searchTerm) || artist.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });

    const filterSelect = document.querySelector('.filter-select');
    filterSelect.addEventListener('change', (e) => {
      console.log('Filter changed:', e.target.value);
    });

    const artworks = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `Artwork ${i + 1}`,
      artist: `Artist ${i + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      dimensions: '30x40 cm',
      medium: 'Mixed Media',
      year: '2024',
      image: `images/im${i + 1}.jpeg`
    }));

    function createMasonryGrid() {
      const grid = document.getElementById('masonryGrid');
      
      // Clear the grid before adding items
      grid.innerHTML = ''; 
   
      artworks.forEach(artwork => {
         const height = Math.floor(Math.random() * 200) + 200;
         const item = document.createElement('div');
         item.className = 'masonry-item';
         item.innerHTML = `
            <div class="masonry-item-image" style="height: ${height}px; background-size: cover;">
               <img src="${artwork.image}" alt="${artwork.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>    
            <div class="masonry-item-overlay">
               <h3 class="masonry-item-title">${artwork.title}</h3>
               <p class="masonry-item-artist">${artwork.artist}</p>
            </div>
         `;
   
         item.addEventListener('click', () => openModal(artwork));
         grid.appendChild(item);
      });
   }

    createMasonryGrid();

    function openModal(artwork) {
      const modal = document.getElementById('artModal');

      modal.querySelector('.artwork-title').textContent = artwork.title;
      modal.querySelector('.artwork-artist').textContent = artwork.artist;
      modal.querySelector('.artwork-description').textContent = artwork.description;
      modal.querySelector('.dimensions').textContent = artwork.dimensions;
      modal.querySelector('.medium').textContent = artwork.medium;
      modal.querySelector('.year').textContent = artwork.year;

      const modalImage = modal.querySelector('.modal-image');
      modalImage.src = artwork.image;
      modalImage.alt = artwork.title;

      const downloadButton = modal.querySelector('.download-button');
      downloadButton.onclick = () => {
        const link = document.createElement('a');
        link.href = artwork.image;
        link.download = artwork.title;
        link.click();
      };

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    document.querySelector('.close-button').addEventListener('click', () => {
      document.getElementById('artModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
      const modal = document.getElementById('artModal');
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

  }, []);

  return (
    <div  >
<header className="header bg-black/5 px-2 py-4 fixed top-0 left-0 w-full z-10 backdrop-blur flex items-center justify-between shadow-md rounded-b-[25px]">
  <h1 className="header-title m-0 font-serif font-thin text-[40px] text-white">Art Gallery</h1>
  <div className="search-container flex-1 max-w-[600px] mx-4">
    <input
      type="text"
      className="search-input w-full px-5 py-2 rounded-full bg-gray-500/30 text-white text-sm transition-all focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-white/10"
      placeholder="Search by art name, artist, event..."
    />
  </div>
  <div className="controls flex gap-4 items-center">
    <select className="filter-select px-3 py-2 border border-gray-500 text-sm rounded-md bg-white/10 text-white cursor-pointer">
      <option value="event">Filter by Event</option>
      <option value="date">Filter by Date</option>
      <option value="artist">Filter by Artist</option>
    </select>
    <button
      className="home-button outline-none cursor-pointer border-none px-6 py-2.5 m-1 font-sans relative inline-block tracking-wide font-semibold text-sm rounded-full overflow-hidden bg-[#efebfb] text-gray-800 transition-transform hover:bg-red-600 hover:text-white hover:-translate-y-0.5"
      onClick={() => navigate('/')}
    >
      Home
    </button>
  </div>
</header>


      {/* <div className="swatches-container">
        <div className="swatch" id="swatch1" style={{ backgroundColor: '#968F8C' }} data-color="#968F8C"></div>
        <div className="swatch" id="swatch2" style={{ backgroundColor: '#fff' }} data-color="#FFFF"></div>
        <div className="swatch" id="swatch3" style={{ backgroundColor: '#e19e40' }} data-color="#E19E40"></div>
        <div className="swatch" id="swatch4" style={{ backgroundColor: '#de1515' }} data-color="#DE1515"></div>
      </div> */}

      <main className="gallery-container" style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '20px', backdropFilter: 'blur(8px)',height:'600px', width:'1400px'  }}>
        <div className="masonry-grid" id="masonryGrid"></div>
      </main>

      <div className="modall" id="artModal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <div className="modal-image-container">
            <img src="" alt="Artwork" className="modal-image" />
          </div>
          <div className="modal-info">
            <h2 className="artwork-title">Artwork Title</h2>
            <p className="artwork-artist">Artist Name</p>
            <p className="artwork-description">Description of the artwork goes here...</p>
            <div className="artwork-details">
              <p><strong>Dimensions:</strong> <span className="dimensions">30x40 cm</span></p>
              <p><strong>Medium:</strong> <span className="medium">Oil on Canvas</span></p>
              <p><strong>Year:</strong> <span className="year">2024</span></p>
            </div>
            <div className="action-buttons">
              <button className="buy-button">Buy Artwork</button>
              <button className="download-button">Download</button>
            </div>
            <div className="review-section">
              <h3>Write a Review</h3>
              <textarea placeholder="Share your thoughts about this artwork..."></textarea>
              <button className="send-review">Send Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;