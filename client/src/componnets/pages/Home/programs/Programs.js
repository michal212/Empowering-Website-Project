import 'animate.css';
import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { ReadOutlined } from '@ant-design/icons';
import cookies from 'js-cookie';

import './programs.css';
import { getAllPlans, getAllPlansEng } from '../../../../service/plan-service';

const Programs = () => {
  const { Meta } = Card;
  const [clickedIndex, setClickedIndex] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [programsEng, setProgramsEng] = useState([]);
  const [both, setBoth] = useState([]);

  const cardProgramOn = 'color:"white",marginLeft:"5px"';

  const currentLangCode = cookies.get('i18next') || 'heb';

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    getAllPlans()
      .then((res) => res.json())
      .then((data) => setPrograms(data));
    getAllPlansEng()
      .then((res) => res.json())
      .then((data) => setProgramsEng(data));
  }, []);

  const ImgDisappearedOnHover = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  // useEffect(() => {
  //   setBoth(currentLangCode === 'heb' ? programs : programsEng);
  // }, [currentLangCode]);

  return (
    <div className='programs-wrapper'>
      <div className='programs-header'>
        <h3 style={{ color: '#D57E7E', fontSize: '32px' }}>תוכניות</h3>
        <div className='programs-header-decertion'></div>
      </div>
      <div className='cards-wrapper '>
        {currentLangCode === 'heb'
          ? programs.map((program, index) => (
              <Card
                className='program-card'
                onClick={ImgDisappearedOnHover(index)}
                hoverable
                cover={
                  clickedIndex[index] ? (
                    <div className='program-card animate__animated animate__fadeInUp'>
                      <div className='card-program-clicked-container'>
                        <h2 className='program-clicked-header'>
                          {program.title}{' '}
                        </h2>
                        <p className='program-clicked-description'>
                          {program.description}
                        </p>
                        <div>
                          {/* <img
                        className='img-program-card'
                        src='./logo-main1.jpeg'
                        alt='program card img'
                      /> */}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      className='program-card animate__animated animate__fadeIn'
                      alt='example'
                      src='./woman-vector.jpg'
                    />
                  )
                }
              >
                <Meta
                  title={
                    clickedIndex[index] ? (
                      ''
                    ) : (
                      <h3 className='program-card-title'>
                        {program.title}
                        <ReadOutlined style={{ marginLeft: '4px' }} />
                      </h3>
                    )
                  }
                />
              </Card>
            ))
          : programsEng.map((program, index) => (
              <Card
                className='program-card'
                onClick={ImgDisappearedOnHover(index)}
                hoverable
                cover={
                  clickedIndex[index] ? (
                    <div className='program-card animate__animated animate__fadeInUp'>
                      <div className='card-program-clicked-container'>
                        <h2 className='program-clicked-header'>
                          {program.title}{' '}
                        </h2>
                        <p className='program-clicked-description-english'>
                          {program.description}
                        </p>
                        <div>
                          {/* <img
                        className='img-program-card'
                        src='./logo-main1.jpeg'
                        alt='program card img'
                      /> */}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      className='program-card animate__animated animate__fadeIn'
                      alt='example'
                      src='./woman-vector.jpg'
                    />
                  )
                }
              >
                <Meta
                  title={
                    clickedIndex[index] ? (
                      ''
                    ) : (
                      <h3 className='program-card-title'>
                        {program.title}
                        <ReadOutlined style={{ marginLeft: '4px' }} />
                      </h3>
                    )
                  }
                />
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Programs;
