import React from 'react';
import bar from '../../assets/img/bar.jpg';
import deluxe from '../../assets/img/deluxe.jpg';
import double from '../../assets/img/double.jpg';
import family from '../../assets/img/family.jpg';
import lawn from '../../assets/img/lawn.jpg';
import pool from '../../assets/img/pool.jpg';
import restraunt from '../../assets/img/restraunt.jpg';
import single from '../../assets/img/single.jpg';
import sofa from '../../assets/img/sofa.jpg';
import tv from '../../assets/img/tv.jpg';

const Gallery = () => {
	return (
		<div className="lead-page">
			<div className="gallery-container">
				<h2 className="lead-heading">Gallery</h2>
				<div className="gallery">
					<div className="image">
						<img className="lazy-image" src={bar} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={deluxe} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={double} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={family} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={lawn} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={pool} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={restraunt} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={single} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={sofa} alt=""/>
					</div>
					<div className="image">
						<img className="lazy-image" src={tv} alt=""/>
					</div>
      				<div className="image">
      					<img className="lazy-image" data-src="../../assets/img/single.jpg" alt=""/>
      				</div>
				</div>
			</div>
			
		</div>
	)
}

export default Gallery;