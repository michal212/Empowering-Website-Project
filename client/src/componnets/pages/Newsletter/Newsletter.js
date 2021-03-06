import React, { useState, useEffect } from 'react';
import { getAllCampagins } from "../../../service/newsletter-service";
import { ArrowDownOutlined } from "@ant-design/icons";

import './Newsletter.css';

const Newsletter = () => {
  const [campagins1, setCampagins] = useState([]);


  useEffect(() => {
    getAllCampagins().then(res => res.json())
      .then(res => setCampagins(res.sortedCampagins))
      .catch(err => console.log(err))
  }, [])

  const [visible, setVisible] = useState(false);
  const [iframeSelected, setIframeSelected] = useState({});
  const showIframe = (id) => {
    setVisible(true);
    console.log();
    setIframeSelected(() => campagins1.find((campaign) => campaign.id === id));
  };
  return (
    <>
      <h1>dsads</h1>
      <div className="campaign-T">
        {campagins1.map((campaign) =>

          <h3 onClick={() => showIframe(campaign.id)}>
            ניזולטר
            <ArrowDownOutlined style={{ background: "white", width: "30px", height: "30px", borderRadius: "100%" }} />
          </h3>
        )}
      </div>
      {
        visible && (
          <div className="iframe">
            <iframe
              src={iframeSelected.archive_url}
              width="100%"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
        )
      }
    </>
  );
};

export default Newsletter;
