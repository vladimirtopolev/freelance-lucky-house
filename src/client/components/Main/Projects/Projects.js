import Slider from "react-slick";
import React from "react";
import ExtractModuleData from '../../common/ExtractModuleTable';
import {Link} from 'react-router-dom';
import ProjectItem from './ProjectItem';

import './Project.scss';

const settings = {
    dots: true,
    dotsClass: 'portfolio__slider-dots slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const Projects = ({ rows }) => {
    return (
        <div className="portfolio">
            <div className="portfolio__container container">
                <div className="portfolio__title block-title">
                    Проекты
                </div>
                <div className="portfolio__slider">
                    <Slider {...settings}>
                        {rows.map((row, i) => {
                            return <ProjectItem key={i} row={row} i={i} />
                        })}
                    </Slider>
                </div>
                <div className="portfolio__more">
                    <Link to="/projects" className="btn btn-primary">Подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default ExtractModuleData('projects')(Projects);
