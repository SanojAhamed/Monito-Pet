import React from 'react';
import pet1 from '../assets/blog1.png';
import pet2 from '../assets/blog2.png';
import pet3 from '../assets/blog3.png';
import './css/Knowledge.css'; // Import the CSS file

const Knowledge = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h2 className="header-title">You already know?</h2>
        <button className="view-more-button">View more &gt;</button>
      </div>
      <h3 className="pets-title">Useful Pet Knowledge</h3>

      {/* Pet Card Section */}
      <div className="pet-cards">
        {/* Pet Card 1 */}
        <div className="pet-card">
          <img src={pet1} alt="Pet 1" className="pet-image" />
          <div className="category-label">Pet Knowledge</div>
          <h4 className="pet-name">What is a Pomeranian? How to Identify Pomeranian Dogs</h4>
          <p className="pet-description">
            The Pomeranian, also known as the Pomeranian (Pom dog), is always at the top of the cutest pets. Not only that, it's a small, lovely, smart, friendly, and skillful circus dog breed.
          </p>
        </div>

        {/* Pet Card 2 */}
        <div className="pet-card">
          <img src={pet2} alt="Pet 2" className="pet-image" />
          <div className="category-label">Pet Knowledge</div>
          <h4 className="pet-name">Dog Diet You Need To Know</h4>
          <p className="pet-description">
            Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.
          </p>
        </div>

        {/* Pet Card 3 */}
        <div className="pet-card">
          <img src={pet3} alt="Pet 3" className="pet-image" />
          <div className="category-label">Pet Knowledge</div>
          <h4 className="pet-name">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h4>
          <p className="pet-description">
            Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
